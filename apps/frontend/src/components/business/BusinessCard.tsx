import Image from 'next/image';
import Link from 'next/link';
import type { Business } from '@/types/business';

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const mainImage = business.images?.[0] ?? 'https://images.unsplash.com/photo-1508672019048-805c876b67e2';

  return (
    <Link href={`/${business.region}/${business.category}/${business.slug}`} className="group block">
      <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 group-hover:shadow-lg">
        <div className="relative h-48 w-full">
          <Image src={mainImage} alt={business.name} fill className="object-cover" />
          {business.petPolicy.fenced && (
            <span className="absolute left-3 top-3 rounded-full bg-primary-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              Vallado verificado
            </span>
          )}
        </div>
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">{business.category}</p>
            {business.verified && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary-100 px-2 py-1 text-xs font-semibold text-primary-800">
                ✔ Verificado
              </span>
            )}
          </div>
          <h3 className="font-semibold text-neutral-800">{business.name}</h3>
          <p className="text-sm text-neutral-600 line-clamp-2">{business.description}</p>
          <div className="flex flex-wrap gap-1.5 pt-1 text-xs text-neutral-600">
            {business.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
