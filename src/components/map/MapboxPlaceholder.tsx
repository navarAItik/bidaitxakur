'use client';

interface Props {
  latitude: number;
  longitude: number;
}

export default function MapboxPlaceholder({ latitude, longitude }: Props) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-slate-500">
      <p>Mapa interactivo pendiente de integrar</p>
      <p className="text-xs">Lat: {latitude.toFixed(3)} · Lng: {longitude.toFixed(3)}</p>
    </div>
  );
}
