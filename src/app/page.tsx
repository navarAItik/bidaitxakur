'use client';

import { useState, useEffect } from 'react';
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
import TravelerStoriesSection from '@/components/sections/TravelerStoriesSection';
import { REGION_DATA, CATEGORIES, HERO_IMAGES } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomePage() {
   const regions = REGION_DATA.filter((region) => region.slug !== 'norte');
   const {
     translations: {
       home: { hero, categoriesSection, regionsSection },
     },
   } = useLanguage();

   const dogQuotes = [
     {
       image: '/images/dog1.jpg',
       quote: 'El perro es un caballero; espero ir a su cielo, no al del hombre.',
       author: 'Mark Twain',
     },
     {
       image: '/images/download.jpeg',
       quote: 'Los perros no son toda nuestra vida, pero hacen que nuestras vidas sean completas.',
       author: 'Roger Caras',
     },
     {
       image: '/images/Galgo_hembra_en_Nacedero_del_Urederra_(Baquedano,_Navarra).jpg',
       quote: 'Un perro es la única cosa en la tierra que te ama más de lo que se ama a sí mismo.',
       author: 'Josh Billings',
     },
     {
       image: '/images/alvan-nee-FHl79chXS6s-unsplash.jpg',
       quote: 'Los perros nos enseñan a amar incondicionalmente.',
       author: 'Anónimo',
     },
     {
       image: '/images/camilo-fierro-z7rcwqCi77s-unsplash.jpg',
       quote: 'La lealtad de un perro es inquebrantable.',
       author: 'Anónimo',
     },
     {
       image: '/images/daniel-hering-0_ole_Z2pV8-unsplash.jpg',
       quote: 'Ningún hombre puede ser feliz sin un amigo, y ningún perro puede serlo sin un amo.',
       author: 'Anónimo',
     },
     {
       image: '/images/emerson-peters-oBCT3obZ6OY-unsplash.jpg',
       quote: 'El amor de un perro es incondicional.',
       author: 'Anónimo',
     },
     {
       image: '/images/jamie-street-uNNCs5kL70Q-unsplash.jpg',
       quote: 'Los perros son los líderes del reino de los afectos.',
       author: 'Henry Ward Beecher',
     },
   ];

   const [quoteIndex, setQuoteIndex] = useState(0);

   useEffect(() => {
     const interval = setInterval(() => {
       setQuoteIndex((prev) => (prev + 1) % dogQuotes.length);
     }, 2500);
     return () => clearInterval(interval);
   }, [dogQuotes.length]);

   const nextQuote = () => setQuoteIndex((prev) => (prev + 1) % dogQuotes.length);
   const prevQuote = () => setQuoteIndex((prev) => (prev - 1 + dogQuotes.length) % dogQuotes.length);

   const currentQuote = dogQuotes[quoteIndex];

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
      <TravelerStoriesSection />
      <CallToActionSection />
      <FAQSection />

      <section className="bg-neutral-50 py-16" aria-labelledby="quotes-title">
         <div className="container-page space-y-8">
           <div className="text-center">
             <h2 id="quotes-title" className="text-3xl font-semibold text-neutral-900">Frases célebres sobre perros</h2>
             <p className="text-neutral-600">Descubre citas inspiradoras de personajes famosos sobre nuestros leales compañeros</p>
           </div>
           <div className="mx-auto max-w-4xl">
             <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
               <div className="relative h-80 w-full overflow-hidden rounded-2xl">
                 <Image
                   src={currentQuote.image}
                   alt={`Ilustración para la cita de ${currentQuote.author}`}
                   fill
                   className="object-cover"
                 />
               </div>
               <p className="mt-6 text-center text-xl font-semibold text-slate-900">"{currentQuote.quote}"</p>
               <p className="mt-4 text-center text-sm text-slate-600">- {currentQuote.author}</p>
               <div className="mt-6 flex justify-center gap-3">
                 <button onClick={prevQuote} className="rounded-full border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50">
                   Anterior
                 </button>
                 <button onClick={nextQuote} className="rounded-full border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50">
                   Siguiente
                 </button>
               </div>
             </div>
           </div>
         </div>
       </section>
    </article>
  );
}
