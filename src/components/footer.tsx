import Link from 'next/link';
import { Wrench } from 'lucide-react';
import { socialLinks, navLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">TechFix Solutions</span>
            </Link>
            <p className="text-sm">
              Soluciones tecnológicas a tu alcance. Expertos en reparación y accesorios.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>Calle Avenida Ali Primera</li>
              <li>Email: contacto@techfix.com</li>
              <li>Tel: +58 (424) 668-4134</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TechFix Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
