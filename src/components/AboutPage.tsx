import { Button } from './ui/button';
import { Heart, Award, Users } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { Link } from 'react-router-dom';

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
              La Mia Storia
            </h2>
            <p className="text-[#1A1A1A]/80">
              Sono Antonio, ho 22 anni e vengo da Benevento. Da quando ho iniziato a montare video 
              a 14 anni, ho capito che il cinema è il linguaggio con cui voglio raccontare il mondo. 
              Ogni storia merita di essere raccontata con il giusto ritmo, la luce giusta e un'idea chiara.
            </p>
            <p className="text-[#1A1A1A]/80">
              Lavoro come video editor, regista e sceneggiatore. DaVinci Resolve è il mio studio, 
              ma è stato il Super 8 a farmi capire davvero cosa significa fare cinema: ogni fotogramma 
              conta, nulla è per caso. Quando ho girato il mio primo cortometraggio con una cinepresa 
              analogica, ho sentito quella connessione fisica con l'immagine che il digitale non può darti.
            </p>
            <p className="text-[#1A1A1A]/80">
              Focali nasce da questa passione: ridare vita a cineprese che hanno fatto la storia, 
              testarle, raccontarle e consegnarle nelle mani di chi, come me, crede che l'analogico 
              non sia nostalgia, ma autenticità. Il nome viene dal punto focale di un obiettivo: 
              quel punto preciso dove tutto diventa nitido. Voglio che Focali sia questo per te: 
              chiarezza, fiducia e passione condivisa.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#E8DCC4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
              La Mia Missione
            </h2>
            <p className="text-[#1A1A1A]/70 max-w-3xl mx-auto" style={{ fontSize: '1.125rem' }}>
              "Ogni cinepresa vintage ha una storia. Io la testo, la documento e te la consegno 
              pronta per scriverne un'altra: la tua."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97941] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Passione Vera</h3>
              <p className="text-[#1A1A1A]/70">
                Non sono un negozio: sono un filmmaker che ama l'analogico. Ogni cinepresa 
                che vendo l'ho testata come se dovessi usarla io stesso.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97941] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Trasparenza Totale</h3>
              <p className="text-[#1A1A1A]/70">
                Video test completo, foto dettagliate, descrizione onesta. Niente filtri, 
                niente bugie. Vedi esattamente quello che riceverai.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97941] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Supporto Diretto</h3>
              <p className="text-[#1A1A1A]/70">
                Scrivimi per qualsiasi dubbio. Parlo con te, non con un chatbot. 
                Condivido la tua passione e voglio che tu faccia l'acquisto giusto.
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
              Come Lavoro
            </h2>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto">
              Non ho uno studio professionale: sono un appassionato che le trova, le sistema come posso, 
              le testo e le rivende a chi le apprezzerà. Semplice e onesto.
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
            In Cosa Credo
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
                L'Analogico è Libertà
              </h3>
              <p className="text-white/80">
                Con una cinepresa analogica non devi preoccuparti di batterie, schede SD o update. 
                Carichi, inquadri, riprendi. Il cinema nella sua forma più pura.
              </p>
            </div>

            <div>
              <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
                Il Test è Tutto
              </h3>
              <p className="text-white/80">
                So quanto è frustrante ricevere attrezzatura "funzionante" che poi non funziona. 
                Per questo testo tutto personalmente e ti mostro il video. Niente brutte sorprese.
              </p>
            </div>

            <div>
              <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
                La Storia ha Valore
              </h3>
              <p className="text-white/80">
                Queste cineprese hanno ripreso matrimoni, documentari, cortometraggi, momenti familiari. 
                Ridare loro vita significa rispettare la storia del cinema e continuarla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E8DCC4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
            Facciamo Due Chiacchiere
          </h2>
          <p className="text-[#1A1A1A]/80 mb-8 max-w-2xl mx-auto">
            Hai domande su una cinepresa? Vuoi consigli per il tuo progetto? 
            Scrivimi. Rispondo sempre personalmente.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-[#D97941] hover:bg-[#A0522D] text-white px-8"
            >
              Contattami
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
