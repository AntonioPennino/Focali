import { Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem' }}>F</span>
              </div>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
                Focali
              </span>
            </div>
            <p className="text-white/70 max-w-md">
              Riportiamo in vita le cineprese che hanno fatto la storia del cinema. 
              Ogni pezzo è testato, certificato e pronto per le tue riprese.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Esplora</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white/70 hover:text-[#D97941] transition-colors">
                  Cineprese
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/70 hover:text-[#D97941] transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="/testing" className="text-white/70 hover:text-[#D97941] transition-colors">
                  Come Testiamo
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-[#D97941] transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Supporto</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97941] transition-colors">
                  Garanzia e Resi
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97941] transition-colors">
                  Spedizioni
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97941] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97941] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2025 Focali. Tutti i diritti riservati. P.IVA 12345678901
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#D97941] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#D97941] transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#D97941] transition-colors text-sm"
              aria-label="TikTok"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
