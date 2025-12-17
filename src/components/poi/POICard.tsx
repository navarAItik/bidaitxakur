'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { POI } from '@/types/poi';

interface POICardProps {
  poi: POI;
}

export default function POICard({ poi }: POICardProps) {
  const { name, slug, description, location, petRules, images, verified, featured, stats, region, category } = poi;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      {featured && (
        <div className="absolute left-3 top-3 z-10 rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
          Destacado
        </div>
      )}
      {verified && (
        <div className="absolute right-3 top-3 z-10 rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
          Verificado
        </div>
      )}

      <div className="aspect-[4/3] overflow-hidden">
        {images?.[0] ? (
          <Image
            src={images[0]}
            alt={name}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-slate-100 text-slate-400">
            Sin imagen
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-semibold text-slate-900">
            <Link href={`/${region}/${category}/${slug}`} className="hover:text-orange-600">
              {name}
            </Link>
          </h3>
          {stats && (
            <div className="flex items-center gap-1 text-sm text-slate-600">
              <span>⭐ {stats.rating}</span>
              <span>({stats.reviews})</span>
            </div>
          )}
        </div>

        <p className="mb-3 text-sm text-slate-600 line-clamp-2">{description}</p>

        <div className="mb-3 flex items-center gap-2 text-xs text-slate-500">
          <span>📍 {location.town || 'Ubicación'}</span>
          {petRules.allowed && <span className="text-green-600">🐕 Pet-friendly</span>}
        </div>

        {petRules.notes && (
          <p className="text-xs text-slate-500 line-clamp-1">{petRules.notes}</p>
        )}
      </div>
    </div>
  );
}