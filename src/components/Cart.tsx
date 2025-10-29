import { X, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from 'react';
import { toast } from 'sonner';

interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onSuccessfulCheckout: () => void;
}

export function Cart({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity, onSuccessfulCheckout }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const paypalCreateOrder = async () => {
    console.log("🔵 [Frontend] Inizio creazione ordine PayPal");
    try {
      // Prepariamo un oggetto con i dati corretti per il backend
      const orderPayload = {
        name: items.length > 0 ? items[0].name : "Acquisto", // Usa il nome del primo articolo
        price: total, // Usa il totale già calcolato
      };
      console.log("🔵 [Frontend] Payload da inviare:", orderPayload);

      const response = await fetch("/.netlify/functions/create-paypal-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Invia l'oggetto corretto
        body: JSON.stringify({ cart: orderPayload }),
      });
      
      console.log("🔵 [Frontend] Risposta HTTP ricevuta. Status:", response.status);
      const order = await response.json();
      console.log("🔵 [Frontend] Risposta completa dal backend:", order);
      
      if (order.id) {
        console.log("✅ [Frontend] ID ordine ricevuto e restituito:", order.id);
        return order.id;
      } else {
        // Log dell'errore specifico da PayPal se disponibile
        console.error("❌ [Frontend] Nessun ID ordine nella risposta");
        const errorDetails = order.details ? JSON.stringify(order.details) : "Nessun dettaglio disponibile.";
        console.error("Errore dalla funzione Netlify:", order.message, errorDetails);
        toast.error(`Errore da PayPal: ${order.message || "Impossibile creare l'ordine."}`);
        throw new Error("No order ID received");
      }
    } catch (error) {
      console.error("❌ [Frontend] Errore catturato in paypalCreateOrder:", error);
      toast.error("Si è verificato un errore di rete. Riprova.");
      throw error;
    }
  };

  const paypalOnApprove = async (data: any) => {
    try {
      // 1. Cattura il pagamento su PayPal
      const captureResponse = await fetch("/.netlify/functions/capture-paypal-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderID: data.orderID }),
      });
      const orderDetails = await captureResponse.json();
      
      if (orderDetails.status !== 'COMPLETED') {
        throw new Error(orderDetails.error || "Failed to capture PayPal order.");
      }

      // 2. Estrai i dati del cliente da PayPal
      const payerInfo = orderDetails.payer || {};
      const customerEmail = payerInfo.email_address || "noemail@provided.com";
      const customerName = payerInfo.name 
        ? `${payerInfo.name.given_name || ''} ${payerInfo.name.surname || ''}`.trim()
        : "Cliente";

      // 3. Salva l'ordine nel database
      const saveResponse = await fetch("/.netlify/functions/save-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paypalOrderId: data.orderID,
          customerEmail: customerEmail,
          customerName: customerName,
          productName: items[0].name,
          amount: total,
        }),
      });

      const saveData = await saveResponse.json();

      if (!saveResponse.ok) {
        console.error("Failed to save order:", saveData);
        // Non blocchiamo il flusso se il salvataggio fallisce
      } else {
        console.log("Order saved:", saveData);

        // 4. Invia email di conferma
        fetch("/.netlify/functions/send-order-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerEmail: customerEmail,
            orderNumber: saveData.orderNumber,
            productName: items[0].name,
            amount: total,
          }),
        }).catch((err) => console.error("Failed to send email:", err));

        toast.success(`Pagamento completato! Numero ordine: ${saveData.orderNumber}`);
      }

      onSuccessfulCheckout();
    } catch (error) {
      console.error(error);
      toast.error("Si è verificato un errore durante la conferma del pagamento. Riprova.");
    } finally {
      setIsProcessing(false);
    }
  };

  const paypalOnError = (err: any) => {
    console.error("PayPal Checkout Error", err);
    toast.error("Si è verificato un errore con PayPal. Riprova o contatta l'assistenza.");
    setIsProcessing(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full md:w-[400px] bg-white z-50 shadow-2xl transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#1A1A1A]/10">
            <h2 style={{ fontFamily: 'Playfair Display, serif' }}>Il Tuo Carrello</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#E8DCC4]/30 rounded-full transition-colors"
              aria-label="Chiudi carrello"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#A0522D]">Il carrello è vuoto</p>
                <p className="text-sm text-[#1A1A1A]/60 mt-2">
                  Aggiungi una cinepresa vintage per iniziare
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-[#E8DCC4]/10 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm mb-1">{item.name}</h4>
                      <p className="text-xs text-[#A0522D] mb-2">{item.brand}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-6 h-6 rounded border border-[#1A1A1A]/20 hover:bg-[#E8DCC4]/30 text-sm"
                        >
                          −
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded border border-[#1A1A1A]/20 hover:bg-[#E8DCC4]/30 text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#A0522D] hover:text-[#1A1A1A] transition-colors"
                        aria-label="Rimuovi"
                      >
                        <Trash2 size={16} />
                      </button>
                      <p className="text-sm">€{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-[#1A1A1A]/10 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span>Totale</span>
                <span style={{ fontSize: '1.5rem', fontFamily: 'Playfair Display, serif' }}>
                  €{total.toFixed(2)}
                </span>
              </div>
              {isProcessing ? (
                <div className="text-center">
                  <p>Processando il pagamento...</p>
                </div>
              ) : (
                <PayPalScriptProvider options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || "test", currency: "EUR", intent: "capture" }}>
                    <PayPalButtons 
                        style={{ layout: "vertical", color: 'blue', shape: 'rect', label: 'pay' }}
                        createOrder={paypalCreateOrder}
                        onApprove={paypalOnApprove}
                        onError={paypalOnError}
                        disabled={isProcessing}
                    />
                </PayPalScriptProvider>
              )}
              <Button
                variant="outline"
                className="w-full border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#E8DCC4]/30"
                onClick={onClose}
                disabled={isProcessing}
              >
                Continua lo Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
