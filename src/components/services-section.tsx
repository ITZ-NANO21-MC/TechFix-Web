import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de soluciones para tus dispositivos, con la garantía de un trabajo profesional.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="font-semibold text-accent">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
