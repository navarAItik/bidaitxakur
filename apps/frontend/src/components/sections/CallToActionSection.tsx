'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CallToActionSection() {
  const {
    translations: {
      home: { cta },
    },
  } = useLanguage();

  return (
    <section className="py-20">
      <div className="container-page">
        <div className="overflow-hidden rounded-4xl bg-gradient-to-r from-primary-600 via-emerald-500 to-sky-500 p-8 text-white shadow-xl md:p-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-widest text-white/70">{cta.badge}</p>
              <h2 className="text-3xl font-semibold leading-tight">{cta.title}</h2>
              <p className="text-white/90">{cta.description}</p>
            </div>
            <div className="flex flex-col gap-3 md:min-w-[280px]">
              <Link
                href="/alta-negocio"
                className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-primary-600 shadow-lg shadow-primary-900/30 transition hover:-translate-y-1"
              >
                {cta.primaryCta}
              </Link>
              <Link
                href="/blog"
                className="rounded-full border border-white/50 px-5 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                {cta.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
