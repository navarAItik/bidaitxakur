import Image from 'next/image';
import Link from 'next/link';
import type { Business } from '@/types/business';

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const mainImage = business.images?.[0] ?? 'https://images.unsplash.com/photo-1508672019048-805c876b67e2';

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-card">
      <div className="relative h-48 w-full">
        <Image src={mainImage} alt={business.name} fill className="object-cover" />
        {business.petPolicy.fenced && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700">
            Vallado verificado
          </span>
        )}
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-wide text-primary-500">{business.category}</p>
          {business.verified && <span className="text-xs font-semibold text-emerald-600">Verificado</span>}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{business.name}</h3>
        <p className="text-sm text-slate-600 line-clamp-2">{business.description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-slate-500">
          {business.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/${business.region}/${business.category}/${business.slug}`} className="text-sm font-semibold text-primary-600">
          Ver detalles →
        </Link>
      </div>
    </article>
  );
}
