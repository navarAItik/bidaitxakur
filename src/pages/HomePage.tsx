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
      <section className="bg-gradient-to-br from-brand-green/10 via-white to-brand-sand py-12 border-b border-brand-dark/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-brand-dark/70 font-semibold">Navarra pet-friendly</p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Planes perrunos sin estrés</h1>
            <p className="text-lg text-brand-dark/80">
              Veterinarios, bares, alojamientos, rutas y planes con mapa, filtros y políticas pet claras.
            </p>
            <div className="flex gap-3">
              <Link
                to="/directorio"
                className="bg-brand-green text-white px-4 py-2 rounded-md font-semibold shadow"
              >
                Ver directorio
              </Link>
              <Link
                to="/destacar"
                className="px-4 py-2 rounded-md font-semibold border border-brand-dark/20"
              >
                Destaca tu negocio
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-brand-dark/5 p-4">
            <p className="font-semibold mb-3">Busca por nombre, localidad o categoría</p>
            <SearchBar
              search={filters.search}
              town={filters.town}
              category={filters.category}
              onChange={(values) => setFilters((prev) => ({ ...prev, ...values }))}
            />
            <button
              className="mt-4 w-full bg-brand-green text-white py-2 rounded-md font-semibold"
              onClick={() => {
                const params = new URLSearchParams();
                if (filters.search) params.set('q', filters.search);
                if (filters.town) params.set('town', filters.town);
                if (filters.category) params.set('cat', filters.category);
                navigate(`/directorio?${params.toString()}`);
              }}
            >
              Buscar
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Categorías rápidas</h2>
          <Link to="/directorio" className="text-brand-green font-semibold">
            Ver todo
          </Link>
        </div>
        <CategoryGrid />
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Top destacados</h2>
          <Link to="/destacar" className="text-sm text-brand-dark/70 underline">
            ¿Quieres salir aquí?
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <NewsletterCTA />
      </section>
    </div>
  );
}
