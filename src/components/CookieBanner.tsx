import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/80">
          Questo sito utilizza cookie tecnici essenziali per il suo funzionamento.
          Continuando la navigazione, accetti il loro utilizzo. Per maggiori informazioni,
          leggi la nostra <a href="/privacy-policy" className="underline hover:text-[#D97941]">Informativa sulla Privacy</a>.
        </p>
        <Button
          onClick={handleAccept}
          className="bg-[#D97941] hover:bg-[#A0522D] text-white px-6"
          size="sm"
        >
          Accetta
        </Button>
      </div>
    </div>
  );
}
