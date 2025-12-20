'use client';

import { useMemo, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import ServiceList from '@/components/map/ServiceList';
import MapContainer from '@/components/map/MapContainer';
import { PET_SERVICES } from '@/lib/petServices';
import { REGION_DATA } from '@/lib/constants';

const accessibilityHighlights = [
  'Integración prevista con módulos como LISIO para aumento de letra, contraste y traducción automática.',
  'Audio-guías y versión FALC de la normativa clave.',
  'Modo de bajo consumo de datos para conexiones limitadas.',
];

const maintenanceSteps = [
  'Revisión quincenal de normativa de playas y transporte por región.',
  'Canal de feedback en cada ficha para reportar errores o añadir fotos.',
  'Cumplimiento RGPD y recordatorio de responsabilidad del tutor.',
];

const steps = [
  {
    title: '1. Preparar datos en Google Sheets / CSV',
    description:
      'Consolida playas, alojamientos, veterinarios y experiencias en una hoja con columnas name, category, region, lat, lon, policy.',
  },
  {
    title: '2. Importar a Google My Maps',
    description:
      'Crea capas por tipología y activa filtros automáticos. Configura colores coherentes con la marca (ej. playas = azul).',
  },
  {
    title: '3. Embebe el mapa en esta página',
    description:
      'Sustituye el iframe de ejemplo con el enlace generado por My Maps y actualiza la hoja para propagar cambios.',
  },
];

const REGION_LABELS: Record<string, string> = {
  galicia: 'Galicia',
  asturias: 'Asturias',
  cantabria: 'Cantabria',
  euskadi: 'Euskadi',
  navarra: 'Navarra',
  iparralde: 'Iparralde',
};

const CATEGORY_LABELS: Record<string, string> = {
  playa: 'Playas',
  alojamiento: 'Alojamientos',
  veterinario: 'Veterinarios',
  transporte: 'Transporte',
  experiencia: 'Experiencias',
  servicio: 'Servicios',
};

export default function MapPage() {
  const [prefs, setPrefs] = useState({ highContrast: false, largeText: false, lowData: false });

  const regionSummary = useMemo(
    () =>
      Object.entries(REGION_LABELS).map(([key, label]) => ({
        label,
        value: PET_SERVICES.filter((service) => service.region === key).length,
      })),
    [],
  );

  const togglePref = (pref: 'highContrast' | 'largeText' | 'lowData') =>
    setPrefs((prev) => ({ ...prev, [pref]: !prev[pref] }));

  const pageClass = clsx(
    'min-h-screen bg-white text-slate-900',
    prefs.highContrast && 'bg-slate-900 text-white',
    prefs.largeText && 'text-lg',
  );

  const regionCards = REGION_DATA.filter((region) => region.slug !== 'norte').map((region) => ({
    slug: region.slug,
    name: region.name,
    description: region.description,
    count: PET_SERVICES.filter((service) => service.region === region.slug).length,
  }));

  const categorySummary = useMemo(
    () =>
      Object.entries(CATEGORY_LABELS).map(([key, label]) => ({
        label,
        value: PET_SERVICES.filter((service) => service.category === key).length,
      })),
    [],
  );

  return (
    <div className={pageClass}>
      <section className={clsx('border-b border-slate-200 bg-slate-50 py-16', prefs.highContrast && 'border-white/20 bg-slate-800')}>
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-primary-500">Mapa pet friendly</p>
            <h1 className="text-4xl font-semibold text-slate-900">Visor centralizado del norte</h1>
            <p className="text-lg text-slate-600">
              Este MVP embebe un mapa de Google My Maps mientras completamos la plataforma propia. Sigue los pasos
              para importar tus datos y actualizarlos semanalmente.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30"
              >
                Volver al inicio
              </Link>
              <Link
                href="/docs/map-roadmap"
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-primary-300 hover:text-primary-600"
              >
                Roadmap completo →
              </Link>
            </div>
          </div>
          <div
            className={clsx(
              'rounded-4xl border border-slate-200 bg-white p-6 shadow-card',
              prefs.highContrast && 'border-white/20 bg-slate-900 text-white',
            )}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Pasos recomendados</h2>
            <ol className="mt-4 space-y-4 text-slate-600">
              {steps.map((step) => (
                <li key={step.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-8">
        <div className="container-page flex flex-wrap gap-3">
          <AccessibilityButton
            label="Contraste alto"
            active={prefs.highContrast}
            onClick={() => togglePref('highContrast')}
          />
          <AccessibilityButton
            label="Texto grande"
            active={prefs.largeText}
            onClick={() => togglePref('largeText')}
          />
          <AccessibilityButton label="Modo bajo datos" active={prefs.lowData} onClick={() => togglePref('lowData')} />
        </div>
      </section>

      <section className="py-16">
        <div className="container-page space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary-500">Mapa interactivo</p>
              <h2 className="text-2xl font-semibold text-slate-900">Visor propio con Mapbox</h2>
              <p className="text-sm text-slate-600">
                Explora los puntos de interés pet-friendly en el norte de España con nuestro mapa interactivo.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-slate-900/5">
            {prefs.lowData ? (
              <div className="flex h-[70vh] items-center justify-center p-10 text-center text-sm text-slate-600">
                El modo bajo datos oculta el mapa para reducir el consumo. Desactívalo para cargar el mapa interactivo.
              </div>
            ) : (
              <MapContainer latitude={43.14284659869201} longitude={-9.076772516002857} />
            )}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="container-page space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary-500">Datos cargados</p>
              <h2 className="text-2xl font-semibold text-slate-900">Primer seed geolocalizado</h2>
              <p className="text-sm text-slate-600">
                Mientras integramos el visor, puedes explorar los puntos ya normalizados según región y categoría.
              </p>
            </div>
            <Link href="/docs/map-architecture" className="text-sm font-semibold text-primary-600 underline" target="_blank">
              Ver arquitectura ↗
            </Link>
          </div>
          <ServiceList />
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <p className="text-sm uppercase tracking-wide text-primary-500">Resumen por región</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {regionSummary.map((item) => (
                <li key={item.label} className="flex items-center justify-between">
                  <span>{item.label}</span>
                  <span className="font-semibold text-slate-900">{item.value}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <p className="text-sm uppercase tracking-wide text-primary-500">Resumen por categoría</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {categorySummary.map((item) => (
                <li key={item.label} className="flex items-center justify-between">
                  <span>{item.label}</span>
                  <span className="font-semibold text-slate-900">{item.value}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary-500">Recorrido región a región</p>
              <h2 className="text-2xl font-semibold text-slate-900">Cobertura del mapa por región</h2>
              <p className="text-sm text-slate-600">
                Explora cada región para ver filtros hiperlocales, normativa y servicios en preparación para el visor.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regionCards.map((region) => (
              <Link
                key={region.slug}
                href={`/${region.slug}`}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-slate-900">{region.name}</p>
                  <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-600">
                    {region.count} puntos
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{region.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
            <p className="text-sm uppercase tracking-wide text-primary-500">Accesibilidad</p>
            <h2 className="text-2xl font-semibold text-slate-900">Compromiso UX / FALC</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {accessibilityHighlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/docs/map-accessibility"
              className="mt-4 inline-flex text-sm font-semibold text-primary-600 underline"
              target="_blank"
            >
              Ver plan de accesibilidad
            </Link>
          </article>
          <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
            <p className="text-sm uppercase tracking-wide text-primary-500">Mantenimiento</p>
            <h2 className="text-2xl font-semibold text-slate-900">Proceso continuo</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {maintenanceSteps.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary-500">↺</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/docs/map-maintenance"
              className="mt-4 inline-flex text-sm font-semibold text-primary-600 underline"
              target="_blank"
            >
              Ver protocolo completo
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}

type AccessibilityButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function AccessibilityButton({ label, active, onClick }: AccessibilityButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={clsx(
        'rounded-full border px-4 py-2 text-sm font-semibold transition',
        active
          ? 'border-primary-500 bg-primary-600 text-white'
          : 'border-slate-200 bg-white text-slate-700 hover:border-primary-300 hover:text-primary-600',
      )}
    >
      {label}
    </button>
  );
}
