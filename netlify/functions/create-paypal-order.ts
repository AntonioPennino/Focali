import type { Handler } from "@netlify/functions";

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;
const base = "https://api-m.sandbox.paypal.com";

// Funzione per generare un token di accesso
const generateAccessToken = async () => {
  console.log("1. Attempting to generate access token...");
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      console.error("MISSING_API_CREDENTIALS");
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
    console.log("2. Access token generated successfully.");
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
    throw error; // Rilancia l'errore per essere catturato dal chiamante
  }
};

// Funzione per creare un ordine
const createOrder = async (cart) => {
  console.log("3. Attempting to create order with cart:", cart);
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;

  // Assicuriamoci che il prezzo sia una stringa con due decimali
  const totalAmount = parseFloat(cart.price).toFixed(2);
  console.log(`4. Calculated total amount: ${totalAmount}`);

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

  console.log(
    "5. Sending payload to PayPal:",
    JSON.stringify(payload, null, 2)
  );

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
async function handleResponse(response) {
  try {
    const jsonResponse = await response.json();
    console.log(
      `6. Received PayPal response with status ${response.status}:`,
      JSON.stringify(jsonResponse, null, 2)
    );
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    console.error("7. Failed to parse PayPal response:", errorMessage);
    throw new Error(errorMessage);
  }
}

export const handler: Handler = async (event) => {
  console.log("--- Invoking create-paypal-order function ---");
  try {
    if (!event.body) {
      console.error("Event body is missing.");
      return { statusCode: 400, body: "Event body is missing." };
    }

    console.log("Received event body:", event.body);
    const { cart } = JSON.parse(event.body);

    if (!cart) {
      console.error("Cart data is missing from the request body.");
      return { statusCode: 400, body: "Cart data is missing." };
    }

    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    console.log("--- Function execution completed successfully ---");
    return {
      statusCode: httpStatusCode,
      body: JSON.stringify(jsonResponse),
    };
  } catch (error) {
    console.error("!!! Unhandled error in handler:", error);
    console.log("--- Function execution failed ---");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create order." }),
    };
  }
};
