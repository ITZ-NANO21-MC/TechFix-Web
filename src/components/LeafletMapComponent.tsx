'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function LeafletMapComponent() {
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
  const position: [number, number] = [34.052235, -118.243683];

  useEffect(() => {
    // Configurar íconos después de montar
    if (typeof window !== 'undefined') {
      // Crear ícono personalizado explícitamente
      const icon = L.icon({
        iconUrl: '/images/leaflet/marker-icon.png',
        iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
        shadowUrl: '/images/leaflet/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      
      // Hacer disponible globalmente
      (window as any).customLeafletIcon = icon;
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
      <Marker 
        position={position}
        icon={(window as any).customLeafletIcon}
      >
        <Popup>
          TechFix Solutions <br /> Calle Falsa 123, Springfield.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
