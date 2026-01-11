'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

// SOLUCIÓN: Configuración GLOBAL fuera del componente para que no se re-declare.
// Se hace solo una vez cuando el módulo se carga en el cliente.
if (typeof window !== 'undefined') {
  // Esta parte SOLO se ejecuta en el cliente
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  
  // Importaciones dinámicas de las imágenes de los iconos en tiempo de ejecución
  const iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png').default;
  const iconUrl = require('leaflet/dist/images/marker-icon.png').default;
  const shadowUrl = require('leaflet/dist/images/marker-shadow.png').default;
  
  L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
  });
}

export default function Map() {
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
  const position: L.LatLngExpression = [34.052235, -118.243683];
  const staticMapImage = PlaceHolderImages.find(img => img.id === 'static-map');
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    // Este useEffect ahora solo sirve para evitar el renderizado inicial en el servidor
    // y asegurarse de que el componente se hidrate correctamente en el cliente.
    setIsMounted(true);
  }, []);

  if (!apiKey) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center relative">
        {staticMapImage && (
          <Image 
            src={staticMapImage.imageUrl}
            alt="Mapa estático de la ubicación"
            fill
            className="object-cover"
            data-ai-hint={staticMapImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <p className="text-white text-center p-4 rounded-md bg-black/70">
            La clave de API del mapa no está configurada.
          </p>
        </div>
      </div>
    );
  }

  const geoapifyTileUrl = `https://maps.geoapify.com/v1/tile/carto/{z}/{x}/{y}.png?apiKey=${apiKey}`;

  if (!isMounted) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center">
        <p>Cargando mapa...</p>
      </div>
    );
  }

  return (
    <MapContainer 
      center={position} 
      zoom={14} 
      scrollWheelZoom={false} 
      className="w-full h-full"
    >
      <TileLayer
        attribution='Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors'
        url={geoapifyTileUrl}
      />
      {/* El marcador usará automáticamente el ícono por defecto que configuramos globalmente */}
      <Marker position={position}>
        <Popup>
          TechFix Solutions <br /> Calle Falsa 123, Springfield.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
