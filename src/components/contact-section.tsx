import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './contact-form';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./map'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-muted flex items-center justify-center"><p>Cargando mapa...</p></div>
});

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contáctanos</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o necesitas una cotización? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Información de Contacto</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Calle Falsa 123, Springfield, USA</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href="mailto:contacto@techfix.com" className="hover:text-primary transition-colors">contacto@techfix.com</a>
                </div>
              </div>
            </div>

            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
