'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DogsShowcaseSection() {
  const {
    translations: {
      home: { dogsShowcase },
    },
  } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-emerald-50 to-slate-50 py-20">
      <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-emerald-100 opacity-60 blur-3xl" />
      <div className="absolute right-0 top-0 hidden h-64 w-64 rounded-full bg-sky-100 opacity-50 blur-3xl md:block" />
      <div className="container-page relative grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">{dogsShowcase.badge}</p>
          <h2 className="text-3xl font-semibold text-slate-900">{dogsShowcase.title}</h2>
          <p className="text-slate-600">{dogsShowcase.description}</p>
          <div className="flex flex-wrap gap-3">
            {dogsShowcase.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <Link href="/alta-negocio" className="rounded-full bg-primary-600 px-6 py-3 text-white">
              {dogsShowcase.primaryCta}
            </Link>
            <Link href="#categorias" className="rounded-full bg-white px-6 py-3 text-slate-700 shadow">
              {dogsShowcase.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative h-80 w-full">
            <Image
              src="/dogs-illustration.svg"
              alt="Perros disfrutando en el norte"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
          <div className="mt-6 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
            <div className="rounded-3xl bg-white/80 p-4 shadow">
              <p className="text-xs uppercase text-slate-500">{dogsShowcase.monetizationLabel}</p>
              <p className="text-lg font-semibold text-slate-900">{dogsShowcase.monetizationValue}</p>
              <p>{dogsShowcase.monetizationDescription}</p>
            </div>
            <div className="rounded-3xl bg-white/80 p-4 shadow">
              <p className="text-xs uppercase text-slate-500">{dogsShowcase.roadmapLabel}</p>
              <p>{dogsShowcase.roadmapDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
