import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="bg-muted dark:bg-card py-12 md:py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Tus Dispositivos, <span className="text-primary">Como Nuevos</span>
          </h1>
          <p className="max-w-2xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground mb-8">
            Expertos en reparación de celulares y PC. Damos nueva vida a tu tecnología con servicio rápido y garantizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" asChild>
              <Link href="#services">Ver Servicios</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Contáctanos</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Taller de reparación de tecnología"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
