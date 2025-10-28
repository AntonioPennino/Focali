import { Button } from './ui/button';
import { Heart, Award, Users } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1549511166-d5e19c3642fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFsb2clMjBjYW1lcmElMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2MTYzODk1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Chi siamo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            Chi Siamo
          </h1>
          <p className="text-white/90" style={{ fontSize: '1.25rem' }}>
            La storia di Focali e la nostra missione
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#1A1A1A' }}>
              La Nostra Storia
            </h2>
            <p className="text-[#1A1A1A]/80">
              Focali nasce nel 2023 dalla passione di un gruppo di filmmaker e collezionisti 
              che hanno trascorso anni a cercare, restaurare e utilizzare cineprese analogiche. 
              Ci siamo resi conto che molte di queste meraviglie tecnologiche giacevano 
              dimenticate in soffitte e mercatini, quando meritavano invece di tornare a fare 
              ciò per cui erano state create: catturare storie.
            </p>
            <p className="text-[#1A1A1A]/80">
              Il nome "Focali" deriva dal punto focale, quell'elemento cruciale in ogni 
              obiettivo che determina la chiarezza dell'immagine. Per noi rappresenta anche 
              il nostro obiettivo: essere il punto di riferimento per chi cerca autenticità, 
              qualità e storytelling nel mondo delle cineprese vintage.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#E8DCC4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
              La Nostra Missione
            </h2>
            <p className="text-[#1A1A1A]/70 max-w-3xl mx-auto" style={{ fontSize: '1.125rem' }}>
              "Riportare in vita le cineprese che hanno fatto la storia, connettendo 
              il passato del cinema con i filmmaker di oggi"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97941] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Passione</h3>
              <p className="text-[#1A1A1A]/70">
                Ogni cinepresa che passa per le nostre mani viene trattata con il rispetto 
                che merita, come un pezzo d'arte che è.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97941] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Qualità</h3>
              <p className="text-[#1A1A1A]/70">
                Test rigorosi, documentazione completa e garanzia estesa: la qualità 
                è il nostro standard, non un'opzione.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97941] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Community</h3>
              <p className="text-[#1A1A1A]/70">
                Non vendiamo solo cineprese: creiamo una comunità di appassionati che 
                condividono la nostra visione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
              Dietro le Quinte
            </h2>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto">
              Un'occhiata al nostro laboratorio dove le cineprese tornano in vita
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1721920098128-09567eae6e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmaWxtJTIwY2FtZXJhJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NjE2Mzg5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Laboratorio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1585074729568-7efec1c018cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGNpbmVtYSUyMGNhbWVyYXxlbnwxfHx8fDE3NjE2Mzg5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Testing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
            I Nostri Valori
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
                Autenticità
              </h3>
              <p className="text-white/80">
                Ogni cinepresa ha una storia vera. Non inventiamo leggende: documentiamo 
                fatti, origini e caratteristiche reali di ogni pezzo.
              </p>
            </div>

            <div>
              <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
                Trasparenza
              </h3>
              <p className="text-white/80">
                Video test completi, fotografie dettagliate e descrizioni oneste. 
                Vogliamo che tu sappia esattamente cosa stai acquistando.
              </p>
            </div>

            <div>
              <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
                Sostenibilità
              </h3>
              <p className="text-white/80">
                Dare nuova vita a strumenti esistenti invece di produrre nuovo è il nostro 
                contributo per un futuro più sostenibile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E8DCC4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
            Unisciti alla Nostra Comunità
          </h2>
          <p className="text-[#1A1A1A]/80 mb-8 max-w-2xl mx-auto">
            Scopri le nostre cineprese e diventa parte di una storia più grande
          </p>
          <Button
            size="lg"
            className="bg-[#D97941] hover:bg-[#A0522D] text-white px-8"
          >
            Scopri le Cineprese
          </Button>
        </div>
      </section>
    </div>
  );
}
