'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function MarketplaceHighlights() {
  const {
    translations: {
      home: { marketplace },
    },
  } = useLanguage();

  return (
    <section className="bg-gray-50 py-16">
      <div className="container-page space-y-8">
        <div className="text-center md:text-left">
          <p className="text-sm uppercase tracking-wide text-primary-500">{marketplace.badge}</p>
          <h2 className="text-3xl font-semibold text-slate-900">{marketplace.title}</h2>
          <p className="text-slate-600">{marketplace.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {marketplace.metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-100 hover:shadow-card"
            >
              <p className="text-xs uppercase tracking-wide text-slate-500">{metric.label}</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">{metric.value}</p>
              <p className="mt-1 text-sm text-slate-500">{metric.helper}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
