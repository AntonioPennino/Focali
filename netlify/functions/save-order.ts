import type { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

// Genera un numero d'ordine unico (formato: FXXX-XXXX-XXXX)
function generateOrderNumber(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const segments = [4, 4, 4];
  return (
    "F" +
    segments
      .map((len) =>
        Array.from({ length: len }, () =>
          chars.charAt(Math.floor(Math.random() * chars.length))
        ).join("")
      )
      .join("-")
  );
}

export const handler: Handler = async (event) => {
  // Solo metodo POST consentito
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  console.log("--- save-order function invoked ---");

  try {
    if (!event.body) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing body" }) };
    }

    const { paypalOrderId, customerEmail, customerName, productName, amount } =
      JSON.parse(event.body);

    // Validazione input
    if (!paypalOrderId || !customerEmail || !productName || !amount) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid email format" }),
      };
    }

    // Validazione amount (deve essere un numero positivo)
    if (typeof amount !== "number" || amount <= 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid amount" }),
      };
    }

    console.log("Saving order for email:", customerEmail.substring(0, 3) + "***");

    // Genera numero d'ordine univoco
    let orderNumber = generateOrderNumber();
    let attempts = 0;

    // Verifica che il numero non esista già (molto improbabile, ma per sicurezza)
    while (attempts < 5) {
      const { data: existing } = await supabase
        .from("orders")
        .select("order_number")
        .eq("order_number", orderNumber)
        .single();

      if (!existing) break;
      orderNumber = generateOrderNumber();
      attempts++;
    }

    // Salva l'ordine nel database
    const { data, error } = await supabase.from("orders").insert([
      {
        order_number: orderNumber,
        paypal_order_id: paypalOrderId,
        customer_email: customerEmail.toLowerCase(), // Normalizza email
        customer_name: customerName || "Cliente",
        product_name: productName,
        amount: parseFloat(amount.toFixed(2)), // Assicura 2 decimali
        currency: "EUR",
        status: "completed",
      },
    ]).select();

    if (error) {
      console.error("Supabase error:", error);
      return { statusCode: 500, body: JSON.stringify({ error: "Failed to save order" }) };
    }

    console.log("Order saved successfully");

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        orderNumber: orderNumber,
        order: data[0],
      }),
    };
  } catch (error) {
    console.error("Error saving order:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to save order" }),
    };
  }
};
