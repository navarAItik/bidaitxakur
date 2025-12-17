import { notFound } from 'next/navigation';
import { REGION_DATA, CATEGORIES, type RegionSlug, type CategorySlug } from '@/lib/constants';
import { getCategoryMetadata } from '@/lib/seo';
import type { Business } from '@/types/business';
import CategoryPageContent from '@/components/pages/CategoryPageContent';

interface Params {
  params: { region: RegionSlug; category: CategorySlug };
}

export function generateStaticParams() {
  const params = [] as { region: RegionSlug; category: CategorySlug }[];
  REGION_DATA.filter((region) => region.slug !== 'norte').forEach((region) => {
    CATEGORIES.forEach((category) => {
      params.push({ region: region.slug, category: category.slug });
    });
  });
  return params;
}

export function generateMetadata({ params }: Params) {
  return getCategoryMetadata(params.region, params.category);
}

const mockBusinesses: Business[] = [
  {
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
  },
];

export default function CategoryPage({ params }: Params) {
  const region = REGION_DATA.find((item) => item.slug === params.region);
  const category = CATEGORIES.find((item) => item.slug === params.category);

  if (!region || region.slug === 'norte' || !category) {
    notFound();
  }

  const businesses = mockBusinesses.filter(
    (business) => business.region === region.slug && business.category === category.slug
  );

  return (
    <div className="bg-slate-50 py-12">
      <div className="container-page space-y-8">
        <CategoryPageContent
          regionName={region.name}
          categoryKey={category.slug}
          categoryLabel={category.label}
          categoryDescription={category.description}
          businesses={businesses}
        />
      </div>
    </div>
  );
}
