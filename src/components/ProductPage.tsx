import { useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { ImageWithFallback } from './ImageWithFallback';
import { CheckCircle2, Shield } from 'lucide-react';
import { useState } from 'react';
import { SEO } from './SEO';

// Import images so Vite knows to bundle them
// Use public static paths (served from `public/imgs/`) so production serves them as /imgs/... 
const sankyo1 = '/imgs/IMG_20251031_082526_969.jpg';
const sankyo2 = '/imgs/IMG_20251031_082527_277.jpg';
const sankyo3 = '/imgs/IMG_20251031_082527_412.jpg';

interface Product {
  id: number;
  name: string;
  brand: string;
  year: string;
  price: number;
  image: string;
}

interface ProductPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function ProductPage({ products, onAddToCart }: ProductPageProps) {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === parseInt(id || ''));
  
  // Immagini della Sankyo - 3 angolazioni diverse
  const sankyoImages = [sankyo1, sankyo2, sankyo3];
  
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <SEO 
          title="Prodotto Non Trovato - Focali"
          description="Il prodotto che stai cercando non è disponibile o non esiste."
        />
        <h2 className="text-2xl">Prodotto non trovato</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={`${product.name} - Focali`}
        description={`Acquista la ${product.name}, una cinepresa ${product.brand} del ${product.year}. Testata, garantita e pronta per le tue storie.`}
        name="Focali"
        type="product"
      />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images Gallery */}
            <div className="animate-slide-in-left">
              {/* Main Image - Large */}
              <div className="mb-6 bg-white rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={sankyoImages[selectedImage]}
                  alt={`${product.name} - Foto ${selectedImage + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              
              {/* Image Counter */}
              <div className="text-center mb-4 text-sm text-gray-600">
                Foto {selectedImage + 1} di {sankyoImages.length}
              </div>
              
              {/* Thumbnails - Horizontal Strip */}
              <div className="flex gap-3 justify-center animate-fade-in-up">
                {sankyoImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    aria-label={`Visualizza foto ${index + 1}`}
                    className={`relative overflow-hidden rounded-md border-2 transition-all transform hover:scale-110 ${
                      selectedImage === index 
                        ? 'border-[#D97941] shadow-md ring-2 ring-[#D97941] ring-offset-2' 
                        : 'border-gray-300 hover:border-[#A0522D] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="relative w-20 h-20">
                      <ImageWithFallback
                        src={img}
                        alt={`Foto ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Number Badge */}
                      <div className={`absolute bottom-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        selectedImage === index 
                          ? 'bg-[#D97941] text-white' 
                          : 'bg-gray-800 text-white'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="animate-slide-in-right">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 playfair-heading">
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
                className="w-full bg-[#D97941] hover:bg-[#A0522D] text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                onClick={() => onAddToCart(product)}
              >
                Aggiungi al Carrello
              </Button>

              <div className="mt-8 space-y-4 animate-fade-in-up">
                <div className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
                  <div className="w-12 h-12 bg-[#E8DCC4]/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <CheckCircle2 className="text-[#1A1A1A]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Testata Personalmente</h4>
                    <p className="text-sm text-gray-600">Verificata da me, filmmaker professionista, pronta all'uso.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
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
