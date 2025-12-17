'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { REGIONS, CATEGORIES } from '@/lib/constants';

interface SearchBarProps {
  variant?: 'hero' | 'header';
}

export default function SearchBar({ variant = 'hero' }: SearchBarProps) {
  const router = useRouter();
  const [region, setRegion] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selectedRegion = region || 'norte';
    const selectedCategory = category || 'alojamiento';
    const url = new URL(`/${selectedRegion}/${selectedCategory}`, window.location.origin);
    if (query) url.searchParams.set('q', query);
    router.push(url.pathname + url.search);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card md:grid-cols-3 ${
        variant === 'hero' ? 'md:gap-4 md:p-6' : ''
      }`}
    >
      <input
        type="text"
        placeholder="Busca un lugar, servicio o palabra clave"
        className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary-400 focus:outline-none"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <select
        className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary-400 focus:outline-none"
        value={region}
        onChange={(event) => setRegion(event.target.value)}
      >
        <option value="">Todas las regiones</option>
        {REGIONS.map((slug) => (
          <option key={slug} value={slug}>
            {slug}
          </option>
        ))}
      </select>
      <div className="flex gap-3">
        <select
          className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-primary-400 focus:outline-none"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Todas las categorías</option>
          {CATEGORIES.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.label}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="rounded-xl bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
