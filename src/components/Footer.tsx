import { Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <span className="text-[#1A1A1A] logo-letter">F</span>
              </div>
              <span className="logo-text">
                Focali
              </span>
            </div>
            <p className="text-white/70 max-w-md mb-3">
              Ridò vita alle cineprese che hanno fatto la storia del cinema. 
              Ogni pezzo è testato personalmente da me, un filmmaker che come te crede nell'analogico.
            </p>
            <p className="text-white/50 text-sm italic">
              — Antonio, video editor e appassionato di cinema da Benevento
            </p>
          </div>

          {/* Links */}
          <div className="animate-fade-in-up animate-stagger-2">
            <h4 className="mb-4 text-[#D97941]">Esplora</h4>
            <ul className="space-y-2">
              <li>
                <a href="/catalogo" className="text-white/70 hover:text-[#D97941] transition-colors duration-300">
                  Catalogo
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/70 hover:text-[#D97941] transition-colors duration-300">
                  Chi Sono
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-[#D97941] transition-colors duration-300">
                  Contatti
                </a>
              </li>
              <li>
                <a href="/traccia-ordine" className="text-white/70 hover:text-[#D97941] transition-colors duration-300">
                  Traccia Ordine
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="animate-fade-in-up animate-stagger-3">
            <h4 className="mb-4 text-[#D97941]">Legale</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-white/70 hover:text-[#D97941] transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-white/70 hover:text-[#D97941] transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/termini-e-condizioni" className="text-white/70 hover:text-[#D97941] transition-colors duration-300">
                  Termini e Condizioni
                </a>
              </li>
              <li>
                <a href="/spedizioni" className="text-white/70 hover:text-[#D97941] transition-colors duration-300">
                  Spedizioni
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white/70 hover:text-[#D97941] transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up">
          <p className="text-white/60 text-sm">
            © 2025 Focali. Tutti i diritti riservati. Vendita da privato.
          </p>
          
          {/* Contact Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="mailto:antonio.pennino.mail@gmail.com"
              className="text-white/70 hover:text-[#D97941] transition-all duration-300 flex items-center gap-2"
              aria-label="Email"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="https://wa.me/+393299826583"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#D97941] transition-all duration-300 flex items-center gap-2"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
