import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { Place } from '../types/place';

interface PlaceCardProps {
  place: Place;
  onHover?: (place: Place) => void;
  onLeave?: () => void;
}

export default function PlaceCard({ place, onHover, onLeave }: PlaceCardProps) {
  const gradient = place.sponsored
    ? 'from-amber-100/80 via-white to-white'
    : place.featured
      ? 'from-brand-sky/70 via-white to-brand-cream/60'
      : 'from-white via-brand-sand/60 to-white';

  return (
    <article
      className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft card-glow transition hover:-translate-y-0.5"
      onMouseEnter={() => onHover?.(place)}
      onMouseLeave={() => onLeave?.()}
    >
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${gradient}`} />
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-semibold">
              {place.sponsored && <span className="px-3 py-0.5 rounded-full bg-amber-200/90 text-amber-900">Patrocinado</span>}
              {place.featured && !place.sponsored && (
                <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-brand-dark">Destacado</span>
              )}
              {place.verified && <span className="px-3 py-0.5 rounded-full bg-sky-100 text-brand-dark">Verificado</span>}
            </div>
            <h3 className="text-xl font-display font-semibold leading-tight">
              <Link to={`/lugar/${place.id}`} className="hover:underline decoration-brand-green/60">
                {place.name}
              </Link>
            </h3>
            <p className="text-sm text-brand-dark/70 capitalize">
              {place.town} · {place.category.replace(/-/g, ' ')}
            </p>
          </div>
          <div className="text-right text-sm">
            {place.petPolicy.allowed ? (
              <span className="inline-flex items-center gap-1 text-brand-green font-semibold">
                <span aria-hidden>🐾</span> Pet-friendly
              </span>
            ) : (
              <span className="text-red-600 font-semibold">No admite perros</span>
            )}
            {place.petPolicy.notes && <p className="text-xs text-brand-dark/70 mt-0.5">{place.petPolicy.notes}</p>}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-brand-dark/90">{place.description}</p>
        {place.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs">
            {place.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/70 border border-brand-dark/10 text-brand-dark/80">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="space-y-1 text-brand-dark/80">
            {place.phone && <p>Tel: {place.phone}</p>}
            {place.website && (
              <a href={place.website} target="_blank" rel="noreferrer" className="text-brand-green font-semibold underline-offset-2 hover:underline">
                Visitar web
              </a>
            )}
            {place.affiliate && (
              <p className="text-xs text-amber-800 max-w-xs">
                Afiliado: <a className="underline" href={place.affiliate.url}>{place.affiliate.provider}</a>.{' '}
                {place.affiliate.disclaimer}
              </p>
            )}
          </div>
          <Link
            to={`/lugar/${place.id}`}
            className={clsx(
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition shadow',
              place.sponsored || place.featured
                ? 'bg-brand-green text-white'
                : 'bg-brand-dark text-white',
            )}
          >
            Ver ficha
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
