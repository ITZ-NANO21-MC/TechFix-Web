'use client';

import { APIProvider, Map as GoogleMap, AdvancedMarker } from '@vis.gl/react-google-maps';

export default function Map() {
  const position = { lat: 34.052235, lng: -118.243683 };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
        <div className="w-full h-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground text-center p-4">
              Google Maps API Key no encontrada. Por favor, configura la variable de entorno NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
            </p>
        </div>
    )
  }

  return (
    <APIProvider apiKey={apiKey}>
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
