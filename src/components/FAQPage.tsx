export function FAQPage() {
  const faqs = [
    {
      question: "Come funziona l'acquisto?",
      answer: "Semplice: guardi il video test della cinepresa, decidi se ti piace, aggiungi al carrello e paghi con PayPal. Ricevi subito una conferma via email con il numero d'ordine."
    },
    {
      question: "Quanto tempo ci vuole per la spedizione?",
      answer: "Spedisco entro 1-2 giorni lavorativi dalla conferma del pagamento. La consegna in Italia richiede solitamente 2-3 giorni con corriere tracciato."
    },
    {
      question: "Posso restituire una cinepresa?",
      answer: "Sì! Hai 14 giorni di tempo dal ricevimento per provarla. Se non ti soddisfa, me la mandi indietro e ti rimborso completamente (spese di spedizione del reso a tuo carico)."
    },
    {
      question: "Le cineprese sono testate?",
      answer: "Assolutamente. Testo personalmente ogni cinepresa e realizzo un video test che trovi nella scheda prodotto. Vedi esattamente come funziona prima di acquistare."
    },
    {
      question: "C'è una garanzia?",
      answer: "Sì, garantisco ogni cinepresa per 12 mesi. Se qualcosa non funziona come descritto nel test, lo sistemo o ti rimborso. Niente brutte sorprese."
    },
    {
      question: "Vendete anche pellicole o accessori?",
      answer: "Al momento mi concentro solo sulle cineprese. Se hai bisogno di pellicole o accessori, posso consigliarti dove trovarli."
    },
    {
      question: "Posso venire a vedere la cinepresa di persona?",
      answer: "Purtroppo no, non ho un negozio fisico. Ma i video test sono molto dettagliati proprio per darti la massima trasparenza."
    },
    {
      question: "Accettate pagamenti diversi da PayPal?",
      answer: "Per ora solo PayPal, che accetta anche carte di credito/debito anche senza avere un account PayPal."
    },
    {
      question: "Offrite consulenze per progetti video?",
      answer: "Sì! Sono un video editor e filmmaker. Se hai un progetto e vuoi consigli su attrezzatura o tecnica, scrivimi. Possiamo fare due chiacchiere."
    },
    {
      question: "Come traccio il mio ordine?",
      answer: "Usa la pagina 'Traccia Ordine' inserendo il numero d'ordine (che ti arriva via email) e la tua email. Lì trovi tutti i dettagli dell'ordine."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#E8DCC4]/30 py-20 animate-fade-in-down">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 heading-hero-small">
            Domande Frequenti
          </h1>
          <p className="text-[#1A1A1A]/70 text-base-custom">
            Tutto quello che devi sapere prima di acquistare
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg p-6 shadow-sm border border-[#E8DCC4] animate-fade-in-up animate-stagger-${(index % 5) + 1} transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#D97941]`}
              >
                <h3 className="text-[#1A1A1A] mb-3 heading-md text-[#D97941]">
                  {faq.question}
                </h3>
                <p className="text-[#1A1A1A]/80">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1A1A] text-white animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 heading-xl">
            Non hai trovato la risposta?
          </h2>
          <p className="text-white/80 mb-6">
            Scrivimi direttamente. Rispondo sempre personalmente a ogni domanda.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#D97941] hover:bg-[#A0522D] text-white px-8 py-3 rounded-md transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Contattami
          </a>
        </div>
      </section>
    </div>
  );
}
