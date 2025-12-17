'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function TransportMatrixSection() {
  const {
    translations: {
      home: { transport },
    },
  } = useLanguage();

  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="container-page space-y-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-emerald-300">{transport.badge}</p>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">{transport.title}</h2>
              <p className="text-slate-200">{transport.description}</p>
            </div>
            <span className="text-sm font-semibold text-emerald-200">{transport.lastUpdated}</span>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="grid grid-cols-1 divide-y divide-white/10">
            {transport.entries.map((entry) => (
              <article
                key={entry.title}
                className="grid gap-6 p-6 text-slate-100 md:grid-cols-[1.2fr_1fr_1fr]"
                aria-label={entry.title}
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
                  <p className="text-sm text-slate-200">{entry.coverage}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-100/90">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="text-emerald-300" aria-hidden>
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="self-start rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white">
                  {entry.status}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
