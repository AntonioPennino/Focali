import { Package, Truck, Shield, MapPin } from 'lucide-react';

export function ShippingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#E8DCC4]/30 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 heading-hero-small">
            Spedizioni
          </h1>
          <p className="text-[#1A1A1A]/70 text-base-custom">
            Come funzionano le spedizioni e cosa aspettarti
          </p>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E8DCC4]">
              <div className="w-12 h-12 bg-[#D97941] rounded-full flex items-center justify-center mb-4">
                <Truck className="text-white" size={24} />
              </div>
              <h3 className="mb-3 heading-lg">
                Tempi di Spedizione
              </h3>
              <p className="text-[#1A1A1A]/80 mb-4">
                Preparo il pacco entro <strong>1-2 giorni lavorativi</strong> dalla conferma del pagamento.
              </p>
              <p className="text-[#1A1A1A]/80">
                La consegna in Italia richiede solitamente <strong>2-3 giorni lavorativi</strong> dal momento della spedizione.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E8DCC4]">
              <div className="w-12 h-12 bg-[#D97941] rounded-full flex items-center justify-center mb-4">
                <Package className="text-white" size={24} />
              </div>
              <h3 className="mb-3 heading-lg">
                Packaging
              </h3>
              <p className="text-[#1A1A1A]/80 mb-4">
                Ogni cinepresa è imballata con estrema cura usando materiali protettivi professionali.
              </p>
              <p className="text-[#1A1A1A]/80">
                Il pacco include anche una piccola sorpresa come ringraziamento per il tuo acquisto.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E8DCC4]">
              <div className="w-12 h-12 bg-[#D97941] rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="mb-3 heading-lg">
                Tracciamento
              </h3>
              <p className="text-[#1A1A1A]/80 mb-4">
                Ricevi il numero di tracciamento via email non appena spedisco il pacco.
              </p>
              <p className="text-[#1A1A1A]/80">
                Puoi seguire il tuo ordine in tempo reale sul sito del corriere.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E8DCC4]">
              <div className="w-12 h-12 bg-[#D97941] rounded-full flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="mb-3 heading-lg">
                Assicurazione
              </h3>
              <p className="text-[#1A1A1A]/80 mb-4">
                Tutte le spedizioni sono assicurate per il valore dichiarato.
              </p>
              <p className="text-[#1A1A1A]/80">
                In caso di danni durante il trasporto, gestisco io tutto con il corriere.
              </p>
            </div>
          </div>

          {/* Costi */}
          <div className="bg-[#1A1A1A] text-white p-8 rounded-lg mb-16">
            <h2 className="mb-6 text-center heading-xl">
              Costi di Spedizione
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/20">
                <span className="text-lg">Italia (Mainland)</span>
                <span className="text-xl text-[#D97941]">GRATIS</span>
              </div>
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/20">
                <span className="text-lg">Isole (Sicilia, Sardegna)</span>
                <span className="text-xl text-[#D97941]">€10,00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">Europa</span>
                <span className="text-xl text-white/70">Su richiesta</span>
              </div>
              <p className="text-white/60 text-sm mt-6">
                * Per spedizioni fuori Italia, contattami prima dell'acquisto per un preventivo personalizzato.
              </p>
            </div>
          </div>

          {/* Resi */}
          <div className="bg-[#E8DCC4]/30 p-8 rounded-lg">
            <h2 className="mb-4 text-center heading-xl">
              Resi e Rimborsi
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-[#1A1A1A]/80 mb-4">
                Hai <strong>14 giorni</strong> dal ricevimento per restituire la cinepresa se non sei soddisfatto.
              </p>
              <p className="text-[#1A1A1A]/80 mb-4">
                La cinepresa deve essere nelle stesse condizioni in cui l'hai ricevuta, con tutto il packaging originale.
              </p>
              <p className="text-[#1A1A1A]/80 mb-4">
                Le spese di spedizione per il reso sono a tuo carico. Ti consiglio di usare un corriere tracciato e assicurato.
              </p>
              <p className="text-[#1A1A1A]/80">
                Una volta ricevuto e verificato il reso, procedo con il rimborso completo entro 5 giorni lavorativi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E8DCC4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 heading-xl">
            Hai altre domande sulla spedizione?
          </h2>
          <p className="text-[#1A1A1A]/80 mb-6">
            Scrivimi e ti rispondo subito con tutte le informazioni che ti servono.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#D97941] hover:bg-[#A0522D] text-white px-8 py-3 rounded-md transition-colors"
          >
            Contattami
          </a>
        </div>
      </section>
    </div>
  );
}
