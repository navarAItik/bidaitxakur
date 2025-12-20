'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AddBusinessContent() {
  const {
    translations: {
      pages: { addBusiness },
    },
  } = useLanguage();

  return (
    <div className="bg-white py-12">
      <div className="container-page space-y-10">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary-500">{addBusiness.badge}</p>
          <h1 className="text-4xl font-semibold text-slate-900">{addBusiness.title}</h1>
          <p className="text-lg text-slate-600">{addBusiness.description}</p>
        </header>
        <section className="grid gap-6 md:grid-cols-3">
          {addBusiness.steps.map((step) => (
            <article key={step.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-primary-500">{step.title}</p>
              <p className="mt-3 text-sm text-slate-600">{step.description}</p>
            </article>
          ))}
        </section>
        <section className="rounded-4xl border border-slate-900/10 bg-slate-900 p-8 text-white shadow-lg">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-primary-200">{addBusiness.badge}</p>
            <h2 className="text-2xl font-semibold">{addBusiness.contactTitle}</h2>
            <p className="text-white/80">{addBusiness.contactDescription}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="https://airtable.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-lg shadow-primary-900/20"
              target="_blank"
            >
              {addBusiness.primaryCta}
            </Link>
            <Link
              href="/docs/map-roadmap"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {addBusiness.secondaryCta}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
