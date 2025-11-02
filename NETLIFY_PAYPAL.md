PayPal Live setup and health-check
=================================

Follow these steps to enable PayPal Live on Netlify and verify the credentials without creating orders.

1) Environment variables (Netlify dashboard → Site settings → Build & deploy → Environment):

- `PAYPAL_MODE=live` (optional — if omitted sandbox is used)
- `PAYPAL_CLIENT_ID` (your PayPal live client id)
- `PAYPAL_CLIENT_SECRET` (your PayPal live secret)
- `VITE_PAYPAL_CLIENT_ID` (same client id used by the frontend PayPal SDK)

2) Deploy the site (after setting env vars). The repository includes a small Netlify function `paypal-health` which performs an OAuth token request to PayPal and returns a minimal JSON response.

3) Call the health-check (replace <YOUR_SITE_URL> with your Netlify URL):

PowerShell example:

```powershell
Invoke-RestMethod -Uri 'https://<YOUR_SITE_URL>/.netlify/functions/paypal-health' -Method GET | ConvertTo-Json
```

Response samples:

- Success:

```json
{ "ok": true, "mode": "live", "expires_in": 32400 }
```

- Missing credentials:

```json
{ "ok": false, "error": "Missing PayPal credentials in environment" }
```

Notes:
- The health-check function only requests an OAuth token and does not create orders or perform charges.
- Do NOT commit credentials to source control. Use Netlify environment variables.
