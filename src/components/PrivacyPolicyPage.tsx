import { Button } from './ui/button';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            Informativa sulla Privacy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Ultimo aggiornamento: 28 Ottobre 2025
          </p>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-gray-700">
          <p>
            La tua privacy è importante per noi. Questa informativa sulla privacy spiega quali dati personali raccogliamo dagli utenti e come li utilizziamo.
            Ti preghiamo di leggere attentamente le seguenti informazioni.
          </p>

          <h2>Titolare del Trattamento dei Dati</h2>
          <p>
            [Il tuo Nome e Cognome], in qualità di venditore privato, con sede in [La tua Città, Indirizzo], email: [La tua Email].
          </p>
          <p>
            Poiché questo sito opera come attività di vendita occasionale da parte di un privato e non è un'impresa, non è richiesta una Partita IVA ai sensi della normativa vigente per volumi di affari inferiori a 5.000€ annui.
          </p>

          <h2>Quali Dati Raccogliamo</h2>
          <p>
            Raccogliamo dati per operare in modo efficace e fornirti le migliori esperienze con i nostri prodotti. Fornisci alcuni di questi dati direttamente, ad esempio quando:
          </p>
          <ul>
            <li>Ci contatti tramite il modulo di contatto (nome, email).</li>
            <li>Effettui un acquisto (nome, indirizzo di spedizione, email, numero di telefono).</li>
          </ul>
          <p>
            Non raccogliamo né memorizziamo dati relativi ai pagamenti, che vengono gestiti interamente da fornitori di servizi di pagamento esterni (es. Stripe, PayPal), i quali agiscono come titolari autonomi del trattamento.
          </p>

          <h2>Come Utilizziamo i Dati Personali</h2>
          <p>
            Utilizziamo i dati che raccogliamo per le seguenti finalità:
          </p>
          <ul>
            <li>Per fornire e gestire i nostri servizi, inclusa l'elaborazione degli ordini, la spedizione e l'assistenza clienti.</li>
            <li>Per comunicare con te, rispondendo a commenti, domande e richieste.</li>
            <li>Per adempiere agli obblighi legali e fiscali derivanti dalla vendita.</li>
          </ul>

          <h2>Condivisione dei Dati Personali</h2>
          <p>
            Non condividiamo i tuoi dati personali con terze parti, ad eccezione di:
          </p>
          <ul>
            <li>Corrieri e servizi di spedizione per la consegna dei prodotti.</li>
            <li>Consulenti legali o fiscali, se necessario per adempiere agli obblighi di legge.</li>
            <li>Piattaforme di pagamento per l'elaborazione delle transazioni.</li>
          </ul>

          <h2>Cookie e Tecnologie Simili</h2>
          <p>
            Questo sito utilizza cookie tecnici essenziali per il suo funzionamento. Potremmo utilizzare anche cookie analitici anonimizzati per capire come viene utilizzato il sito e migliorare l'esperienza utente. Non utilizziamo cookie di profilazione o marketing.
          </p>
          <p>
            Per maggiori dettagli, consulta la nostra Cookie Policy (se disponibile) o contattaci.
          </p>

          <h2>I Tuoi Diritti in Materia di Privacy (GDPR)</h2>
          <p>
            In base al Regolamento (UE) 2016/679 (GDPR), hai il diritto di:
          </p>
          <ul>
            <li>Accedere ai tuoi dati personali.</li>
            <li>Chiedere la rettifica o la cancellazione dei tuoi dati.</li>
            <li>Opporti al trattamento o chiederne la limitazione.</li>
            <li>Richiedere la portabilità dei dati.</li>
            <li>Revocare il consenso in qualsiasi momento.</li>
            <li>Proporre reclamo a un'autorità di controllo.</li>
          </ul>
          <p>
            Per esercitare i tuoi diritti, puoi contattarci all'indirizzo email fornito sopra.
          </p>

          <h2>Conservazione dei Dati</h2>
          <p>
            Conserviamo i dati personali per il tempo strettamente necessario a fornire i servizi richiesti e per adempiere agli obblighi legali (ad esempio, per la garanzia di 12 mesi sui prodotti e per le normative fiscali), dopodiché verranno cancellati in modo sicuro.
          </p>

          <h2>Modifiche a Questa Informativa</h2>
          <p>
            Ci riserviamo il diritto di aggiornare questa informativa sulla privacy. La data dell'ultimo aggiornamento sarà sempre visibile in cima alla pagina.
          </p>
        </div>
      </main>
    </div>
  );
}
