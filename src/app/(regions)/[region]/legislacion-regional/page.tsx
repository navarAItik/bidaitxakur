import { notFound } from 'next/navigation';
import { REGION_DATA } from '@/lib/constants';
import LegislationContent from '@/components/pages/LegislationContent';

interface Params {
  params: { region: string };
}

export default function RegionLegalPage({ params }: Params) {
  const region = REGION_DATA.find((item) => item.slug === params.region);
  if (!region || region.slug === 'norte') {
    notFound();
  }

  return <LegislationContent regionName={region.name} />;
}
