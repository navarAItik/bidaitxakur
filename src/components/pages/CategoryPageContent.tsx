'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import SearchBar from '@/components/search/SearchBar';
import FilterSidebar from '@/components/search/FilterSidebar';
import BusinessCard from '@/components/business/BusinessCard';
import { BUSINESS_FILTERS, type CategorySlug } from '@/lib/constants';
import type { Business } from '@/types/business';

interface CategoryPageContentProps {
  regionName: string;
  categoryKey: string;
  categoryLabel: string;
  categoryDescription: string;
  businesses: Business[];
}

export default function CategoryPageContent({
  regionName,
  categoryKey,
  categoryLabel,
  categoryDescription,
  businesses,
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
        <FilterSidebar category={categoryKey as keyof typeof BUSINESS_FILTERS | 'default'} />
        <div className="grid gap-6 md:grid-cols-2">
          {businesses.length === 0 && <p className="text-sm text-slate-500">{category.emptyState}</p>}
          {businesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </div>
    </>
  );
}
