'use client';

import { BUSINESS_FILTERS } from '@/lib/constants';

interface FilterSidebarProps {
  category: keyof typeof BUSINESS_FILTERS | 'default';
}

export default function FilterSidebar({ category }: FilterSidebarProps) {
  const filters = BUSINESS_FILTERS[category as keyof typeof BUSINESS_FILTERS] ?? [];

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Filtros expertos</p>
      <div className="mt-4 space-y-3 text-sm text-slate-700">
        {filters.length === 0 && <p className="text-slate-400">Muy pronto filtros específicos.</p>}
        {filters.map((filter) => (
          <label key={filter} className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-slate-300 text-primary-600" />
            {filter.replace(/-/g, ' ')}
          </label>
        ))}
      </div>
    </aside>
  );
}
