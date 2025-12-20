'use client';

import React from 'react';
import { REGION_DATA, CATEGORIES } from '@/lib/constants';
import type { SearchFilters } from '@/types/filters';

interface FilterSidebarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

export default function FilterSidebar({ filters, onFiltersChange }: FilterSidebarProps) {
  const regionOptions = [
    { value: '', label: 'Todas las regiones' },
    ...REGION_DATA.filter(r => r.slug !== 'norte').map(r => ({ value: r.slug, label: r.name })),
  ];

  const categoryOptions = [
    { value: '', label: 'Todas las categorías' },
    ...CATEGORIES.map(c => ({ value: c.slug, label: c.label })),
  ];

  const handleRegionChange = (value: string) => {
    onFiltersChange({ ...filters, region: value as any });
  };

  const handleCategoryChange = (value: string) => {
    onFiltersChange({ ...filters, category: value as any });
  };

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Filtros</p>
      <div className="mt-4 space-y-3">
        <div>
          <label className="block text-sm font-medium text-slate-700">Región</label>
          <select
            value={filters.region || ''}
            onChange={(e) => handleRegionChange(e.target.value)}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none"
          >
            {regionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Categoría</label>
          <select
            value={filters.category || ''}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none"
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </aside>
  );
}
