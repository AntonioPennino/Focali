import { Handler, HandlerEvent } from "@netlify/functions";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;
const base = "https://api-m.sandbox.paypal.com";

// Generate an access token from PayPal
async function generateAccessToken() {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS");
    }
    const auth = Buffer.from(
      PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET
    ).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
    throw error;
  }
}

// Create an order
async function createOrder(cart: CartItem[]) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;

  // Simple validation. In a real app, you'd want to verify
  // the product details and prices from a database.
  const total = cart.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0);
  if (total <= 0) {
    throw new Error("Cart is empty or total is zero.");
  }

  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "EUR",
          value: total.toFixed(2),
        },
      },
    ],
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
}

async function handleResponse(response: Response) {
  try {
    const jsonResponse = await response.json();
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}

export const handler: Handler = async (event: HandlerEvent) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method Not Allowed" }),
      };
    }

    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Bad Request: Missing body" }),
      };
    }

    const { cart } = JSON.parse(event.body);
    const { jsonResponse, httpStatusCode } = await createOrder(cart);

    return {
      statusCode: httpStatusCode,
      body: JSON.stringify(jsonResponse),
    };

  } catch (error) {
    console.error("Failed to create order:", error);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: "Failed to create order." }) 
    };
  }
};
