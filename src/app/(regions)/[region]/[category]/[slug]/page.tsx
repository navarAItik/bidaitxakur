import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BusinessDetail from '@/components/business/BusinessDetail';
import MapContainer from '@/components/map/MapContainer';
import type { Business } from '@/types/business';
import { REGION_DATA, CATEGORIES } from '@/lib/constants';

interface Params {
  params: { region: string; category: string; slug: string };
}

const mockBusiness: Business = {
  id: '1',
  region: 'euskadi',
  category: 'alojamiento',
  name: 'Casa Vallada Urkiola',
  slug: 'casa-vallada-urkiola',
  description: 'Finca privada de 3.000m² con vallado certificado, admite hasta 3 perros sin suplemento.',
  location: { latitude: 43.079, longitude: -2.639, town: 'Abadiño' },
  tags: ['vallado', 'sin suplemento', 'bosque'],
  verified: true,
  featured: true,
  images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85'],
  petPolicy: { allowed: true, fenced: true, extraFee: '0€', maxDogs: 3 },
  stats: { rating: 4.9, reviews: 28, favorites: 320 },
};

export function generateMetadata({ params }: Params): Metadata {
  return {
    title: `${params.slug} en ${params.region} | Huellas del Norte`,
    description: 'Detalle de negocio pet friendly',
  };
}

export default function BusinessPage({ params }: Params) {
  const isValidRegion = REGION_DATA.some((region) => region.slug === params.region);
  const isValidCategory = CATEGORIES.some((cat) => cat.slug === params.category);

  if (!isValidRegion || !isValidCategory || params.slug !== mockBusiness.slug) {
    notFound();
  }

  return (
    <div className="bg-slate-50 py-12">
      <div className="container-page space-y-8">
        <BusinessDetail business={mockBusiness} />
        <MapContainer latitude={mockBusiness.location.latitude} longitude={mockBusiness.location.longitude} />
      </div>
    </div>
  );
}
