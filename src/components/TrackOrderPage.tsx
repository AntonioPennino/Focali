import { useState } from 'react';
import { Search, Package, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOrder(null);

    try {
      const response = await fetch(
        `/.netlify/functions/get-order?orderNumber=${encodeURIComponent(
          orderNumber
        )}&email=${encodeURIComponent(email)}`
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Ordine non trovato');
        setLoading(false);
        return;
      }

      setOrder(data.order);
      toast.success('Ordine trovato!');
    } catch (error) {
      console.error(error);
      toast.error('Errore durante la ricerca dell\'ordine');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto animate-fade-in-up">
        <div className="text-center mb-12 animate-fade-in-down">
          <Package size={64} className="mx-auto mb-6 text-[#D97941]" />
          <h1 className="text-4xl md:text-5xl mb-4 playfair-heading">
            Traccia il Tuo Ordine
          </h1>
          <p className="text-[#1A1A1A]/70">
            Inserisci il numero d'ordine e l'email usata per l'acquisto
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm mb-8 border border-[#1A1A1A]/5 animate-scale-in">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Numero Ordine
              </label>
              <input
                type="text"
                placeholder="FXXXX-XXXX-XXXX"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value.toUpperCase())}
                className="w-full px-4 py-3 border border-[#1A1A1A]/20 rounded focus:outline-none focus:border-[#D97941] focus:ring-2 focus:ring-[#D97941]/20 transition-all duration-300 bg-[#E8DCC4]/5"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="tua@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-[#1A1A1A]/20 rounded focus:outline-none focus:border-[#D97941] focus:ring-2 focus:ring-[#D97941]/20 transition-all duration-300 bg-[#E8DCC4]/5"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D97941] hover:bg-[#A0522D] py-3 text-lg rounded-md font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-white hover:shadow-lg transform hover:scale-105"
            >
              {loading ? (
                'Ricerca in corso...'
              ) : (
                <div className="flex items-center justify-center">
                  <Search size={20} className="mr-2" />
                  Cerca Ordine
                </div>
              )}
            </button>
          </div>
        </form>

        {order && (
          <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-[#D97941] animate-scale-in">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle size={48} className="text-[#D97941]" />
            </div>

            <h2 className="text-2xl text-center mb-6 playfair-heading">
              Ordine Confermato
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-[#1A1A1A]/10 hover:bg-[#E8DCC4]/10 px-2 rounded transition-colors">
                <span className="text-[#1A1A1A]/60">Numero Ordine</span>
                <span className="font-medium">{order.orderNumber}</span>
              </div>

              <div className="flex justify-between py-3 border-b border-[#1A1A1A]/10 hover:bg-[#E8DCC4]/10 px-2 rounded transition-colors">
                <span className="text-[#1A1A1A]/60">Prodotto</span>
                <span className="font-medium">{order.productName}</span>
              </div>

              <div className="flex justify-between py-3 border-b border-[#1A1A1A]/10 hover:bg-[#E8DCC4]/10 px-2 rounded transition-colors">
                <span className="text-[#1A1A1A]/60">Totale</span>
                <span className="font-medium">
                  €{parseFloat(order.amount).toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between py-3 border-b border-[#1A1A1A]/10 hover:bg-[#E8DCC4]/10 px-2 rounded transition-colors">
                <span className="text-[#1A1A1A]/60">Stato</span>
                <span className="font-medium text-[#D97941]">
                  {order.status === 'completed' ? 'Completato' : order.status}
                </span>
              </div>

              <div className="flex justify-between py-3 border-b border-[#1A1A1A]/10 hover:bg-[#E8DCC4]/10 px-2 rounded transition-colors">
                <span className="text-[#1A1A1A]/60">Data</span>
                <span className="font-medium">
                  {new Date(order.createdAt).toLocaleDateString('it-IT', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>

              <div className="flex justify-between py-3 hover:bg-[#E8DCC4]/10 px-2 rounded transition-colors">
                <span className="text-[#1A1A1A]/60">Cliente</span>
                <span className="font-medium">{order.customerName}</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#E8DCC4]/20 border border-[#E8DCC4]/50 rounded">
              <p className="text-sm text-center text-[#1A1A1A]/70">
                Riceverai presto un'email con i dettagli sulla spedizione
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
