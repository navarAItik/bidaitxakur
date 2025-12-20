'use client';

import type { POI } from '@/types/poi';
import type { SearchFilters } from '@/types/filters';
import SkeletonCard from '@/components/ui/SkeletonCard';

interface ServiceListProps {
  pois: POI[];
  filters: SearchFilters;
  isLoading: boolean;
  error: any;
}

export default function ServiceList({ pois, filters, isLoading, error }: ServiceListProps) {
  if (isLoading) return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
      </div>
    </section>
  );
  if (error) return <div className="text-center py-8 text-red-500">Error al cargar POIs: {error.message}</div>;
  if (pois.length === 0) return <div className="text-center py-8 text-slate-500">No se encontraron POIs con estos filtros. Intenta cambiar los filtros.</div>;

  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {pois.map((poi) => (
          <article key={poi.id} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500">
              <span>{poi.region}</span>
              <span>{poi.category}</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{poi.name}</h3>
            <p className="text-sm text-slate-600">{poi.description}</p>
            <div className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs text-slate-500">
              <p><strong>Reglas para mascotas:</strong> {poi.petRules}</p>
              <p className="mt-1"><strong>Verificado:</strong> {poi.verified ? 'Sí' : 'No'}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
