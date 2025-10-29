import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Grazie per il tuo messaggio! Ti risponderemo al più presto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#E8DCC4]/30 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            Facciamo Due Chiacchiere
          </h1>
          <p className="text-[#1A1A1A]/70" style={{ fontSize: '1.125rem' }}>
            Hai dubbi su una cinepresa? Vuoi consigli per il tuo progetto? 
            O semplicemente vuoi parlare di cinema analogico? Scrivimi, rispondo sempre personalmente.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem' }}>
                Inviaci un Messaggio
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2 bg-[#E8DCC4]/10 border-[#1A1A1A]/20 focus:border-[#A0522D]"
                    placeholder="Il tuo nome"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2 bg-[#E8DCC4]/10 border-[#1A1A1A]/20 focus:border-[#A0522D]"
                    placeholder="tua@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Messaggio</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="mt-2 bg-[#E8DCC4]/10 border-[#1A1A1A]/20 focus:border-[#A0522D]"
                    placeholder="Raccontaci come possiamo aiutarti..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#D97941] hover:bg-[#A0522D] text-white"
                >
                  <Send size={18} className="mr-2" />
                  Invia Messaggio
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem' }}>
                Dove Trovarmi
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4 p-6 bg-[#E8DCC4]/20 rounded-lg">
                  <div className="w-12 h-12 bg-[#D97941] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <p className="text-[#1A1A1A]/70 mb-2">
                      Il modo più veloce per contattarmi
                    </p>
                    <a
                      href="mailto:ciao@focali.it"
                      className="text-[#A0522D] hover:text-[#D97941] transition-colors"
                    >
                      ciao@focali.it
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex gap-4 p-6 bg-[#E8DCC4]/20 rounded-lg">
                  <div className="w-12 h-12 bg-[#D97941] rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Instagram</h3>
                    <p className="text-[#1A1A1A]/70 mb-2">
                      Seguimi per vedere test, dietro le quinte e cineprese in arrivo
                    </p>
                    <a
                      href="https://instagram.com/focali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A0522D] hover:text-[#D97941] transition-colors"
                    >
                      @focali
                    </a>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex gap-4 p-6 bg-[#E8DCC4]/20 rounded-lg">
                  <div className="w-12 h-12 bg-[#D97941] rounded-full flex items-center justify-center flex-shrink-0">
                    <Send className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Telegram</h3>
                    <p className="text-[#1A1A1A]/70 mb-2">
                      Scrivimi per domande rapide o per parlare di progetti
                    </p>
                    <a
                      href="https://t.me/focali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A0522D] hover:text-[#D97941] transition-colors"
                    >
                      t.me/focali
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12 p-6 bg-[#1A1A1A] text-white rounded-lg">
                <h3 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
                  Domande Frequenti
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-[#D97941] mb-1">Quanto tempo ci vuole per la spedizione?</p>
                    <p className="text-white/80">
                      2-3 giorni lavorativi in Italia con corriere tracciato. Preparo tutto personalmente.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#D97941] mb-1">Posso restituire una cinepresa?</p>
                    <p className="text-white/80">
                      Certo! Hai 14 giorni per provarla. Se non ti soddisfa, te la riprendo senza problemi.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#D97941] mb-1">Offri consulenze per progetti?</p>
                    <p className="text-white/80">
                      Assolutamente. Sono un video editor e filmmaker: se hai un progetto e vuoi consigli, scrivimi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-[#E8DCC4]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
            Quando Rispondo
          </h3>
          <p className="text-[#1A1A1A]/70">
            Rispondo a tutte le email entro 24 ore, spesso molto prima<br />
            Lavoro principalmente nei giorni lavorativi, ma se hai urgenza scrivimi comunque.<br />
            Sono una persona sola, non un call center: ti darò sempre risposte dirette e oneste.
          </p>
        </div>
      </section>
    </div>
  );
}
