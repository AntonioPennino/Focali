import type { Handler } from "@netlify/functions";

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;
const base = "https://api-m.sandbox.paypal.com";

// Funzione per generare un token di accesso
const generateAccessToken = async () => {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      // Missing credentials - fail fast
      throw new Error("MISSING_API_CREDENTIALS");
    }
    const auth = Buffer.from(
      `${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`
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
    // Log error for Netlify logs
    console.error("Failed to generate Access Token:", error);
    throw error; // Rilancia l'errore per essere catturato dal chiamante
  }
};

// Funzione per creare un ordine
const createOrder = async (cart: any): Promise<any> => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;

  // Assicuriamoci che il prezzo sia una stringa con due decimali
  const totalAmount = parseFloat(cart.price).toFixed(2);

  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "EUR",
          value: totalAmount,
        },
        description: cart.name, // Aggiungiamo una descrizione
      },
    ],
  };

  // Sending payload to PayPal

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};

// Funzione per gestire la risposta di PayPal
async function handleResponse(response: any): Promise<any> {
  try {
    const jsonResponse = await response.json();
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    console.error("Failed to parse PayPal response:", errorMessage);
    throw new Error(errorMessage);
  }
}

export const handler: Handler = async (event) => {
  try {
    if (!event.body) {
      return { statusCode: 400, body: JSON.stringify({ error: "Event body is missing." }) };
    }

    const { cart } = JSON.parse(event.body);

    if (!cart) {
      return { statusCode: 400, body: JSON.stringify({ error: "Cart data is missing." }) };
    }

    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    return {
      statusCode: httpStatusCode,
      body: JSON.stringify(jsonResponse),
    };
  } catch (error) {
    console.error("create-paypal-order error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create order." }),
    };
  }
};
