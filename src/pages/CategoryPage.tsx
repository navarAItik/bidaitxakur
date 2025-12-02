import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import FiltersBar from '../components/FiltersBar';
import LeafletMap from '../components/LeafletMap';
import PlaceCard from '../components/PlaceCard';
import { placesService } from '../services/placesService';
import { CategorySlug, Place } from '../types/place';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: CategorySlug }>();
  const [search, setSearch] = useState('');
  const [town, setTown] = useState('');
  const [verified, setVerified] = useState(false);
  const [fencedGarden, setFencedGarden] = useState(false);
  const [waterNearby, setWaterNearby] = useState(false);

  const categoryLabel = placesService.categories().find((c) => c.slug === slug)?.label ?? 'Categoría';

  const results = useMemo<Place[]>(() => {
    return placesService.list({ search, town, category: slug, verified, fencedGarden, waterNearby });
  }, [search, town, slug, verified, fencedGarden, waterNearby]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-6">
      <Helmet>
        <title>{categoryLabel} pet-friendly en Navarra | Patas Navarricas</title>
        <meta
          name="description"
          content={`Explora ${categoryLabel.toLowerCase()} pet-friendly con filtros y mapa en Navarra.`}
        />
      </Helmet>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-brand-dark/70">Categoría</p>
          <h1 className="text-3xl font-bold">{categoryLabel}</h1>
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar dentro de la categoría"
          className="rounded-md border border-brand-dark/10 px-3 py-2 focus:outline-brand-green"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={town}
          onChange={(e) => setTown(e.target.value)}
          placeholder="Filtrar por localidad"
          className="rounded-md border border-brand-dark/10 px-3 py-2 focus:outline-brand-green"
        />
        <FiltersBar
          verified={verified}
          fencedGarden={fencedGarden}
          waterNearby={waterNearby}
          onChange={(values) => {
            if (values.verified !== undefined) setVerified(values.verified);
            if (values.fencedGarden !== undefined) setFencedGarden(values.fencedGarden);
            if (values.waterNearby !== undefined) setWaterNearby(values.waterNearby);
          }}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {results.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
          {results.length === 0 && <p>No hay resultados con esos filtros.</p>}
        </div>
        <aside className="space-y-3">
          <div className="bg-white p-3 rounded-xl border border-brand-dark/5 shadow-sm">
            <h3 className="font-semibold mb-2">Mapa</h3>
            {results[0] ? (
              <LeafletMap place={results[0]} />
            ) : (
              <p className="text-sm text-brand-dark/70">Añade filtros para ver ubicación.</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
