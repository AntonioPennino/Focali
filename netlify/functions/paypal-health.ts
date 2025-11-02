import type { Handler } from "@netlify/functions";

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_MODE, PAYPAL_BASE_URL } = process.env;
const base = PAYPAL_BASE_URL
  ? PAYPAL_BASE_URL
  : PAYPAL_MODE === 'live'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com';

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== 'GET') {
      return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'Missing PayPal credentials in environment' }) };
    }

    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64');

    const resp = await fetch(`${base}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const data = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      // Return PayPal error in structured form but avoid echoing secrets
      return {
        statusCode: resp.status || 502,
        body: JSON.stringify({ ok: false, error: 'Failed to obtain access token', details: data || null }),
      };
    }

    // Successful auth - return minimal info useful for health checks
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, mode: PAYPAL_MODE || 'sandbox', expires_in: data.expires_in || null }),
    };
  } catch (err: any) {
    console.error('paypal-health error:', err && err.message ? err.message : err);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: 'Internal server error' }) };
  }
};
