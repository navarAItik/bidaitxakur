import Image from 'next/image';
import Link from 'next/link';
import { REGION_DATA } from '@/lib/constants';

interface RegionCardProps {
  slug: string;
}

export default function RegionCard({ slug }: RegionCardProps) {
  const region = REGION_DATA.find((item) => item.slug === slug);
  if (!region) return null;

  const fallbackImage = 'https://images.unsplash.com/photo-1500534623283-312aade485b7';
  const image = region.image.startsWith('/') ? region.image : fallbackImage;

  return (
    <Link
      href={`/${region.slug}`}
      className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative h-44 w-full">
        <Image src={image} alt={region.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <p className="text-sm font-semibold text-white">{region.name}</p>
          <p className="text-xs text-slate-200">{region.dogOwners.toLocaleString()} dueños de perros</p>
        </div>
      </div>
      <div className="space-y-3 p-4 text-sm text-slate-600">
        <p>{region.description}</p>
        <p className="text-xs font-semibold uppercase text-primary-500">Ver guía completa →</p>
      </div>
    </Link>
  );
}
