export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-hero">Informativa sui Cookie</h1>
          <p className="mt-4 text-lg text-white/70">
            Ultimo aggiornamento: 2 Novembre 2025
          </p>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <section>
            <h2 className="heading-2xl mb-4">Cos'è un Cookie?</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
              Un cookie è un piccolo file di testo che viene memorizzato sul tuo dispositivo (computer, tablet, smartphone) quando visiti un sito web. I cookie permettono ai siti web di riconoscere il tuo dispositivo e memorizzare informazioni sulla tua navigazione.
            </p>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              I cookie possono essere temporanei (cancellati quando chiudi il browser) o persistenti (rimangono sul dispositivo fino alla data di scadenza impostata).
            </p>
          </section>

          <section>
            <h2 className="heading-2xl mb-4">Tipologie di Cookie Utilizzati</h2>
            
            <div className="space-y-6">
              {/* Necessary Cookies */}
              <div className="border-l-4 border-[#D97941] pl-4 py-4">
                <h3 className="heading-lg mb-2">Cookie Necessari (Essenziali)</h3>
                <p className="text-[#1A1A1A]/70 text-sm mb-3">
                  <strong>Categoria:</strong> Necessari
                </p>
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-3">
                  Questi cookie sono essenziali per il funzionamento del sito e non possono essere disabilitati. Includono:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#1A1A1A]/80">
                  <li><strong>Cookie di consenso:</strong> Memorizza le tue preferenze sui cookie (accetta/rifiuta)</li>
                  <li><strong>Cookie di sessione:</strong> Mantengono la tua sessione attiva durante la navigazione</li>
                  <li><strong>Cookie di sicurezza:</strong> Proteggono l'integrità della comunicazione</li>
                  <li><strong>Cookie funzionali:</strong> Ricordano le tue impostazioni (lingua, preferenze di visualizzazione)</li>
                </ul>
                <p className="text-[#1A1A1A]/60 text-sm mt-3">
                  ✅ Questi cookie sono sempre attivati. Non richiedono consenso esplicito secondo le normative GDPR e ePrivacy.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border-l-4 border-[#A0522D] pl-4 py-4">
                <h3 className="heading-lg mb-2">Cookie Analitici</h3>
                <p className="text-[#1A1A1A]/70 text-sm mb-3">
                  <strong>Categoria:</strong> Analitici | <strong>Consenso:</strong> Obbligatorio
                </p>
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-3">
                  Utilizziamo cookie analitici per comprendere come gli utenti interagiscono con il nostro sito. Questi cookie ci aiutano a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#1A1A1A]/80">
                  <li>Identificare le pagine più visitate</li>
                  <li>Comprendere il percorso di navigazione degli utenti</li>
                  <li>Analizzare i tassi di rimbalzo e il tempo medio di permanenza</li>
                  <li>Migliorare l'esperienza utente del sito</li>
                  <li>Identificare eventuali problemi tecnici</li>
                </ul>
                <p className="text-[#1A1A1A]/80 leading-relaxed mt-3">
                  I dati raccolti sono <strong>anonimi e aggregati</strong>. Non vengono utilizzati per identificarti personalmente. Se rifiuti questi cookie, continuerai a navigare ma non contribuirai ai dati analitici.
                </p>
                <p className="text-[#1A1A1A]/60 text-sm mt-3">
                  🔍 <strong>Fornitori:</strong> Google Analytics (Google LLC)
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="border-l-4 border-[#E8DCC4] pl-4 py-4">
                <h3 className="heading-lg mb-2">Cookie di Marketing / Pubblicità</h3>
                <p className="text-[#1A1A1A]/70 text-sm mb-3">
                  <strong>Categoria:</strong> Marketing | <strong>Consenso:</strong> Obbligatorio
                </p>
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-3">
                  Questi cookie vengono utilizzati per fornire pubblicità pertinente e misurare l'efficacia delle campagne pubblicitarie. Permettono a noi e ai nostri partner di:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#1A1A1A]/80">
                  <li>Mostrarti annunci personalizzati basati sui tuoi interessi</li>
                  <li>Tracciare le tue interazioni con gli annunci</li>
                  <li>Misurare il ROI delle campagne pubblicitarie</li>
                  <li>Evitare di mostrati più volte lo stesso annuncio</li>
                </ul>
                <p className="text-[#1A1A1A]/60 text-sm mt-3">
                  📢 <strong>Fornitori potenziali:</strong> Facebook Pixel, Google Ads, altri network pubblicitari
                </p>
              </div>

              {/* Preference Cookies */}
              <div className="border-l-4 border-[#1A1A1A] pl-4 py-4">
                <h3 className="heading-lg mb-2">Cookie di Preferenza</h3>
                <p className="text-[#1A1A1A]/70 text-sm mb-3">
                  <strong>Categoria:</strong> Preferenze | <strong>Consenso:</strong> Obbligatorio
                </p>
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-3">
                  Questi cookie ricordano le tue scelte e preferenze personali per migliorare la tua esperienza futura:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#1A1A1A]/80">
                  <li>Preferenze di lingua</li>
                  <li>Tema scuro/chiaro se disponibile</li>
                  <li>Impostazioni di accessibilità</li>
                  <li>Stato di accesso (se applicabile)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="heading-2xl mb-4">Google Consent Mode V2</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
              Questo sito utilizza <strong>Google Consent Mode V2</strong>, uno standard di Google che gestisce automaticamente i cookie di tracciamento in base alle tue preferenze di consenso. Questo significa:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#1A1A1A]/80">
              <li>Google Analytics si adatta automaticamente in base al tuo consenso</li>
              <li>I tuoi dati personali sono protetti anche se rifiuti alcuni cookie</li>
              <li>Google può comunque fornire report di qualità anche senza tracciamento completo</li>
              <li>È conforme alle normative GDPR e alle leggi sulla privacy</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-2xl mb-4">Gestione dei Cookie</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="heading-lg mb-3">Attraverso il Banner di Consenso</h3>
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-3">
                  Al primo caricamento del sito, vedrai un banner di consenso nella parte inferiore della pagina. Puoi:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#1A1A1A]/80">
                  <li><strong>Accettare tutti i cookie:</strong> Consenti tutti i tipi di cookie</li>
                  <li><strong>Rifiutare i non essenziali:</strong> Rifiuta solo marketing e analitici, mantenendo i necessari</li>
                  <li><strong>Personalizzare le preferenze:</strong> Scegli quale tipo di cookie accettare</li>
                </ul>
                <p className="text-[#1A1A1A]/60 text-sm mt-3">
                  Puoi modificare le tue preferenze in qualsiasi momento cliccando sull'icona dei cookie in fondo a sinistra.
                </p>
              </div>

              <div>
                <h3 className="heading-lg mb-3">Attraverso il Browser</h3>
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-3">
                  Puoi gestire i cookie direttamente dalle impostazioni del tuo browser:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#1A1A1A]/80">
                  <li><strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
                  <li><strong>Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti</li>
                  <li><strong>Safari:</strong> Preferenze → Privacy → Gestisci dati dei siti web</li>
                  <li><strong>Edge:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
                </ul>
                <p className="text-[#1A1A1A]/80 leading-relaxed mt-3">
                  Puoi eliminare i cookie esistenti o impedire l'installazione di nuovi cookie. Tieni presente che disabilitare tutti i cookie potrebbe compromettere il funzionamento del sito.
                </p>
              </div>

              <div>
                <h3 className="heading-lg mb-3">Opt-Out da Servizi Terzi</h3>
                <p className="text-[#1A1A1A]/80 leading-relaxed">
                  Per ulteriori opzioni di privacy, puoi visitare:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#1A1A1A]/80 mt-2">
                  <li><strong>Google Analytics Opt-Out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#D97941] hover:text-[#A0522D] underline">Google Analytics Opt-Out Browser Add-on</a></li>
                  <li><strong>Network Advertising Initiative:</strong> <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-[#D97941] hover:text-[#A0522D] underline">NAI Consumer Opt-Out</a></li>
                  <li><strong>Your Online Choices:</strong> <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-[#D97941] hover:text-[#A0522D] underline">Your Online Choices</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="heading-2xl mb-4">Conformità alle Normative</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
              Questo sito è conforme a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#1A1A1A]/80">
              <li><strong>GDPR (Regolamento UE 2016/679):</strong> Regolamento Generale sulla Protezione dei Dati</li>
              <li><strong>ePrivacy Directive (2002/58/EC):</strong> Direttiva sulla Privacy Elettronica</li>
              <li><strong>Legge sulla Privacy italiana (D.Lgs. 196/2003):</strong> Codice in materia di protezione dei dati personali</li>
              <li><strong>Google Consent Mode V2:</strong> Standard di Google per la gestione del consenso</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-2xl mb-4">Strumento di Gestione dei Cookie</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Utilizziamo <strong>Silktide Consent Manager</strong>, una soluzione open-source gratuita e GDPR-compliant, per gestire il consenso ai cookie. Silktide non memorizza i dati sul loro server, ma tutto viene gestito direttamente sul tuo dispositivo.
            </p>
          </section>

          <section>
            <h2 className="heading-2xl mb-4">Contatti e Diritti</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
              Se hai domande sulla nostra Cookie Policy o desideri esercitare i tuoi diritti sulla privacy, puoi contattarci a:
            </p>
            <div className="bg-[#E8DCC4]/20 p-6 rounded-lg">
              <p className="text-[#1A1A1A]">
                <strong>Email:</strong> <a href="mailto:antonio.pennino.mail@gmail.com" className="text-[#D97941] hover:text-[#A0522D]">antonio.pennino.mail@gmail.com</a>
              </p>
              <p className="text-[#1A1A1A] mt-3">
                <strong>Responsabile della Privacy (DPO):</strong> Per richieste formali sulla privacy
              </p>
            </div>
            <p className="text-[#1A1A1A]/80 leading-relaxed mt-6">
              Per informazioni complete sulla gestione dei tuoi dati personali, consulta la nostra <a href="/privacy-policy" className="text-[#D97941] hover:text-[#A0522D] underline">Informativa sulla Privacy</a>.
            </p>
          </section>

          <section className="bg-[#1A1A1A]/5 p-6 rounded-lg">
            <h2 className="heading-lg mb-4">Modifiche a Questa Informativa</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Ci riserviamo il diritto di aggiornare questa informativa sui cookie in qualsiasi momento per riflettere cambiamenti nelle nostre pratiche, tecnologie o modifiche legislative. La data dell'ultimo aggiornamento sarà sempre visibile in cima a questa pagina. Ti consigliamo di controllare periodicamente questa pagina per rimanere informato.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
