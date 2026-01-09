'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  }

  const currentImage = selectedImageIndex !== null ? galleryImages[selectedImageIndex] : null;

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Galería de Trabajos</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Un vistazo a nuestras reparaciones y la calidad de nuestro trabajo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-w-1 aspect-h-1"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
                data-ai-hint={image.hint}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
          ))}
        </div>

        <Dialog open={selectedImageIndex !== null} onOpenChange={(isOpen) => !isOpen && closeLightbox()}>
          <DialogContent className="max-w-4xl w-full p-2 bg-transparent border-0 shadow-none">
             <DialogTitle className="sr-only">Galería de imágenes</DialogTitle>
            {currentImage && (
              <div className="relative">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  width={1200}
                  height={800}
                  className="rounded-lg object-contain w-full h-auto max-h-[80vh]"
                  data-ai-hint={currentImage.hint}
                />
                 <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/75 hover:text-white"
                    onClick={closeLightbox}
                  >
                    <X />
                    <span className="sr-only">Cerrar</span>
                  </Button>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/75 hover:text-white"
              onClick={handlePrev}
            >
              <ChevronLeft />
              <span className="sr-only">Anterior</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/75 hover:text-white"
              onClick={handleNext}
            >
              <ChevronRight />
              <span className="sr-only">Siguiente</span>
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
