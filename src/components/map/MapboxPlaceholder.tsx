'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import type { POI } from '@/types/poi';

// Configurar el access token de Mapbox desde variable de entorno
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

interface Props {
  latitude: number;
  longitude: number;
  pois?: POI[];
}

export default function MapboxMap({ latitude, longitude, pois = [] }: Props) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  // Inicialización del mapa
  useEffect(() => {
    if (mapRef.current || !mapContainerRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [longitude, latitude],
      zoom: 9,
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [longitude, latitude]);

  // Actualización de marcadores cuando los POIs cambian
  useEffect(() => {
    if (!mapRef.current || !pois) return;

    // Limpiar marcadores anteriores (simple implementación)
    // Para una app más compleja, se podría gestionar un array de marcadores.
    document.querySelectorAll('.mapboxgl-marker').forEach((marker) => marker.remove());

    pois.forEach((poi) => {
      if (poi.location?.longitude && poi.location?.latitude) {
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(poi.name);

        new mapboxgl.Marker()
          .setLngLat([poi.location.longitude, poi.location.latitude])
          .setPopup(popup)
          .addTo(mapRef.current!);
      }
    });
  }, [pois]);

  return <div ref={mapContainerRef} className="h-full w-full rounded-2xl" />;
}
