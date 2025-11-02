import { Button } from './ui/button';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 playfair-heading">
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
            Antonio Pennino, in qualità di venditore privato, con sede in Via Padre Pio, 86, Benevento, email: antonio.pennino.mail@gmail.com.
          </p>
          <p>
            Poiché questo sito opera come attività di vendita occasionale da parte di un privato e non è un'impresa, non è richiesta una Partita IVA ai sensi della normativa vigente per volumi di affari inferiori a 5.000€ annui.
          </p>

          <h2>Quali Dati Raccogliamo e Perché (Finalità e Base Giuridica)</h2>
          <p>
            Raccogliamo dati per operare in modo efficace e fornirti le migliori esperienze con i nostri prodotti. Fornisci alcuni di questi dati direttamente, ad esempio quando:
          </p>
          <ul>
            <li>Ci contatti tramite il modulo di contatto (nome, email).</li>
            <li>Effettui un acquisto (nome, cognome, indirizzo di spedizione, email, numero di telefono). La base giuridica di questo trattamento è l'esecuzione di un contratto di cui sei parte.</li>
          </ul>
          <p>
            Non raccogliamo né memorizziamo dati relativi ai pagamenti, che vengono gestiti interamente da fornitori di servizi di pagamento esterni (es. Stripe, PayPal), i quali agiscono come titolari autonomi del trattamento.
          </p>

          <h2>Come Utilizziamo i Dati Personali</h2>
          <p>
            Utilizziamo i dati che raccogliamo per le seguenti finalità:
          </p>
          <ul>
            <li><strong>Esecuzione del contratto:</strong> Per fornire e gestire i nostri servizi, inclusa l'elaborazione degli ordini, la spedizione e l'assistenza clienti.</li>
            <li><strong>Comunicazioni:</strong> Per comunicare con te, rispondendo a commenti, domande e richieste.</li>
            <li><strong>Adempimenti legali:</strong> Per adempiere agli obblighi legali e fiscali derivanti dalla vendita, come la conservazione delle scritture contabili.</li>
          </ul>

          <h2>Chi Riceve i Dati (Destinatari)</h2>
          <p>
            Condividiamo i tuoi dati personali solo quando strettamente necessario e unicamente con le seguenti categorie di destinatari:
          </p>
          <ul>
            <li><strong>Corrieri e servizi di spedizione:</strong> Per consentire la consegna dei prodotti acquistati.</li>
            <li><strong>Gestori di piattaforme di pagamento:</strong> Per processare il pagamento degli ordini.</li>
            <li><strong>Consulenti e autorità competenti:</strong> Per adempiere a obblighi di legge, rispondere a procedimenti legali o a richieste da parte di autorità governative.</li>
          </ul>

          <h2>Cookie Policy</h2>
          <p>
            Questo sito utilizza cookie per garantire il suo corretto funzionamento e per migliorare l'esperienza di navigazione. Per dettagli completi sui tipi di cookie utilizzati, come gestirli e le tue scelte, consulta la nostra <a href="/cookie-policy" className="text-[#D97941] hover:text-[#A0522D] underline">Informativa sui Cookie</a>.
          </p>

          <h2>I Tuoi Diritti in Materia di Privacy (GDPR)</h2>
          <p>
            In base al Regolamento (UE) 2016/679 (GDPR), hai il diritto di:
          </p>
          <ul>
            <li><strong>Diritto di accesso:</strong> Chiedere quali dati personali stiamo trattando.</li>
            <li><strong>Diritto di rettifica:</strong> Chiedere la correzione di dati inesatti.</li>
            <li><strong>Diritto all'oblio:</strong> Chiedere la cancellazione dei tuoi dati, fatte salve le necessità di conservazione per obblighi di legge.</li>
            <li><strong>Diritto di limitazione:</strong> Chiedere di limitare il trattamento in determinate circostanze.</li>
            <li><strong>Diritto di opposizione:</strong> Opporti al trattamento per motivi legittimi.</li>
            <li><strong>Diritto alla portabilità:</strong> Richiedere i tuoi dati in un formato strutturato e leggibile.</li>
            <li><strong>Diritto di reclamo:</strong> Presentare un reclamo all'Autorità Garante per la protezione dei dati personali.</li>
          </ul>
          <p>
            Per esercitare i tuoi diritti, puoi contattarci all'indirizzo email fornito sopra.
          </p>

          <h2>Per Quanto Tempo Conserviamo i Dati (Periodo di Conservazione)</h2>
          <p>
            Conserviamo i dati personali per il tempo strettamente necessario a raggiungere gli scopi per cui sono stati raccolti. In particolare:
          </p>
          <ul>
            <li>I dati relativi alla gestione degli ordini e alla fatturazione saranno conservati per <strong>10 anni</strong>, come richiesto dalla normativa fiscale italiana.</li>
            <li>I dati raccolti per altre finalità (es. contatti) verranno cancellati una volta esaurito lo scopo per cui sono stati raccolti.</li>
          </ul>

          <h2>Modifiche a Questa Informativa</h2>
          <p>
            Ci riserviamo il diritto di aggiornare questa informativa sulla privacy. La data dell'ultimo aggiornamento sarà sempre visibile in cima alla pagina.
          </p>
        </div>
      </main>
    </div>
  );
}
