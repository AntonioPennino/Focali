import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, MessageCircle, Send } from 'lucide-react';
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
      <section className="bg-[#E8DCC4]/30 py-20 animate-fade-in-down">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 heading-hero-small">
            Facciamo Due Chiacchiere
          </h1>
          <p className="text-[#1A1A1A]/70 text-base-custom">
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
            <div className="animate-slide-in-left">
              <h2 className="mb-6 heading-xl">
                Inviaci un Messaggio
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm border border-[#1A1A1A]/5">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2 bg-[#E8DCC4]/5 border-[#1A1A1A]/20 focus:border-[#D97941] focus:ring-2 focus:ring-[#D97941]/20 transition-all duration-300"
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
                    className="mt-2 bg-[#E8DCC4]/5 border-[#1A1A1A]/20 focus:border-[#D97941] focus:ring-2 focus:ring-[#D97941]/20 transition-all duration-300"
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
                    className="mt-2 bg-[#E8DCC4]/5 border-[#1A1A1A]/20 focus:border-[#D97941] focus:ring-2 focus:ring-[#D97941]/20 transition-all duration-300"
                    placeholder="Raccontaci come possiamo aiutarti..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#D97941] hover:bg-[#A0522D] text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  <Send size={18} className="mr-2" />
                  Invia Messaggio
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in-right">
              <h2 className="mb-6 heading-xl">
                Contattami Direttamente
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4 p-6 bg-[#E8DCC4]/20 rounded-lg border border-[#E8DCC4]/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#D97941] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <p className="text-[#1A1A1A]/70 mb-2">
                      Il modo più affidabile. Ti rispondo entro 24 ore.
                    </p>
                    <a
                      href="mailto:antonio.pennino.mail@gmail.com"
                      className="text-[#D97941] hover:text-[#A0522D] transition-colors duration-300 font-medium"
                    >
                      antonio.pennino.mail@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 p-6 bg-[#E8DCC4]/20 rounded-lg border border-[#E8DCC4]/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#D97941] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">WhatsApp</h3>
                    <p className="text-[#1A1A1A]/70 mb-2">
                      Per domande rapide o urgenti. Rispondo velocemente.
                    </p>
                    <a
                      href="https://wa.me/+393395959555"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D97941] hover:text-[#A0522D] transition-colors duration-300 font-medium"
                    >
                      +39 339 5959555
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12 p-6 bg-[#1A1A1A] text-white rounded-lg shadow-sm">
                <h3 className="mb-4 heading-lg">
                  Domande Frequenti
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="pb-3 border-b border-white/10 hover:translate-x-1 transition-all duration-300">
                    <p className="text-[#D97941] mb-1 font-medium">Quanto tempo ci vuole per la spedizione?</p>
                    <p className="text-white/80">
                      2-3 giorni lavorativi in Italia con corriere tracciato. Preparo tutto personalmente.
                    </p>
                  </div>
                  <div className="pb-3 border-b border-white/10 hover:translate-x-1 transition-all duration-300">
                    <p className="text-[#D97941] mb-1 font-medium">Posso restituire una cinepresa?</p>
                    <p className="text-white/80">
                      Certo! Hai 14 giorni per provarla. Se non ti soddisfa, te la riprendo senza problemi.
                    </p>
                  </div>
                  <div className="hover:translate-x-1 transition-all duration-300">
                    <p className="text-[#D97941] mb-1 font-medium">Offri consulenze per progetti?</p>
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
      <section className="py-16 bg-[#E8DCC4]/30 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="mb-4 heading-lg">
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
