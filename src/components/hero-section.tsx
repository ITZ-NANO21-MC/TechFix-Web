import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, CheckCircle, Users } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  const stats = [
    { value: '10+', label: 'Años de experiencia', icon: Award },
    { value: '5k+', label: 'Reparaciones completadas', icon: CheckCircle },
    { value: '98%', label: 'Clientes satisfechos', icon: Users },
  ];

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-shadow-lg">
          Tus Dispositivos, <span className="text-primary">Como Nuevos</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 mb-8">
          Expertos en reparación de celulares y PC. Damos nueva vida a tu tecnología con servicio rápido y garantizado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="#services">Ver Servicios</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#contact">Contáctanos</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <stat.icon className="w-8 h-8 text-accent" />
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-neutral-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
