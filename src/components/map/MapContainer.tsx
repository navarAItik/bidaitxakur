'use client';

import dynamic from 'next/dynamic';
import { useMemo, useEffect, useState } from 'react';
import type { POI } from '@/types/poi';

// Renombramos la importación porque ya no es un placeholder.
const MapboxMap = dynamic(() => import('./MapboxPlaceholder'), { ssr: false });

interface MapContainerProps {
  latitude: number;
  longitude: number;
}

export default function MapContainer({ latitude, longitude }: MapContainerProps) {
  const [pois, setPois] = useState<POI[]>([]);
  const position = useMemo(() => ({ latitude, longitude }), [latitude, longitude]);

  useEffect(() => {
    const fetchPOIs = async () => {
      try {
        // NOTA: En un entorno de producción, esta URL debería venir de una variable de entorno.
        const response = await fetch('http://localhost:8000/api/pois/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: POI[] = await response.json();
        setPois(data);
      } catch (error) {
        console.error('Failed to fetch POIs:', error);
      }
    };

    fetchPOIs();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente.

  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-neutral-800">Mapa interactivo</p>
        <p className="text-xs text-neutral-500">{pois.length} resultados</p>
      </div>
      <div className="mt-4 h-[450px] rounded-2xl bg-neutral-100">
        <MapboxMap latitude={position.latitude} longitude={position.longitude} pois={pois} />
      </div>
    </section>
  );
}
