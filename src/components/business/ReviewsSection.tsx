'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import type { Business } from '@/types/business';

interface ReviewsSectionProps {
  business: Business;
}

export default function ReviewsSection({ business }: ReviewsSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const { data: session } = useSession();

  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-primary-500">Reseñas</p>
          <h2 className="text-2xl font-semibold">
            {business.stats?.rating ?? '5.0'} · {business.stats?.reviews ?? 0} opiniones verificados
          </h2>
        </div>
        {session ? (
          <button className="text-sm font-semibold text-primary-600">Escribir reseña</button>
        ) : (
          <Link href="/auth/signin" className="text-sm font-semibold text-primary-600">
            Inicia sesión para escribir una reseña
          </Link>
        )}
      </div>
      <div className="mt-6 space-y-4 text-sm text-slate-600">
        <p>
          «Experiencia perfecta, jardín de 2.000m² totalmente vallado. Los dueños conocen la normativa y nos
          recomendaron rutas cercanas con ríos.»
        </p>
        {expanded && (
          <p>
            «Volveremos seguro. Veterinario 24h a 10 minutos y restaurante dog friendly que descubrimos gracias a la
            guía Huellas del Norte.»
          </p>
        )}
        <button onClick={() => setExpanded((prev) => !prev)} className="text-sm font-semibold text-primary-600">
          {expanded ? 'Ver menos' : 'Leer más'} opiniones
        </button>
      </div>
    </section>
  );
}
