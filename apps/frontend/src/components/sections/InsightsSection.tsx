'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { MARKET_INDICATORS, REGIONAL_INSIGHTS } from '@/lib/research';

export default function InsightsSection() {
  const {
    translations: {
      home: { insights },
    },
  } = useLanguage();

  return (
    <section className="bg-slate-50 py-16">
      <div className="container-page space-y-10">
        <header className="text-center">
          <p className="text-sm uppercase tracking-wide text-primary-500">{insights.badge}</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">{insights.title}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-slate-600">{insights.description}</p>
        </header>

        <section aria-label={insights.globalTitle} className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-slate-900">{insights.globalTitle}</h3>
            <span className="text-xs uppercase text-slate-500">{MARKET_INDICATORS.length} KPIs</span>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">{insights.indicatorLabel}</th>
                    <th className="px-4 py-3">{insights.valueLabel}</th>
                    <th className="px-4 py-3">{insights.categoryLabel}</th>
                    <th className="px-4 py-3">{insights.sourceLabel}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {MARKET_INDICATORS.map((item) => (
                    <tr key={item.indicator} className="hover:bg-slate-50/70">
                      <td className="px-4 py-3 font-medium text-slate-900">{item.indicator}</td>
                      <td className="px-4 py-3 text-slate-700">{item.value}</td>
                      <td className="px-4 py-3 text-slate-500">{item.category}</td>
                      <td className="px-4 py-3 text-slate-400">
                        {item.source?.length ? item.source : insights.noSource}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section aria-label={insights.regionalTitle} className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">{insights.regionalTitle}</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {REGIONAL_INSIGHTS.map((region) => (
              <article
                key={region.slug}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-card"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{region.region}</p>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{region.items.length} insights</p>
                  </div>
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase text-primary-600">
                    {region.slug}
                  </span>
                </div>
                <ul className="mt-4 space-y-3 overflow-y-auto pr-2 text-sm text-slate-600 md:max-h-80">
                  {region.items.map((item) => (
                    <li key={`${region.slug}-${item.type}-${item.location}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">{item.type}</p>
                      <p className="mt-1 text-slate-700">{item.detail}</p>
                      <p className="mt-2 text-xs text-slate-500">{item.location}</p>
                      {item.source && (
                        <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">{item.source}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
