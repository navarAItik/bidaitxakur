import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { Place } from '../types/place';

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <article className="bg-white rounded-xl p-4 border border-brand-dark/5 shadow-sm space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {place.sponsored && <span className="px-2 py-0.5 text-xs rounded bg-amber-200">Patrocinado</span>}
            {place.featured && !place.sponsored && (
              <span className="px-2 py-0.5 text-xs rounded bg-emerald-100 text-brand-dark">Destacado</span>
            )}
            {place.verified && <span className="px-2 py-0.5 text-xs rounded bg-sky-100">Verificado</span>}
          </div>
          <h3 className="text-lg font-semibold leading-tight">
            <Link to={`/lugar/${place.id}`} className="hover:underline">
              {place.name}
            </Link>
          </h3>
          <p className="text-sm text-brand-dark/80">{place.town} · {place.category}</p>
        </div>
        <div className="text-right text-sm">
          {place.petPolicy.allowed ? (
            <span className="text-brand-green font-semibold">Pet-friendly</span>
          ) : (
            <span className="text-red-600">No admite perros</span>
          )}
          {place.petPolicy.notes && <p className="text-xs text-brand-dark/70">{place.petPolicy.notes}</p>}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-brand-dark/90">{place.description}</p>
      {place.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 text-xs">
          {place.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 rounded-full bg-brand-green/10 text-brand-dark">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <div className="space-y-1">
          {place.phone && <p className="text-brand-dark/80">Tel: {place.phone}</p>}
          {place.website && (
            <a href={place.website} target="_blank" rel="noreferrer" className="text-brand-green font-semibold">
              Web
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
            'px-4 py-2 rounded-md font-semibold text-sm',
            place.sponsored || place.featured
              ? 'bg-brand-green text-white shadow'
              : 'bg-brand-dark text-white',
          )}
        >
          Ver ficha
        </Link>
      </div>
    </article>
  );
}
