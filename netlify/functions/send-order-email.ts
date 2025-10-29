import type { Handler } from "@netlify/functions";

const RESEND_API_KEY = process.env.RESEND_API_KEY!;

export const handler: Handler = async (event) => {
  console.log("--- send-order-email function invoked ---");

  try {
    if (!event.body) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing body" }) };
    }

    const { customerEmail, orderNumber, productName, amount } = JSON.parse(event.body);

    console.log("Sending email to:", customerEmail);

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Georgia', serif; color: #1A1A1A; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
          .header { text-align: center; margin-bottom: 40px; }
          .header h1 { font-family: 'Playfair Display', Georgia, serif; color: #A0522D; margin: 0; }
          .order-box { background: #E8DCC4; padding: 30px; border-radius: 8px; margin: 30px 0; }
          .order-number { font-size: 24px; font-weight: bold; color: #A0522D; text-align: center; margin: 20px 0; }
          .details { margin: 20px 0; }
          .details p { margin: 10px 0; }
          .footer { text-align: center; margin-top: 40px; color: #666; font-size: 14px; }
          .track-button { display: inline-block; background: #A0522D; color: white; padding: 15px 30px; text-decoration: none; border-radius: 4px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>FOCALI</h1>
            <p>Grazie per il tuo acquisto!</p>
          </div>
          
          <p>Ciao,</p>
          <p>Il tuo ordine è stato confermato e verrà spedito a breve.</p>
          
          <div class="order-box">
            <div class="order-number">${orderNumber}</div>
            <div class="details">
              <p><strong>Prodotto:</strong> ${productName}</p>
              <p><strong>Totale:</strong> €${amount}</p>
              <p><strong>Email:</strong> ${customerEmail}</p>
            </div>
            
            <div style="text-align: center;">
              <a href="https://focalishop.netlify.app/traccia-ordine" class="track-button">
                Traccia il tuo ordine
              </a>
            </div>
          </div>
          
          <p>Per tracciare il tuo ordine, visita la pagina di tracciamento e inserisci:</p>
          <ul>
            <li>Numero ordine: <strong>${orderNumber}</strong></li>
            <li>Email: <strong>${customerEmail}</strong></li>
          </ul>
          
          <div class="footer">
            <p>Focali - Cineprese Vintage d'Autore</p>
            <p>Via Luigi Einaudi 2, 80021 Afragola (NA), Italia</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Focali <onboarding@resend.dev>", // Cambieremo con il tuo dominio dopo
        to: customerEmail,
        subject: `Ordine confermato - ${orderNumber}`,
        html: emailHtml,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend error:", data);
      return { statusCode: 500, body: JSON.stringify({ error: data }) };
    }

    console.log("Email sent successfully:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, emailId: data.id }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
