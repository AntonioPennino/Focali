import { X, Trash2 } from 'lucide-react';
import { Button } from './ui/button';

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
}

export function Cart({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

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
                  €{total}
                </span>
              </div>
              <Button className="w-full bg-[#D97941] hover:bg-[#A0522D] text-white">
                Procedi al Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#E8DCC4]/30"
                onClick={onClose}
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
