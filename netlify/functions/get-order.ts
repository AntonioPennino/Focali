import type { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export const handler: Handler = async (event) => {
  // Solo metodo GET consentito
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  // get-order invoked

  try {
    const { orderNumber, email } = event.queryStringParameters || {};

    // Validazione input
    if (!orderNumber || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Order number and email are required" }),
      };
    }

    // Validazione formato email (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid email format" }),
      };
    }

    // Validazione formato order number (FXXXX-XXXX-XXXX)
    const orderRegex = /^F[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
    if (!orderRegex.test(orderNumber)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid order number format" }),
      };
    }

  // Searching order for email (partial)

    // Cerca l'ordine nel database
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("order_number", orderNumber)
      .eq("customer_email", email)
      .single();

    if (error || !data) {
      // order not found
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Ordine non trovato. Verifica numero ordine e email." }),
      };
    }
    // order found

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        order: {
          orderNumber: data.order_number,
          productName: data.product_name,
          amount: data.amount,
          currency: data.currency,
          status: data.status,
          createdAt: data.created_at,
          customerName: data.customer_name,
        },
      }),
    };
  } catch (error) {
    console.error("Error fetching order:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch order" }),
    };
  }
};
