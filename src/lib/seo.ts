import type { Metadata } from 'next';
import type { RegionSlug, CategorySlug } from '@/lib/constants';

const BASE_URL = 'https://huellasdelnorte.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Huellas del Norte | Viajar con perro por el norte de España',
  description:
    'Guía pet-friendly del norte de España. Alojamientos vallados, rutas con agua, veterinarios 24h y restaurantes dog friendly verificados.',
  openGraph: {
    title: 'Huellas del Norte',
    description:
      'Directorio pet-friendly con mapas, filtros avanzados y verificación legal por región.',
    url: BASE_URL,
    siteName: 'Huellas del Norte',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@huellasdelnorte',
  },
};

export const getRegionMetadata = (region: RegionSlug): Metadata => ({
  title: `Guía pet-friendly ${region} | Huellas del Norte`,
  description: `Explora alojamientos vallados, rutas, veterinarios 24h y restaurantes dog friendly en ${region}.`,
  alternates: {
    canonical: `${BASE_URL}/${region}`,
  },
});

export const getCategoryMetadata = (region: RegionSlug, category: CategorySlug): Metadata => ({
  title: `${category} en ${region} | Huellas del Norte`,
  description: `Listado de ${category} pet friendly en ${region} con filtros avanzados y mapa interactivo.`,
  alternates: {
    canonical: `${BASE_URL}/${region}/${category}`,
  },
});
