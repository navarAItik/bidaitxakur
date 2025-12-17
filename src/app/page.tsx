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
import { REGION_DATA, CATEGORIES, HERO_IMAGES } from '@/lib/constants';

export default function HomePage() {
  const regions = REGION_DATA.filter((region) => region.slug !== 'norte');

  return (
    <div className="space-y-20">
      <section className="bg-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              GPS con aviso de seguridad
            </p>
            <h1 className="text-4xl font-bold text-slate-900">
              Viaja con tu perro por el norte con datos verificados, rutas y transporte claro
            </h1>
            <p className="text-lg text-slate-600">
              Alojamientos con terreno vallado certificado, normativa legal por provincia, transporte completo (vuelos,
              bus, tren, cercanías, coche) y marketplace de servicios pet friendly.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-slate-100 px-4 py-2">Casas valladas</span>
              <span className="rounded-full bg-slate-100 px-4 py-2">Transporte 360º</span>
              <span className="rounded-full bg-slate-100 px-4 py-2">Legal seguro</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="#regiones" className="rounded-full bg-primary-600 px-5 py-3 text-white shadow-lg">
                Explorar regiones
              </Link>
              <Link href="/alta-negocio" className="rounded-full bg-white px-5 py-3 text-slate-800 shadow">
                Dar de alta mi negocio
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

      <section id="categorias" className="bg-gray-50 py-16">
        <div className="container-page space-y-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wide text-primary-500">Cobertura completa</p>
            <h2 className="text-3xl font-semibold text-slate-900">8 categorías replicadas en cada región</h2>
            <p className="text-slate-600">Año 1 centrado en alojamientos vallados, transporte y servicios críticos.</p>
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
            <p className="text-sm uppercase tracking-wide text-primary-500">7 regiones norte</p>
            <h2 className="text-3xl font-semibold text-slate-900">Especialización geográfica</h2>
            <p className="text-slate-600">
              Cada subdominio tendrá datos hiperlocales, filtros legales y marketplace propio.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <RegionCard key={region.slug} slug={region.slug} />
            ))}
          </div>
        </div>
      </section>

      <DogsShowcaseSection />
      <TestimonialCarousel />
      <FAQSection />
    </div>
  );
}
