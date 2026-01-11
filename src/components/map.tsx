'use client';

import { APIProvider, Map as GoogleMap, AdvancedMarker } from '@vis.gl/react-google-maps';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState } from 'react';

export default function Map() {
  const position = { lat: 34.052235, lng: -118.243683 };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const staticMapImage = PlaceHolderImages.find((img) => img.id === 'static-map');
  const [mapError, setMapError] = useState(false);

  const handleMapError = () => {
    setMapError(true);
  };
  
  if (!apiKey || mapError) {
    return (
        <div className="w-full h-full bg-muted flex items-center justify-center relative">
            {staticMapImage ? (
                 <Image
                    src={staticMapImage.imageUrl}
                    alt="Ubicación en el mapa"
                    fill
                    className="object-cover"
                    data-ai-hint={staticMapImage.imageHint}
                />
            ) : (
                <p className="text-muted-foreground text-center p-4">
                  No se pudo cargar el mapa.
                </p>
            )}
        </div>
    )
  }

  return (
    <APIProvider apiKey={apiKey} onLoad={() => {}} onError={handleMapError}>
        <GoogleMap
          defaultCenter={position}
          defaultZoom={14}
          mapId="techfix-map"
          className="w-full h-full"
          disableDefaultUI={true}
        >
          <AdvancedMarker position={position} title={'TechFix Solutions'} />
        </GoogleMap>
    </APIProvider>
  );
}
