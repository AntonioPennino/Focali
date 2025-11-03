import { Button } from './ui/button';
import { ProductCard } from './ProductCard';
import { Badge } from './ui/badge';
import { CheckCircle2, Shield, Video, Star } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

interface Product {
  id: number;
  name: string;
  brand: string;
  year: string;
  price: number;
  image: string;
}

interface HomePageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function HomePage({ products, onAddToCart }: HomePageProps) {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Focali - Cineprese Analogiche Vintage con Garanzia e Video Test"
        description="Scopri la nostra collezione di cineprese analogiche vintage, testate e garantite 12 mesi. Ogni cinepresa ha un video test per mostrarti esattamente come funziona."
        name="Focali"
        type="website"
      />
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1694793727965-152bd04ff056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmlsbSUyMGNhbWVyYXxlbnwxfHx8fDE3NjE2MzU1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cinepresa vintage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-[#1A1A1A]/40 to-[#1A1A1A]/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-white mb-6 heading-hero">
            Il Cinema Merita Strumenti Veri
          </h1>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg-custom">
            Cineprese analogiche testate personalmente da un filmmaker che, come te, 
            crede che ogni fotogramma conti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalogo">
              <Button
                size="lg"
                className="bg-[#D97941] hover:bg-[#A0522D] text-white px-8"
              >
                Scopri le Cineprese
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8"
              >
                La Mia Storia
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-[#E8DCC4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97941] rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="text-white" size={32} />
              </div>
              <h3 className="mb-2 playfair-heading">Video Test Reale</h3>
              <p className="text-[#1A1A1A]/70">
                Ogni cinepresa filmata in azione. Vedi come funziona prima di acquistare
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97941] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-white" size={32} />
              </div>
              <h3 className="mb-2 playfair-heading">Storia Documentata</h3>
              <p className="text-[#1A1A1A]/70">
                Ogni pezzo ha un passato: te lo racconto con foto, certificato e trasparenza totale
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97941] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="mb-2 playfair-heading">Garanzia 12 Mesi</h3>
              <p className="text-[#1A1A1A]/70">
                Acquista sicuro: ti garantisco personalmente ogni cinepresa per un anno
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 heading-2xl">
              Cineprese in Evidenza
            </h2>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto">
              Scopri la nostra selezione curata di cineprese iconiche, 
              pronte per dare vita alle tue storie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalogo">
              <Button
                variant="outline"
                size="lg"
                className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#E8DCC4]/30"
              >
                Esplora Tutte le Cineprese
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757845366142-e5929f71c7bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FtZXJhJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTYzODk1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Passione per l'analogico"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="mb-6 heading-2xl">
                Non Sono un Rivenditore, Sono un Filmmaker
              </h2>
              <p className="mb-4 text-white/80">
                Mi chiamo Antonio, ho 22 anni e da quando ne avevo 14 monto video e racconto storie. 
                Ho iniziato con il digitale, ma quando ho girato il mio primo cortometraggio in Super 8 
                ho capito cosa significa davvero fare cinema: ogni fotogramma è prezioso, niente può essere sprecato.
              </p>
              <p className="mb-6 text-white/80">
                Focali è il mio progetto personale: testo cineprese vintage con la stessa cura che uso 
                nei miei lavori, le documento e le passo nelle tue mani. Non ti vendo solo un oggetto: 
                ti do uno strumento che ha fatto la storia e che ora può scrivere la tua.
              </p>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Leggi la Mia Storia
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 heading-2xl">
              Il Nostro Processo
            </h2>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto">
              Dall'acquisizione alla tua porta: come garantiamo qualità e autenticità
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-12 h-12 bg-[#D97941] text-white rounded-full flex items-center justify-center mx-auto mb-4 step-circle">
                1
              </div>
              <h4 className="mb-2">Ricerca e Selezione</h4>
              <p className="text-sm text-[#1A1A1A]/70">
                Troviamo cineprese iconiche con storia e potenziale
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-12 h-12 bg-[#D97941] text-white rounded-full flex items-center justify-center mx-auto mb-4 step-circle">
                2
              </div>
              <h4 className="mb-2">Test Completo</h4>
              <p className="text-sm text-[#1A1A1A]/70">
                Verifichiamo ogni funzione e documentiamo con video
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-12 h-12 bg-[#D97941] text-white rounded-full flex items-center justify-center mx-auto mb-4 step-circle">
                3
              </div>
              <h4 className="mb-2">Storytelling</h4>
              <p className="text-sm text-[#1A1A1A]/70">
                Creiamo la biografia del pezzo e il certificato
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative">
              <div className="w-12 h-12 bg-[#D97941] text-white rounded-full flex items-center justify-center mx-auto mb-4 step-circle">
                4
              </div>
              <h4 className="mb-2">Spedizione Curata</h4>
              <p className="text-sm text-[#1A1A1A]/70">
                Packaging premium e regalo per te
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-[#E8DCC4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 heading-2xl">
              Cosa Dicono i Nostri Clienti
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marco Rossi',
                role: 'Filmmaker',
                content: 'La mia Bolex H16 è arrivata in condizioni perfette. Il video test mi ha dato totale fiducia prima dell\'acquisto. Un servizio impeccabile!',
                rating: 5
              },
              {
                name: 'Elena Bianchi',
                role: 'Fotografa',
                content: 'Adoro il certificato di autenticità e la storia della mia Canon 310XL. È come adottare un pezzo di storia del cinema.',
                rating: 5
              },
              {
                name: 'Luca Verdi',
                role: 'Collezionista',
                content: 'Finalmente un venditore che capisce il valore dell\'analogico. Professionalità e passione in ogni dettaglio.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#D97941] text-[#D97941]" />
                  ))}
                </div>
                <p className="text-[#1A1A1A]/80 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="text-[#1A1A1A]">{testimonial.name}</p>
                  <p className="text-sm text-[#A0522D]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#E8DCC4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 heading-2xl">
            Inizia il Tuo Viaggio nell'Analogico
          </h2>
          <p className="text-[#1A1A1A]/80 mb-8 max-w-2xl mx-auto">
            Scopri la mia collezione di cineprese vintage e trova quella perfetta 
            per dare vita alle tue storie
          </p>
          <Link to="/catalogo">
            <Button
              size="lg"
              className="bg-[#D97941] hover:bg-[#A0522D] text-white px-8"
            >
              Esplora le Cineprese
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
