'use client';

import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { Map as LeafletMap } from 'leaflet';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

// SOLUCIÓN CRÍTICA: Configuración de íconos GLOBAL fuera del componente
// Esto asegura que se ejecute ANTES de cualquier renderizado
if (typeof window !== 'undefined') {
  // Eliminar el método _getIconUrl que causa problemas con Webpack/Turbopack
  delete (L.Icon.Default.prototype as any)._getIconUrl;

  // Usar require para obtener las rutas de las imágenes de forma segura
  const iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png');
  const iconUrl = require('leaflet/dist/images/marker-icon.png');
  const shadowUrl = require('leaflet/dist/images/marker-shadow.png');

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetinaUrl.default,
    iconUrl: iconUrl.default,
    shadowUrl: shadowUrl.default,
  });
}


export default function Map() {
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
  const position: L.LatLngExpression = [34.052235, -118.243683];
  const staticMapImage = PlaceHolderImages.find(img => img.id === 'static-map');
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
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
      <Marker position={position}>
        <Popup>
          TechFix Solutions <br /> Calle Falsa 123, Springfield.
        </Popup>
      </Marker>
    </MapContainer>
  );
}