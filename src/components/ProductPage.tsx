import { useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { ImageWithFallback } from './ImageWithFallback';
import { CheckCircle2, Shield, Video } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  brand: string;
  year: string;
  price: number;
  image: string;
  hasVideoTest: boolean;
}

interface ProductPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function ProductPage({ products, onAddToCart }: ProductPageProps) {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === parseInt(id || ''));

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-2xl">Prodotto non trovato</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {product.name}
              </h1>
              <p className="text-2xl text-gray-800 mb-6">{product.price} €</p>
              
              <div className="prose prose-lg text-gray-700 mb-8">
                <p>
                  Un pezzo di storia del cinema, questa <strong>{product.brand}</strong> del {product.year} è pronta per una nuova vita. 
                  Testata e certificata, offre un'esperienza di ripresa autentica e ricca di fascino.
                </p>
                {/* Add more detailed description here */}
              </div>

              <Button
                size="lg"
                className="w-full bg-[#D97941] hover:bg-[#A0522D] text-white"
                onClick={() => onAddToCart(product)}
              >
                Aggiungi al Carrello
              </Button>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E8DCC4]/80 rounded-full flex items-center justify-center">
                    <Video className="text-[#1A1A1A]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Test Completo</h4>
                    <p className="text-sm text-gray-600">Video test funzionale incluso per mostrarti ogni dettaglio.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E8DCC4]/80 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-[#1A1A1A]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Storytelling Autentico</h4>
                    <p className="text-sm text-gray-600">Conosci la storia del tuo pezzo con il certificato di autenticità.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E8DCC4]/80 rounded-full flex items-center justify-center">
                    <Shield className="text-[#1A1A1A]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Garanzia 12 Mesi</h4>
                    <p className="text-sm text-gray-600">Acquista con sicurezza, ogni cinepresa è garantita per un anno.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
