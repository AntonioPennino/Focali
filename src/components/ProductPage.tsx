import { useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { ImageWithFallback } from './ImageWithFallback';
import { CheckCircle2, Shield, Video } from 'lucide-react';
import { useState } from 'react';

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
  
  // Immagini della Sankyo
  const sankyoImages = [
    '/src/imgs/IMG_20251031_082526_969.jpg',
    '/src/imgs/IMG_20251031_082527_277.jpg',
    '/src/imgs/IMG_20251031_082527_412.jpg'
  ];
  
  const [selectedImage, setSelectedImage] = useState(0);

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
            {/* Product Images Gallery */}
            <div>
              {/* Main Image */}
              <div className="mb-4">
                <ImageWithFallback
                  src={sankyoImages[selectedImage]}
                  alt={`${product.name} - Foto ${selectedImage + 1}`}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {sankyoImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    aria-label={`Visualizza foto ${index + 1}`}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-[#A0522D] shadow-md' 
                        : 'border-gray-200 hover:border-[#D97941]'
                    }`}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`${product.name} - Miniatura ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {product.name}
              </h1>
              <p className="text-2xl text-gray-800 mb-6">{product.price} €</p>
              
              <div className="prose prose-lg text-gray-700 mb-8">
                <p>
                  Questa <strong>Sankyo Sound XL 40S</strong> del 1978 è una delle migliori cineprese Super 8 
                  mai prodotte. Dotata di registrazione audio sincronizzato, obiettivo zoom macro e controlli manuali, 
                  è perfetta sia per progetti artistici che per chi vuole vivere l'esperienza autentica del cinema analogico.
                </p>
                <p className="mt-4">
                  <strong>Condizioni:</strong> Testata e funzionante. Meccanica precisa, ottica pulita, 
                  esposimetro calibrato. Include custodia originale.
                </p>
                <p className="mt-4">
                  <strong>Cosa include:</strong> Cinepresa, custodia originale, tracolla, manuale (copia), 
                  certificato di autenticità Focali.
                </p>
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
