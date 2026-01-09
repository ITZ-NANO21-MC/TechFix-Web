import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import StatsSection from '@/components/stats-section';
import ServicesSection from '@/components/services-section';
import GallerySection from '@/components/gallery-section';
import AccessoriesSection from '@/components/accessories-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import FloatingButtons from '@/components/floating-buttons';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <GallerySection />
        <AccessoriesSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
