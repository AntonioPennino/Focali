import type { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export const handler: Handler = async (event) => {
  console.log("--- get-order function invoked ---");

  try {
    const { orderNumber, email } = event.queryStringParameters || {};

    if (!orderNumber || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Order number and email are required" }),
      };
    }

    console.log("Searching order:", { orderNumber, email });

    // Cerca l'ordine nel database
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("order_number", orderNumber)
      .eq("customer_email", email)
      .single();

    if (error || !data) {
      console.log("Order not found:", error);
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Ordine non trovato. Verifica numero ordine e email." }),
      };
    }

    console.log("Order found:", data);

    return {
      statusCode: 200,
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
