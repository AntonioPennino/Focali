import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface NavbarProps {
  onCartClick: () => void;
  cartItemsCount: number;
}

export function Navbar({ onCartClick, cartItemsCount }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#1A1A1A]/10 sticky top-0 z-50 backdrop-blur-sm bg-white/95 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center">
              <span className="text-white logo-letter">F</span>
            </div>
            <span className="tracking-wide logo-text">
              Focali
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-[#1A1A1A] hover:text-[#A0522D] transition-colors duration-300 hover:underline">
              Cineprese
            </Link>
            <Link to="/about" className="text-[#1A1A1A] hover:text-[#A0522D] transition-colors duration-300 hover:underline">
              Chi Siamo
            </Link>
            <Link to="/contact" className="text-[#1A1A1A] hover:text-[#A0522D] transition-colors duration-300 hover:underline">
              Contatti
            </Link>
            <Link to="/traccia-ordine" className="text-[#1A1A1A] hover:text-[#A0522D] transition-colors duration-300 hover:underline">
              Traccia Ordine
            </Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-[#1A1A1A] hover:text-[#A0522D] transition-all duration-300 hover:scale-110"
              aria-label="Carrello"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D97941] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs animate-pulse-subtle">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1A1A1A]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#1A1A1A]/10">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-[#1A1A1A] hover:text-[#A0522D] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cineprese
              </Link>
              <Link
                to="/about"
                className="text-[#1A1A1A] hover:text-[#A0522D] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Chi Siamo
              </Link>
              <Link
                to="/contact"
                className="text-[#1A1A1A] hover:text-[#A0522D] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contatti
              </Link>
              <Link
                to="/traccia-ordine"
                className="text-[#1A1A1A] hover:text-[#A0522D] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Traccia Ordine
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
