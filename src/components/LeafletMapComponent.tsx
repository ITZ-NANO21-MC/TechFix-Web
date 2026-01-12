'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { Icon as LeafletIcon } from 'leaflet';

export default function LeafletMapComponent() {
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
  const position: [number, number] = [11.399651615306901, -69.67147932066929];
  const [icon, setIcon] = useState<LeafletIcon | null>(null);

  useEffect(() => {
    // Configurar íconos después de montar
    if (typeof window !== 'undefined') {
      // Crear ícono personalizado explícitamente
      const customIcon = L.icon({
        iconUrl: '/images/leaflet/marker-icon.png',
        iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
        shadowUrl: '/images/leaflet/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      setIcon(customIcon);
    }
  }, []);

  if (!apiKey) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center">
        <p>API Key no configurada</p>
      </div>
    );
  }

  const geoapifyTileUrl = `https://maps.geoapify.com/v1/tile/carto/{z}/{x}/{y}.png?apiKey=${apiKey}`;

  return (
    <MapContainer
      center={position}
      zoom={14}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution='Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a>'
        url={geoapifyTileUrl}
      />
      {icon && (
        <Marker 
          position={position}
          icon={icon}
        >
          <Popup>
            TechFix Solutions <br /> Calle Falsa 123, Springfield.
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
