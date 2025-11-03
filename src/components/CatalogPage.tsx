import { ProductCard } from './ProductCard';
import { SEO } from './SEO';

interface Product {
  id: number;
  name: string;
  brand: string;
  year: string;
  price: number;
  image: string;
}

interface CatalogPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function CatalogPage({ products, onAddToCart }: CatalogPageProps) {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Catalogo Cineprese - Focali"
        description="Esplora il catalogo completo di cineprese analogiche vintage. Ogni pezzo è testato, garantito e pronto per essere spedito."
        name="Focali"
        type="website"
      />
      {/* Hero */}
      <section className="bg-[#E8DCC4]/30 py-20 animate-fade-in-down">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 heading-hero-small">
            Catalogo Cineprese
          </h1>
          <p className="text-[#1A1A1A]/70 text-base-custom">
            Tutte le cineprese disponibili, testate e pronte per te
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, idx) => (
                  <div key={product.id} className={`animate-fade-in-up animate-stagger-${(idx % 5) + 1}`}>
                    <ProductCard
                      product={product}
                      onAddToCart={onAddToCart}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center animate-fade-in-up">
                <p className="text-[#1A1A1A]/60 text-sm">
                  Nuove cineprese in arrivo ogni settimana. Scrivimi per rimanere aggiornato!
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-16 animate-scale-in">
              <div className="mb-6">
                <div className="w-24 h-24 bg-[#E8DCC4] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
                  <span className="text-6xl">📹</span>
                </div>
              </div>
              <h2 className="mb-4 heading-xl">
                Nessuna Cinepresa Disponibile
              </h2>
              <p className="text-[#1A1A1A]/70 max-w-md mx-auto mb-8">
                Al momento non ci sono cineprese in catalogo, ma ne arrivano di nuove ogni settimana.
                Scrivimi per essere aggiornato in tempo reale!
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-[#D97941] hover:bg-[#A0522D] text-white px-6 py-3 rounded-md transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  Scrivimi su Email
                </a>
                <a
                  href="https://wa.me/+393395959555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#E8DCC4]/30 px-6 py-3 rounded-md transition-all duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up animate-stagger-1 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-2 animate-bounce-gentle">📹</div>
              <h3 className="mb-2 playfair-heading">Video Test</h3>
              <p className="text-white/70 text-sm">Ogni cinepresa ha un video test completo</p>
            </div>
            <div className="animate-fade-in-up animate-stagger-2 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-2 animate-bounce-gentle">✅</div>
              <h3 className="mb-2 playfair-heading">Garanzia 12 Mesi</h3>
              <p className="text-white/70 text-sm">Ti garantisco personalmente ogni pezzo</p>
            </div>
            <div className="animate-fade-in-up animate-stagger-3 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-2 animate-bounce-gentle">🚚</div>
              <h3 className="mb-2 playfair-heading">Spedizione Gratis</h3>
              <p className="text-white/70 text-sm">In Italia mainland, con corriere tracciato</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
