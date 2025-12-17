'use client';

import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/components/search/SearchBar';
import TrustBadges from '@/components/sections/TrustBadges';
import StatsSection from '@/components/sections/StatsSection';
import DogsShowcaseSection from '@/components/sections/DogsShowcaseSection';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import FAQSection from '@/components/sections/FAQSection';
import RegionCard from '@/components/sections/RegionCard';
import CategoryCard from '@/components/sections/CategoryCard';
import JourneySection from '@/components/sections/JourneySection';
import MarketplaceHighlights from '@/components/sections/MarketplaceHighlights';
import TransportMatrixSection from '@/components/sections/TransportMatrixSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import InsightsSection from '@/components/sections/InsightsSection';
import { REGION_DATA, CATEGORIES, HERO_IMAGES } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomePage() {
  const regions = REGION_DATA.filter((region) => region.slug !== 'norte');
  const {
    translations: {
      home: { hero, categoriesSection, regionsSection },
    },
  } = useLanguage();

  return (
    <div className="space-y-20">
      <section className="bg-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">{hero.badge}</p>
            <h1 className="text-4xl font-bold text-slate-900">{hero.title}</h1>
            <p className="text-lg text-slate-600">{hero.description}</p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              {hero.pills.map((pill) => (
                <span key={pill} className="rounded-full bg-slate-100 px-4 py-2">
                  {pill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="#regiones" className="rounded-full bg-primary-600 px-5 py-3 text-white shadow-lg">
                {hero.primaryCta}
              </Link>
              <Link href="/alta-negocio" className="rounded-full bg-white px-5 py-3 text-slate-800 shadow">
                {hero.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative h-64 w-full overflow-hidden rounded-3xl">
              <Image src={HERO_IMAGES[0]} alt="Perro disfrutando" fill className="object-cover" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {HERO_IMAGES.slice(1).map((image) => (
                <div key={image} className="relative h-40 w-full overflow-hidden rounded-3xl">
                  <Image src={image} alt="Paisaje del norte" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container-page -mt-8">
          <SearchBar />
        </div>
      </section>

      <TrustBadges />
      <StatsSection />
      <JourneySection />
      <InsightsSection />

      <section id="categorias" className="bg-gray-50 py-16">
        <div className="container-page space-y-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wide text-primary-500">{categoriesSection.badge}</p>
            <h2 className="text-3xl font-semibold text-slate-900">{categoriesSection.title}</h2>
            <p className="text-slate-600">{categoriesSection.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.slug} slug={category.slug} />
            ))}
          </div>
        </div>
      </section>

      <section id="regiones" className="bg-white py-16">
        <div className="container-page space-y-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wide text-primary-500">{regionsSection.badge}</p>
            <h2 className="text-3xl font-semibold text-slate-900">{regionsSection.title}</h2>
            <p className="text-slate-600">{regionsSection.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <RegionCard key={region.slug} slug={region.slug} />
            ))}
          </div>
        </div>
      </section>

      <MarketplaceHighlights />
      <TransportMatrixSection />
      <DogsShowcaseSection />
      <TestimonialCarousel />
      <CallToActionSection />
      <FAQSection />
    </div>
  );
}
