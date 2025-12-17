'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const MapboxMap = dynamic(() => import('./MapboxPlaceholder'), { ssr: false });

interface MapContainerProps {
  latitude: number;
  longitude: number;
}

export default function MapContainer({ latitude, longitude }: MapContainerProps) {
  const position = useMemo(() => ({ latitude, longitude }), [latitude, longitude]);

  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold text-slate-700">Mapa interactivo</p>
      <div className="mt-4 h-64 rounded-2xl bg-slate-100">
        <MapboxMap latitude={position.latitude} longitude={position.longitude} />
      </div>
    </section>
  );
}
