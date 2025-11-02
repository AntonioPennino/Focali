import { Handler, HandlerEvent } from "@netlify/functions";

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_MODE, PAYPAL_BASE_URL } = process.env;
const base = PAYPAL_BASE_URL
    ? PAYPAL_BASE_URL
    : (PAYPAL_MODE === 'live' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com');

// Generate an access token
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

// Capture payment for an order
async function captureOrder(orderID: string) {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderID}/capture`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
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

        const { orderID } = JSON.parse(event.body);
        const { jsonResponse, httpStatusCode } = await captureOrder(orderID);

        return {
            statusCode: httpStatusCode,
            body: JSON.stringify(jsonResponse),
        };

    } catch (error) {
        console.error("Failed to capture order:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to capture order." }),
        };
    }
};
