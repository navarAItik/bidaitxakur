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
    <article className="space-y-20">
      <section className="bg-white py-16" aria-labelledby="hero-title">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">{hero.badge}</p>
            <h1 id="hero-title" className="text-4xl font-bold text-neutral-900">{hero.title}</h1>
            <p className="text-lg text-neutral-600">{hero.description}</p>
            <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
              {hero.pills.map((pill) => (
                <span key={pill} className="rounded-full bg-neutral-100 px-4 py-2">
                  {pill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="#regiones" className="btn-primary">
                {hero.primaryCta}
              </Link>
              <Link href="/alta-negocio" className="btn-secondary">
                {hero.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-soft">
              <Image src={HERO_IMAGES[0]} alt="Perro golden retriever disfrutando en un parque verde" fill className="object-cover" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {HERO_IMAGES.slice(1).map((image, index) => (
                <div key={image} className="relative h-40 w-full overflow-hidden rounded-3xl shadow-soft">
                  <Image src={image} alt={`Hermoso paisaje montañoso del norte de España ${index + 1}`} fill className="object-cover" />
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

      <section id="categorias" className="bg-neutral-50 py-16" aria-labelledby="categories-title">
        <div className="container-page space-y-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wide text-primary-500">{categoriesSection.badge}</p>
            <h2 id="categories-title" className="text-3xl font-semibold text-neutral-900">{categoriesSection.title}</h2>
            <p className="text-neutral-600">{categoriesSection.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.slug} slug={category.slug} />
            ))}
          </div>
        </div>
      </section>

      <section id="regiones" className="bg-white py-16" aria-labelledby="regions-title">
        <div className="container-page space-y-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wide text-primary-500">{regionsSection.badge}</p>
            <h2 id="regions-title" className="text-3xl font-semibold text-neutral-900">{regionsSection.title}</h2>
            <p className="text-neutral-600">{regionsSection.description}</p>
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

      <section className="bg-neutral-50 py-16" aria-labelledby="gallery-title">
        <div className="container-page space-y-8">
          <div className="text-center">
            <h2 id="gallery-title" className="text-3xl font-semibold text-neutral-900">Nuestra Galería</h2>
            <p className="text-neutral-600">Descubre momentos especiales con nuestros amigos peludos</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-2xl shadow-soft transition-transform duration-300 hover:scale-105">
              <picture>
                <source srcSet="/images/foto1.webp" type="image/webp" />
                <Image
                  src="/images/foto1.jpg"
                  alt="Perro jugando en el parque con su dueño"
                  width={300}
                  height={200}
                  className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-soft transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/foto2.png"
                alt="Paseo en la montaña con perros"
                width={300}
                height={200}
                className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                loading="lazy"
              />
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-soft transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/foto3.jpg"
                alt="Sesión de fotos con cachorros"
                width={300}
                height={200}
                className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                loading="lazy"
              />
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-soft transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/foto4.png"
                alt="Perros en un evento comunitario"
                width={300}
                height={200}
                className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
