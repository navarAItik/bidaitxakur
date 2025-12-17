import { notFound } from 'next/navigation';
import Link from 'next/link';
import { REGION_DATA, CATEGORIES, type RegionSlug } from '@/lib/constants';
import { getRegionMetadata } from '@/lib/seo';
import StatsSection from '@/components/sections/StatsSection';

interface Params {
  params: { region: RegionSlug };
}

export function generateStaticParams() {
  return REGION_DATA.filter((region) => region.slug !== 'norte').map((region) => ({ region: region.slug }));
}

export function generateMetadata({ params }: Params) {
  return getRegionMetadata(params.region);
}

const featureList = ['Casas valladas', 'Transporte 360º', 'Veterinarios 24h', 'Marketplace de cuidadores'];

export default function RegionPage({ params }: Params) {
  const region = REGION_DATA.find((item) => item.slug === params.region);
  if (!region || region.slug === 'norte') {
    notFound();
  }

  return (
    <div className="bg-white py-12">
      <div className="container-page space-y-10">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary-500">Región {region.name}</p>
          <h1 className="text-4xl font-semibold text-slate-900">Guía pet friendly de {region.name}</h1>
          <p className="text-lg text-slate-600">{region.description}</p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            {featureList.map((feature) => (
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
              href={`/${region.slug}/${category.slug}`}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
            >
              <p className="text-xs uppercase text-primary-500">{category.label}</p>
              <p className="text-sm text-slate-600">{category.description}</p>
              <span className="mt-2 inline-flex text-xs font-semibold uppercase text-slate-500">Ver listado →</span>
            </Link>
          ))}
        </section>
      </div>
      <StatsSection />
    </div>
  );
}
