export function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            Termini e Condizioni di Vendita
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Ultimo aggiornamento: 28 Ottobre 2025
          </p>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-gray-700">
          <h2>1. Oggetto</h2>
          <p>
            Le presenti condizioni generali di vendita disciplinano l'acquisto di prodotti effettuato a distanza tramite il sito web focalishop.netlify.app (di seguito, il "Sito"). Il venditore è [Il tuo Nome e Cognome], in qualità di venditore privato che opera in modo occasionale.
          </p>
          <p>
            L'attività di vendita è da intendersi come "occasionale" e non professionale, ai sensi della normativa italiana, in quanto non supera il volume di affari di 5.000€ annui.
          </p>

          <h2>2. Prodotti</h2>
          <p>
            I prodotti venduti sul Sito sono cineprese e attrezzature analogiche usate (vintage). Ogni prodotto è accuratamente descritto nella sua pagina dedicata, con indicazioni sullo stato di conservazione, sulle funzionalità e sulla presenza di eventuali difetti. Le fotografie e i video test sono parte integrante della descrizione del prodotto.
          </p>

          <h2>3. Prezzi e Pagamenti</h2>
          <p>
            I prezzi dei prodotti sono indicati in Euro (€) e sono da intendersi come "prezzo finito", non soggetto a IVA in quanto la vendita è effettuata da un privato. Le spese di spedizione non sono incluse nel prezzo e verranno indicate nel riepilogo dell'ordine prima della conclusione del pagamento.
          </p>
          <p>
            Il pagamento può essere effettuato tramite le modalità indicate sul Sito (es. Stripe, PayPal). La transazione è gestita da piattaforme esterne sicure.
          </p>

          <h2>4. Spedizione e Consegna</h2>
          <p>
            La spedizione verrà effettuata entro 3-5 giorni lavorativi dalla ricezione del pagamento. I tempi di consegna variano in base alla destinazione e al corriere utilizzato. Verrà fornito un codice di tracciamento per monitorare la spedizione.
          </p>

          <h2>5. Garanzia sui Prodotti</h2>
          <p>
            Tutti i prodotti venduti su questo Sito sono coperti da una <strong>garanzia di 12 mesi</strong> dalla data di acquisto. La garanzia copre difetti di funzionamento non conformi a quanto descritto nella pagina del prodotto e nel video test al momento della vendita.
          </p>
          <p>
            La garanzia non copre:
          </p>
          <ul>
            <li>Danni causati da uso improprio, cadute, contatto con liquidi o manomissioni da parte dell'acquirente.</li>
            <li>Difetti estetici già descritti e documentati al momento dell'acquisto.</li>
            <li>Normale usura dovuta all'età del prodotto.</li>
          </ul>
          <p>
            Per avvalersi della garanzia, l'acquirente deve contattare il venditore all'indirizzo email [La tua Email], descrivendo il problema e fornendo prova d'acquisto.
          </p>

          <h2>6. Diritto di Recesso</h2>
          <p>
            Trattandosi di una vendita tra privati, il diritto di recesso non è obbligatorio per legge. Tuttavia, offriamo la possibilità di restituire il prodotto entro <strong>14 giorni</strong> dalla data di ricezione, a condizione che sia nelle stesse identiche condizioni in cui è stato spedito.
          </p>
          <p>
            Le spese di spedizione per la restituzione sono a carico dell'acquirente. Il rimborso verrà emesso dopo aver verificato l'integrità del prodotto restituito.
          </p>

          <h2>7. Limitazione di Responsabilità</h2>
          <p>
            Il venditore non potrà essere ritenuto responsabile per eventuali danni diretti o indiretti derivanti dall'uso dei prodotti venduti, al di là di quanto coperto dalla garanzia.
          </p>

          <h2>8. Legge Applicabile e Foro Competente</h2>
          <p>
            Le presenti condizioni di vendita sono regolate dalla legge italiana. Per qualsiasi controversia che dovesse sorgere, il foro competente sarà quello di residenza del venditore.
          </p>

          <h2>9. Contatti</h2>
          <p>
            Per qualsiasi domanda o richiesta, è possibile contattare il venditore all'indirizzo email: [La tua Email].
          </p>
        </div>
      </main>
    </div>
  );
}
