import { Button } from './ui/button';
import { CheckCircle2, Video, FileText, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TestingPage() {
  const testChecklist = [
    'Meccanismo di avanzamento pellicola',
    'Otturatore e velocità di scatto',
    'Sistema di messa a fuoco',
    'Diaframma e controllo esposizione',
    'Mirino e sistema di inquadratura',
    'Corpo macchina e tenute luce',
    'Batteria e circuiti elettronici (se presenti)',
    'Obiettivo e qualità ottica',
    'Pulizia interna ed esterna',
    'Test con pellicola reale'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1609084580132-97e9a613c0d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlciUyMDglMjBjYW1lcmF8ZW58MXx8fHwxNzYxNjM4OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Come testiamo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            Come Testiamo
          </h1>
          <p className="text-white/90" style={{ fontSize: '1.25rem' }}>
            Il nostro processo rigoroso per garantire qualità e autenticità
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
              Standard di Eccellenza
            </h2>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Ogni cinepresa che vendiamo passa attraverso un processo di test completo 
              e documentato. Non lasciamo nulla al caso.
            </p>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden shadow-xl mb-8">
            <div className="w-full h-full bg-[#E8DCC4]/20 flex items-center justify-center">
              <div className="text-center">
                <Video size={64} className="mx-auto mb-4 text-[#A0522D]" />
                <p className="text-[#1A1A1A]/70">Video: Dietro le Quinte del Testing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-20 bg-[#E8DCC4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
              La Nostra Checklist di Test
            </h2>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto">
              Ogni cinepresa viene sottoposta a questi controlli dettagliati
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testChecklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#D97941] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1A1A1A]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
              Il Processo in Dettaglio
            </h2>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#D97941] text-white rounded-full flex items-center justify-center" style={{ fontSize: '1.25rem', fontFamily: 'Playfair Display, serif' }}>
                    1
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem' }}>
                    Ispezione Iniziale
                  </h3>
                </div>
                <p className="text-[#1A1A1A]/70">
                  Esaminiamo ogni aspetto della cinepresa: dal corpo macchina all'obiettivo, 
                  identificando potenziali problemi e valutando le condizioni generali.
                </p>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1721920098128-09567eae6e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmaWxtJTIwY2FtZXJhJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NjE2Mzg5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ispezione"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[4/3] rounded-lg overflow-hidden md:order-1">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1585074729568-7efec1c018cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGNpbmVtYSUyMGNhbWVyYXxlbnwxfHx8fDE3NjE2Mzg5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Test funzionale"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#D97941] text-white rounded-full flex items-center justify-center" style={{ fontSize: '1.25rem', fontFamily: 'Playfair Display, serif' }}>
                    2
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem' }}>
                    Test Funzionale
                  </h3>
                </div>
                <p className="text-[#1A1A1A]/70">
                  Testiamo tutte le funzioni meccaniche ed elettroniche. Verifichiamo velocità 
                  di otturatore, esposimetro, messa a fuoco e avanzamento pellicola.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#D97941] text-white rounded-full flex items-center justify-center" style={{ fontSize: '1.25rem', fontFamily: 'Playfair Display, serif' }}>
                    3
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem' }}>
                    Test Pellicola
                  </h3>
                </div>
                <p className="text-[#1A1A1A]/70">
                  Il test definitivo: carichiamo una pellicola e scattiamo. Solo dopo aver 
                  sviluppato e verificato i risultati, la cinepresa è pronta per la vendita.
                </p>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1694793727965-152bd04ff056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmlsbSUyMGNhbWVyYXxlbnwxfHx8fDE3NjE2MzU1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Test pellicola"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
                Certificato di Autenticità
              </h2>
              <p className="text-white/80 mb-6">
                Ogni cinepresa viene fornita con un certificato di autenticità e test 
                che documenta:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FileText size={20} className="text-[#D97941] flex-shrink-0 mt-0.5" />
                  <span>Modello, marca e anno di produzione</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText size={20} className="text-[#D97941] flex-shrink-0 mt-0.5" />
                  <span>Risultati completi di tutti i test eseguiti</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText size={20} className="text-[#D97941] flex-shrink-0 mt-0.5" />
                  <span>Storia e provenienza della cinepresa</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText size={20} className="text-[#D97941] flex-shrink-0 mt-0.5" />
                  <span>Eventuali restauri o sostituzioni eseguiti</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText size={20} className="text-[#D97941] flex-shrink-0 mt-0.5" />
                  <span>Link al video test pubblico</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20">
              <div className="text-center mb-6">
                <Shield size={64} className="mx-auto text-[#D97941] mb-4" />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
                  Garanzia 12 Mesi
                </h3>
              </div>
              <p className="text-white/80 text-center">
                Ogni cinepresa è coperta da una garanzia completa di 12 mesi. 
                Se qualcosa non funziona come dovrebbe, siamo qui per te.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E8DCC4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
            Acquista con Fiducia
          </h2>
          <p className="text-[#1A1A1A]/80 mb-8 max-w-2xl mx-auto">
            Ogni cinepresa è testata, certificata e garantita. Scopri la nostra collezione.
          </p>
          <Button
            size="lg"
            className="bg-[#D97941] hover:bg-[#A0522D] text-white px-8"
          >
            Esplora le Cineprese
          </Button>
        </div>
      </section>
    </div>
  );
}
