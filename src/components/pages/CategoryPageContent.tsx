'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import SearchBar from '@/components/search/SearchBar';
import FilterSidebar from '@/components/search/FilterSidebar';
import BusinessCard from '@/components/business/BusinessCard';
import POICard from '@/components/poi/POICard';
import { BUSINESS_FILTERS, POI_FILTERS } from '@/lib/constants';
import type { Business } from '@/types/business';
import type { POI } from '@/types/poi';

interface CategoryPageContentProps {
  regionName: string;
  categoryKey: string;
  categoryLabel: string;
  categoryDescription: string;
  businesses: Business[];
  pois?: POI[];
}

export default function CategoryPageContent({
  regionName,
  categoryKey,
  categoryLabel,
  categoryDescription,
  businesses,
  pois = [],
}: CategoryPageContentProps) {
  const {
    translations: {
      pages: { category },
      home: { categoriesSection },
    },
  } = useLanguage();

  const formatTemplate = (template: string, values: Record<string, string>) =>
    template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');

  const copy =
    categoriesSection.cards[categoryKey as CategorySlug] ?? ({ label: categoryLabel, description: categoryDescription } as const);

  return (
    <>
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-primary-500">
          {formatTemplate(category.badgeTemplate, { region: regionName, category: copy.label })}
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          {formatTemplate(category.titleTemplate, { region: regionName, category: copy.label })}
        </h1>
        <p className="text-slate-600">{copy.description}</p>
      </header>
      <SearchBar variant="header" />
      <div className="grid gap-6 md:grid-cols-[280px_1fr]">
        <FilterSidebar filters={pois.length > 0 ? (POI_FILTERS[categoryKey as keyof typeof POI_FILTERS] || []) : (BUSINESS_FILTERS[categoryKey as keyof typeof BUSINESS_FILTERS] || [])} />
        <div className="grid gap-6 md:grid-cols-2">
          {businesses.length === 0 && pois.length === 0 && <p className="text-sm text-slate-500">{category.emptyState}</p>}
          {businesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
          {pois.map((poi) => (
            <POICard key={poi.id} poi={poi} />
          ))}
        </div>
      </div>
    </>
  );
}
