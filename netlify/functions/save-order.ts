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
  console.log("--- save-order function invoked ---");

  try {
    if (!event.body) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing body" }) };
    }

    const { paypalOrderId, customerEmail, customerName, productName, amount } =
      JSON.parse(event.body);

    console.log("Saving order:", { paypalOrderId, customerEmail, productName, amount });

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
        customer_email: customerEmail,
        customer_name: customerName || "Cliente",
        product_name: productName,
        amount: amount,
        currency: "EUR",
        status: "completed",
      },
    ]).select();

    if (error) {
      console.error("Supabase error:", error);
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }

    console.log("Order saved successfully:", data);

    return {
      statusCode: 200,
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
