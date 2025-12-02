import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import FiltersBar from '../components/FiltersBar';
import LeafletMap from '../components/LeafletMap';
import PlaceCard from '../components/PlaceCard';
import SearchBar from '../components/SearchBar';
import { placesService } from '../services/placesService';
import { CategorySlug, Place } from '../types/place';

export default function DirectoryPage() {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get('q') ?? '');
  const [town, setTown] = useState(params.get('town') ?? '');
  const [category, setCategory] = useState<CategorySlug | undefined>(params.get('cat') as CategorySlug);
  const [verified, setVerified] = useState(false);
  const [fencedGarden, setFencedGarden] = useState(false);
  const [waterNearby, setWaterNearby] = useState(false);

  useEffect(() => {
    const next = new URLSearchParams();
    if (search) next.set('q', search);
    if (town) next.set('town', town);
    if (category) next.set('cat', category);
    setParams(next, { replace: true });
  }, [search, town, category, setParams]);

  const results = useMemo<Place[]>(() => {
    return placesService.list({ search, town, category, verified, fencedGarden, waterNearby });
  }, [search, town, category, verified, fencedGarden, waterNearby]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-6">
      <Helmet>
        <title>Directorio pet-friendly en Navarra | Patas Navarricas</title>
        <meta
          name="description"
          content="Busca veterinarios, alojamientos, tiendas, bares y rutas pet-friendly en Navarra con filtros."
        />
      </Helmet>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-brand-dark/70">Explora todo</p>
          <h1 className="text-3xl font-bold">Directorio</h1>
        </div>
        <p className="text-sm text-brand-dark/70">{results.length} resultados</p>
      </div>

      <SearchBar
        search={search}
        town={town}
        category={category}
        onChange={({ search: s, town: t, category: c }) => {
          if (s !== undefined) setSearch(s);
          if (t !== undefined) setTown(t);
          if (c !== undefined) setCategory(c);
        }}
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
              <p className="text-sm text-brand-dark/70">Selecciona un resultado para ver ubicación.</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
