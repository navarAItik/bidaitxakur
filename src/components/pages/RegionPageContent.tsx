'use client';

import Link from 'next/link';
import { CATEGORIES, type CategorySlug, type RegionSlug } from '@/lib/constants';
import { REGION_CONTENT } from '@/lib/regionContent';
import { useLanguage } from '@/contexts/LanguageContext';

interface RegionPageContentProps {
  regionSlug: RegionSlug;
  regionName: string;
  regionDescription: string;
}

export default function RegionPageContent({ regionSlug, regionName, regionDescription }: RegionPageContentProps) {
  const {
    translations: {
      pages: { region },
      home: { categoriesSection },
    },
  } = useLanguage();
  const richContent = REGION_CONTENT[regionSlug];
  const descriptionCopy = richContent?.intro ?? regionDescription;

  return (
    <>
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-primary-500">
          {region.badgePrefix} {regionName}
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">
          {region.heroTitlePrefix} {regionName}
        </h1>
        <p className="text-lg text-slate-600">{descriptionCopy}</p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          {region.features.map((feature) => (
            <span key={feature} className="rounded-full bg-slate-100 px-4 py-2">
              {feature}
            </span>
          ))}
        </div>
      </header>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((category) => (
          <Link
            key={category.slug}
            href={`/${regionSlug}/${category.slug}`}
            className="rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
          >
            <p className="text-xs uppercase text-primary-500">
              {categoriesSection.cards[category.slug as CategorySlug]?.label ?? category.label}
            </p>
            <p className="text-sm text-slate-600">
              {categoriesSection.cards[category.slug as CategorySlug]?.description ?? category.description}
            </p>
            <span className="mt-2 inline-flex text-xs font-semibold uppercase text-slate-500">
              {region.categoryCta}
            </span>
          </Link>
        ))}
      </section>

      {richContent?.metrics?.length ? (
        <section className="space-y-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-xl font-semibold text-slate-900">{region.metricsTitle}</h2>
            <span className="text-xs uppercase tracking-wide text-slate-500">{richContent.metrics.length} KPIs</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {richContent.metrics.map((metric) => (
              <article key={metric.label} className="rounded-2xl border border-white/60 bg-white p-4 shadow-sm">
                <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-700">{metric.label}</p>
                <p className="text-xs text-slate-500">{metric.helper}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {richContent?.beaches?.length ? (
        <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{region.beachesTitle}</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {richContent.beaches.map((beach) => (
                <li key={beach.name} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-slate-900">{beach.name}</p>
                    <span className="text-xs font-semibold uppercase text-primary-500">{beach.type}</span>
                  </div>
                  <p className="text-xs text-slate-500">{beach.location}</p>
                  <p className="mt-2 text-slate-600">{beach.notes}</p>
                </li>
              ))}
            </ul>
          </div>
          {richContent.naturalAreas?.length ? (
            <div className="rounded-3xl border border-amber-100 bg-amber-50/60 p-6">
              <h2 className="text-xl font-semibold text-amber-900">{region.naturalAreasTitle}</h2>
              <ul className="mt-4 space-y-4 text-sm text-amber-900">
                {richContent.naturalAreas.map((area) => (
                  <li key={area.name} className="rounded-2xl border border-amber-200/80 bg-white/70 p-4">
                    <p className="font-semibold">{area.name}</p>
                    <p className="text-xs uppercase tracking-wide text-amber-700">{area.restriction}</p>
                    <p className="mt-2 text-amber-900/90">{area.details}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}

      {richContent?.services?.length ? (
        <section className="space-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">{region.servicesTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {richContent.services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-500">{service.title}</p>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden className="text-primary-500">
                        ●
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {richContent?.experiences?.length ? (
        <section className="rounded-3xl border border-slate-100 bg-slate-900 p-6 text-slate-100">
          <h2 className="text-xl font-semibold">{region.experiencesTitle}</h2>
          <ul className="mt-4 space-y-4">
            {richContent.experiences.map((experience) => (
              <li key={experience.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-wide text-primary-200">{experience.location}</p>
                <p className="text-lg font-semibold text-white">{experience.title}</p>
                <p className="text-sm text-slate-200">{experience.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {richContent?.legal ? (
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
          <h2 className="text-xl font-semibold text-emerald-900">{region.legalTitle}</h2>
          <p className="mt-2 text-sm text-emerald-800">{richContent.legal.summary}</p>
          <ul className="mt-4 space-y-2 text-sm text-emerald-900">
            {richContent.legal.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span aria-hidden>✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
}
