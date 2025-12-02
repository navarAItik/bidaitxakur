import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
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
  const [focusedPlace, setFocusedPlace] = useState<Place | null>(null);

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

  useEffect(() => {
    if (results.length === 0) {
      setFocusedPlace(null);
      return;
    }
    const stillVisible = focusedPlace && results.some((place) => place.id === focusedPlace.id);
    if (!stillVisible) {
      setFocusedPlace(results[0]);
    }
  }, [results, focusedPlace]);

  const handleResetFilters = () => {
    setVerified(false);
    setFencedGarden(false);
    setWaterNearby(false);
  };

  const placeForMap = focusedPlace ?? results[0];
  const hasActiveFilters = search || town || category || verified || fencedGarden || waterNearby;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-8">
      <Helmet>
        <title>Directorio pet-friendly en Navarra | Patas Navarricas</title>
        <meta
          name="description"
          content="Busca veterinarios, alojamientos, tiendas, bares y rutas pet-friendly en Navarra con filtros."
        />
      </Helmet>
      <section className="space-y-6 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-dark/60">Explora Navarra</p>
            <h1 className="text-3xl sm:text-4xl font-display font-semibold">Directorio completo</h1>
            <p className="text-sm text-brand-dark/70 mt-1">{results.length} resultados disponibles</p>
          </div>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setTown('');
                setCategory(undefined);
                handleResetFilters();
              }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-dark/15 px-4 py-2 text-sm font-semibold text-brand-dark/70 hover:text-brand-dark"
            >
              Limpiar todo
              <span aria-hidden>✕</span>
            </button>
          )}
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
          onReset={handleResetFilters}
        />
      </section>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,1fr)]">
        <div className="space-y-4">
          {results.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              onHover={(p) => setFocusedPlace(p)}
              onLeave={() => setFocusedPlace(null)}
            />
          ))}
          {results.length === 0 && (
            <div className="rounded-3xl border border-white/60 bg-white/80 p-8 text-center shadow-soft">
              <p className="text-2xl mb-2">🐶</p>
              <p className="font-semibold text-brand-dark">Sin resultados con esos filtros</p>
              <p className="text-sm text-brand-dark/70">
                Ajusta la búsqueda o elimina filtros para ver más lugares pet-friendly.
              </p>
            </div>
          )}
        </div>
        <aside className="space-y-4 lg:sticky lg:top-28 self-start">
          <div className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-brand-dark/60">Mapa en vivo</p>
                {placeForMap && <p className="font-semibold">{placeForMap.name}</p>}
              </div>
              <span className="text-xs uppercase tracking-[0.4em] text-brand-green">Live</span>
            </div>
            {placeForMap ? (
              <LeafletMap place={placeForMap} />
            ) : (
              <p className="text-sm text-brand-dark/70">Selecciona un resultado para ver ubicación.</p>
            )}
          </div>
          <div className="rounded-2xl border border-brand-dark/10 bg-brand-green text-white p-5 shadow-soft">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">Negocios</p>
            <p className="text-lg font-semibold mt-2">¿Tu lugar es dog-friendly?</p>
            <p className="text-sm text-white/90 mt-1 mb-3">
              Publica tu ficha, añade fotos y destaca en la comunidad en menos de 5 minutos.
            </p>
            <Link
              to="/destacar"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-4 py-2 text-sm font-semibold"
            >
              Destacar mi negocio
              <span aria-hidden>→</span>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
