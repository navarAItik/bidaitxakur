import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import LeafletMap from '../components/LeafletMap';
import { useLanguage } from '../i18n/LanguageProvider';
import type { TranslationKey } from '../i18n/translations';
import { placesService } from '../services/placesService';

export default function PlacePage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const place = id ? placesService.getById(id) : undefined;

  if (!place) {
    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
        <p>
          {t('place.notFound')}{' '}
          <Link to="/directorio" className="text-brand-green font-semibold hover:underline">
            {t('place.backToDirectory')}
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="page-shell max-w-5xl py-10 space-y-6">
      <Helmet>
        <title>{place.name} | Patas Navarricas</title>
        <meta name="description" content={`${place.name} en ${place.town}. ${place.description}`} />
      </Helmet>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-brand-dark/70">
          {t(`categories.${place.category}` as TranslationKey)} · {place.town}
        </p>
        <h1 className="text-3xl font-bold">{place.name}</h1>
        <div className="flex flex-wrap gap-2 text-sm">
          {place.sponsored && (
            <span className="px-2 py-1 rounded bg-amber-200">{t('place.badges.sponsored')}</span>
          )}
          {place.featured && (
            <span className="px-2 py-1 rounded bg-emerald-100 text-brand-dark">{t('place.badges.featured')}</span>
          )}
          {place.verified && <span className="px-2 py-1 rounded bg-sky-100">{t('place.badges.verified')}</span>}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <p className="leading-relaxed text-brand-dark/90">{place.description}</p>
          <div className="space-y-2 text-sm">
            {place.address && (
              <p>
                <strong>{t('place.details.address')}:</strong> {place.address}
              </p>
            )}
            <p>
              <strong>{t('place.details.town')}:</strong> {place.town} ({place.province})
            </p>
            {place.phone && (
              <p>
                <strong>{t('place.details.phone')}:</strong> <a href={`tel:${place.phone}`}>{place.phone}</a>
              </p>
            )}
            {place.website && (
              <p>
                <strong>{t('place.details.website')}:</strong>{' '}
                <a className="text-brand-green font-semibold" href={place.website} target="_blank" rel="noreferrer">
                  {place.website}
                </a>
              </p>
            )}
            {place.hours && (
              <p>
                <strong>{t('place.details.hours')}:</strong> {place.hours}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <p>
              <strong>{t('place.policy.title')}:</strong>{' '}
              {place.petPolicy.allowed ? t('place.policy.allowed') : t('place.policy.notAllowed')}
            </p>
            {place.petPolicy.notes && <p className="text-brand-dark/80">{place.petPolicy.notes}</p>}
          </div>
          {place.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 text-xs">
              {place.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 rounded-full bg-brand-green/10 text-brand-dark">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {place.affiliate && (
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-sm">
              <p className="font-semibold">{t('place.affiliate.title')}</p>
              <p>
                <a className="underline" href={place.affiliate.url} target="_blank" rel="noreferrer">
                  {t('place.affiliate.link', { provider: place.affiliate.provider })}
                </a>{' '}
                · {place.affiliate.disclaimer}
              </p>
            </div>
          )}
        </div>
        <aside className="space-y-3">
          <div className="bg-white p-3 rounded-xl border border-brand-dark/5 shadow-sm">
            <h3 className="font-semibold mb-2">{t('place.map.title')}</h3>
            <LeafletMap place={place} />
          </div>
          <div className="bg-white p-3 rounded-xl border border-brand-dark/5 shadow-sm space-y-2 text-sm">
            <h3 className="font-semibold">{t('place.actions.title')}</h3>
            {place.phone && (
              <a className="block text-brand-green" href={`tel:${place.phone}`}>
                {t('place.actions.call')}
              </a>
            )}
            {place.website && (
              <a className="block text-brand-green" href={place.website} target="_blank" rel="noreferrer">
                {t('place.actions.visit')}
              </a>
            )}
            <Link className="block text-brand-dark underline" to="/sugerir">
              {t('place.actions.report')}
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
