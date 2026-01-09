'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { accessories } from '@/lib/data';
import type { Accessory } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

function AccessoryCard({ accessory }: { accessory: Accessory }) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-w-1 aspect-h-1">
        <Image
          src={accessory.image.src}
          alt={accessory.image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          data-ai-hint={accessory.image.hint}
        />
      </div>
      <CardHeader>
        <CardTitle>{accessory.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{accessory.description}</p>
      </CardContent>
      <CardFooter>
        <p className="font-semibold text-accent text-lg">{accessory.price}</p>
      </CardFooter>
    </Card>
  );
}

export default function AccessoriesSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredAccessories = useMemo(() => {
    return accessories
      .filter((acc) => {
        if (activeTab === 'all') return true;
        return acc.category === activeTab;
      })
      .filter((acc) => acc.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, activeTab]);

  const tabs = [
    { value: 'all', label: 'Todos' },
    { value: 'new', label: 'Novedades' },
    { value: 'phone', label: 'Celulares' },
    { value: 'pc', label: 'PC' },
  ];

  return (
    <section id="accessories" className="py-16 md:py-24 bg-white dark:bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Catálogo de Accesorios</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Encuentra los mejores complementos para tus dispositivos.
          </p>
        </div>

        <Tabs defaultValue="all" onValueChange={setActiveTab} value={activeTab} className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
              ))}
            </TabsList>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar accesorio..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <TabsContent value={activeTab}>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredAccessories.map((accessory) => (
                <AccessoryCard key={accessory.id} accessory={accessory} />
              ))}
            </div>
            {filteredAccessories.length === 0 && (
                <p className='text-center text-muted-foreground py-16'>No se encontraron accesorios.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
