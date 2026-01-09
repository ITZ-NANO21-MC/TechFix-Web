import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative w-full h-[70vh] lg:h-[60vh] min-h-[550px] flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover object-center"
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
    </section>
  );
}
