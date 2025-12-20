'use client';

import Image from 'next/image';
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
  const primaryCategory = CATEGORIES[0];
  const galleryImages = [
    {
      src: '/images/alvan-nee-FHl79chXS6s-unsplash.jpg',
      alt: `Momento de juego en la arena de ${regionName}`,
      width: 640,
      height: 480,
      label: 'Rutas costeras',
      location: 'Costa Cantábrica',
    },
    {
      src: '/images/anna-dudkova-urs_y9NwFcc-unsplash.jpg',
      alt: `Descanso entre bosques en ${regionName}`,
      width: 640,
      height: 480,
      label: 'Bosques frescos',
      location: 'Valle de Baztan',
    },
    {
      src: '/images/daniel-hering-0_ole_Z2pV8-unsplash.jpg',
      alt: `Excursión acuática en ${regionName}`,
      width: 640,
      height: 480,
      label: 'Pozas y cascadas',
      location: 'Río Urederra',
    },
    {
      src: '/images/jacob-van-blarcom-lkzjENdWgd8-unsplash.jpg',
      alt: `Atardecer urbano pet-friendly en ${regionName}`,
      width: 640,
      height: 480,
      label: 'Plan tardeo',
      location: 'Donostia',
    },
  ];
  const hasBeaches = Boolean(richContent?.beaches?.length);
  const hasNaturalAreas = Boolean(richContent?.naturalAreas?.length);
  const hasCoastContent = hasBeaches || hasNaturalAreas;

  return (
    <>
      <header className="region-hero" aria-labelledby="region-hero-title">
        <p className="region-hero__eyebrow">
          {region.badgePrefix} {regionName}
        </p>
        <h1 id="region-hero-title" className="region-hero__title">
          {region.heroTitlePrefix}{' '}
          <span className="region-hero__titleHighlight">{regionName}</span>
        </h1>
        <p className="region-hero__lead">{descriptionCopy}</p>
        <div className="region-hero__chips" role="list">
          {region.features.map((feature) => (
            <span key={feature} className="region-hero__chip" role="listitem">
              {feature}
            </span>
          ))}
        </div>
        <div className="region-hero__cta">
          <Link
            href={`/${regionSlug}/${primaryCategory.slug}`}
            className="btn-primary region-hero__ctaButton"
            aria-label={`Explorar ${primaryCategory.label} en ${regionName}`}
          >
            Planear visita
          </Link>
          <Link href="/alta-negocio" className="btn-secondary region-hero__ctaButton">
            Añadir mi negocio
          </Link>
        </div>
      </header>

      <section className="region-section region-grid" aria-labelledby="region-categories-title">
        <div className="region-grid__header">
          <div>
            <p className="region-eyebrow">{categoriesSection.title}</p>
            <h2 id="region-categories-title" className="region-section__title">
              Servicios esenciales en {regionName}
            </h2>
            <p className="region-section__lead">
              Descubre experiencias curadas para moverte por la región con tu perro con toda la información práctica
              desde el primer clic.
            </p>
          </div>
          <Link href="/mapa" className="region-link">
            Ver mapa interactivo
          </Link>
        </div>
        <div className="region-grid__cards">
          {CATEGORIES.map((category) => (
            <article key={category.slug} className="region-grid__card">
              <Link
                href={`/${regionSlug}/${category.slug}`}
                className="region-grid__cardLink"
                aria-labelledby={`${category.slug}-title`}
              >
                <p className="region-eyebrow">
                  {categoriesSection.cards[category.slug as CategorySlug]?.label ?? category.label}
                </p>
                <h3 id={`${category.slug}-title`} className="region-grid__cardTitle">
                  {category.label}
                </h3>
                <p className="region-grid__cardCopy">
                  {categoriesSection.cards[category.slug as CategorySlug]?.description ?? category.description}
                </p>
                <span className="region-grid__cardCta">{region.categoryCta}</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {richContent?.metrics?.length ? (
        <section className="region-section region-panel" aria-labelledby="region-metrics-title">
          <div className="region-panel__header">
            <div>
              <p className="region-eyebrow">Indicadores clave</p>
              <h2 id="region-metrics-title" className="region-section__title">
                {region.metricsTitle}
              </h2>
              <p className="region-section__lead">
                Datos auditados que avalan la calidad, ocupación y satisfacción de las familias perrunas en destino.
              </p>
            </div>
            <span className="region-pill" aria-live="polite">
              {richContent.metrics.length} KPIs
            </span>
          </div>
          <div className="region-metrics">
            {richContent.metrics.map((metric) => (
              <article key={metric.label} className="region-metric" aria-label={metric.label}>
                <p className="region-metric__value">{metric.value}</p>
                <p className="region-metric__label">{metric.label}</p>
                <p className="region-metric__helper">{metric.helper}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {hasCoastContent ? (
        <section className="region-section region-duo" aria-labelledby="region-beaches-title">
          {hasBeaches ? (
            <article className="region-duo__primary">
              <div className="region-section__header">
                <p className="region-eyebrow">Playas dog friendly</p>
                <h2 id="region-beaches-title" className="region-section__title">
                  {region.beachesTitle}
                </h2>
                <p className="region-section__lead">Zonas con vigilancia, duchas y buenas rutas de acceso.</p>
              </div>
              <ul className="region-list">
                {richContent?.beaches?.map((beach) => (
                  <li key={beach.name} className="region-list__item">
                    <div>
                      <p className="region-list__title">{beach.name}</p>
                      <p className="region-list__meta">{beach.location}</p>
                    </div>
                    <span className="region-pill region-pill--accent">{beach.type}</span>
                    <p className="region-list__copy">{beach.notes}</p>
                  </li>
                ))}
              </ul>
            </article>
          ) : null}
          {hasNaturalAreas ? (
            <aside className="region-duo__secondary" aria-labelledby="region-natural-title">
              <div className="region-section__header">
                <p className="region-eyebrow">Reservas naturales</p>
                <h2 id="region-natural-title" className="region-section__title">
                  {region.naturalAreasTitle}
                </h2>
              </div>
              <ul className="region-stack">
                {richContent?.naturalAreas?.map((area) => (
                  <li key={area.name} className="region-stack__item">
                    <p className="region-stack__title">{area.name}</p>
                    <p className="region-stack__meta">{area.restriction}</p>
                    <p className="region-stack__copy">{area.details}</p>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </section>
      ) : null}

      {richContent?.services?.length ? (
        <section className="region-section" aria-labelledby="region-services-title">
          <div className="region-section__header">
            <p className="region-eyebrow">Servicios verificados</p>
            <h2 id="region-services-title" className="region-section__title">
              {region.servicesTitle}
            </h2>
            <p className="region-section__lead">
              Programas diseñados para equilibrar aventura, descanso y seguridad canina durante tu estancia.
            </p>
          </div>
          <div className="region-services">
            {richContent.services.map((service) => (
              <article key={service.title} className="region-services__card">
                <header>
                  <p className="region-eyebrow">{service.title}</p>
                  <p className="region-services__copy">{service.description}</p>
                </header>
                <ul className="region-services__bullets">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {richContent?.experiences?.length ? (
        <section className="region-section region-experiences" aria-labelledby="region-experiences-title">
          <p className="region-eyebrow">Testimonios locales</p>
          <h2 id="region-experiences-title" className="region-section__title region-experiences__title">
            {region.experiencesTitle}
          </h2>
          <ul className="region-experiences__list">
            {richContent.experiences.map((experience) => (
              <li key={experience.title} className="region-experiences__item">
                <p className="region-experiences__location">{experience.location}</p>
                <p className="region-experiences__heading">{experience.title}</p>
                <p className="region-experiences__copy">{experience.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {richContent?.legal ? (
        <section className="region-section region-legal" aria-labelledby="region-legal-title">
          <p className="region-eyebrow">Normativa vigente</p>
          <h2 id="region-legal-title" className="region-section__title">
            {region.legalTitle}
          </h2>
          <p className="region-section__lead">{richContent.legal.summary}</p>
          <ul className="region-legal__list">
            {richContent.legal.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="region-section region-gallery-section" aria-labelledby="region-gallery-title">
        <div className="region-section__header">
          <p className="region-eyebrow">Nuestros trabajos</p>
          <h2 id="region-gallery-title" className="region-section__title">
            Galería inspirada en {regionName}
          </h2>
          <p className="region-section__lead">
            Instantáneas reales de nuestras experiencias caninas por la región. Usa esta selección como moodboard para
            tu próxima ruta.
          </p>
        </div>
        <div className="region-gallery" role="list">
          {galleryImages.map((image) => (
            <figure key={image.src} className="region-gallery__item" role="listitem">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="region-gallery__image"
                loading="lazy"
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
              />
              <figcaption className="region-gallery__caption">
                <span>{image.label}</span>
                <span aria-hidden="true">•</span>
                <span>{image.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="region-gallery__note">Todas las imágenes priorizan lazy loading y reservan espacio para evitar CLS.</p>
      </section>
    </>
  );
}
