import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CategoryGrid from '../components/CategoryGrid';
import PlaceCard from '../components/PlaceCard';
import NewsletterCTA from '../components/NewsletterCTA';
import { placesService } from '../services/placesService';
import { CategorySlug } from '../types/place';

export default function HomePage() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<{ search: string; town: string; category?: CategorySlug }>(
    {
      search: '',
      town: '',
      category: undefined,
    },
  );

  const featured = placesService.list().filter((p) => p.featured || p.sponsored).slice(0, 4);
  const totalPlaces = placesService.list().length;
  const verifiedPlaces = placesService.list({ verified: true }).length;
  const waterPlans = placesService.list({ waterNearby: true }).length;
  const stats = [
    { value: `${totalPlaces}+`, label: 'Lugares verificados' },
    { value: `${placesService.categories().length}`, label: 'Categorías con filtros' },
    { value: `${waterPlans}`, label: 'Planes con agua cerca' },
  ];
  const heroBadges = ['Mapas + políticas claras', 'Actualizado cada mes', 'Sin rollos anti-perros'];

  return (
    <div>
      <Helmet>
        <title>Patas Navarricas | Directorio pet-friendly en Navarra</title>
        <meta
          name="description"
          content="Encuentra veterinarios, alojamientos, rutas y restaurantes pet-friendly en Navarra."
        />
        <meta property="og:title" content="Patas Navarricas" />
        <meta property="og:description" content="La guía pet-friendly para moverte por Navarra con tu perro." />
      </Helmet>
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-brand-cream/60 to-brand-sand/40" />
        <div className="absolute -right-12 top-8 w-64 h-64 bg-brand-sky blur-[120px]" />
        <div className="absolute -left-12 bottom-0 w-72 h-72 bg-brand-blush blur-[150px]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-brand-dark/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark/70">
              Navarra pet-friendly
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              2025
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold leading-tight">
                Planes perrunos con mapas, filtros y cero dramas.
              </h1>
              <p className="text-lg sm:text-xl text-brand-dark/80 max-w-2xl">
                Encuentra veterinarios, restaurantes, alojamientos y rutas en Navarra con políticas claras, fichas verificadas y consejos locales.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/directorio"
                className="inline-flex items-center gap-2 bg-brand-green text-white px-5 py-3 rounded-full font-semibold shadow-soft"
              >
                Ver directorio
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/destacar"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold border border-brand-dark/15 bg-white/70 backdrop-blur"
              >
                Promociona tu lugar
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <span key={badge} className="text-xs uppercase tracking-wide bg-white/70 border border-brand-dark/10 px-3 py-1 rounded-full text-brand-dark/70">
                  {badge}
                </span>
              ))}
            </div>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-brand-dark/10">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <dt className="text-3xl font-display font-semibold">{stat.value}</dt>
                  <dd className="text-sm text-brand-dark/70">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="bg-white/90 border border-brand-dark/5 rounded-[24px] p-5 shadow-soft backdrop-blur card-glow">
              <p className="font-semibold text-brand-dark mb-3">Filtra por nombre, localidad o categoría</p>
              <SearchBar
                search={filters.search}
                town={filters.town}
                category={filters.category}
                onChange={(values) => setFilters((prev) => ({ ...prev, ...values }))}
              />
              <button
                className="mt-4 w-full bg-brand-green text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                onClick={() => {
                  const params = new URLSearchParams();
                  if (filters.search) params.set('q', filters.search);
                  if (filters.town) params.set('town', filters.town);
                  if (filters.category) params.set('cat', filters.category);
                  navigate(`/directorio?${params.toString()}`);
                }}
              >
                Buscar lugares
                <span aria-hidden>↗</span>
              </button>
              <div className="mt-5 text-xs text-brand-dark/70 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                100% gratis para dog lovers
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-11/12 rounded-2xl border border-brand-dark/5 bg-white/70 p-4 shadow-soft backdrop-blur">
              <p className="text-sm font-semibold mb-2">Lo último añadido</p>
              <div className="space-y-2 text-sm text-brand-dark/80">
                {featured.slice(0, 2).map((place) => (
                  <p key={place.id} className="flex items-center justify-between gap-3">
                    <span>{place.name}</span>
                    <span className="text-xs text-brand-dark/60">{place.town}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-dark/60">Categorías</p>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold">Lo que más buscan las familias perrunas</h2>
          </div>
          <Link to="/directorio" className="inline-flex items-center gap-2 text-brand-green font-semibold">
            Ver todo
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="rounded-3xl border border-white/70 bg-white/80 backdrop-blur p-6 shadow-soft">
          <CategoryGrid />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-dark/60">Destacados</p>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold">Sitios mimados por la comunidad</h2>
          </div>
          <Link to="/destacar" className="text-sm text-brand-dark/70 underline underline-offset-4">
            ¿Quieres salir aquí?
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <NewsletterCTA />
      </section>
    </div>
  );
}
