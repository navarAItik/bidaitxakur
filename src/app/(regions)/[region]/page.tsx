import { notFound } from 'next/navigation';
import { REGION_DATA, type RegionSlug } from '@/lib/constants';
import { getRegionMetadata } from '@/lib/seo';
import StatsSection from '@/components/sections/StatsSection';
import RegionPageContent from '@/components/pages/RegionPageContent';

interface Params {
  params: { region: RegionSlug };
}

export function generateStaticParams() {
  return REGION_DATA.filter((region) => region.slug !== 'norte').map((region) => ({ region: region.slug }));
}

export function generateMetadata({ params }: Params) {
  return getRegionMetadata(params.region);
}

export default function RegionPage({ params }: Params) {
  const region = REGION_DATA.find((item) => item.slug === params.region);
  if (!region || region.slug === 'norte') {
    notFound();
  }

  return (
    <div className="bg-white py-12">
      <div className="container-page space-y-10">
        <RegionPageContent
          regionSlug={region.slug}
          regionName={region.name}
          regionDescription={region.description}
        />
      </div>
      <StatsSection />
    </div>
  );
}
