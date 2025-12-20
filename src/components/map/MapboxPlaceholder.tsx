'use client';

import type { POI } from '@/types/poi';

interface Props {
  latitude: number;
  longitude: number;
  pois?: POI[];
}

export default function MapboxPlaceholder({ latitude, longitude, pois = [] }: Props) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-slate-500">
      <p>Mapa interactivo pendiente de integrar</p>
      <p className="text-xs">Lat: {latitude.toFixed(3)} · Lng: {longitude.toFixed(3)}</p>
      {pois.length > 0 && (
        <p className="text-xs">POIs mostrados: {pois.length}</p>
      )}
    </div>
  );
}
