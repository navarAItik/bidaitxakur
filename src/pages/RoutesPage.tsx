import { Helmet } from 'react-helmet-async';
import LeafletMap from '../components/LeafletMap';
import PlaceCard from '../components/PlaceCard';
import { useLanguage } from '../i18n/LanguageProvider';
import { placesService } from '../services/placesService';
import { Place } from '../types/place';

export default function RoutesPage() {
  const { t } = useLanguage();
  const routes = placesService.list({ category: 'rutas' });
  const waterSpots = placesService.list({ category: 'rios' });
  const combined: Place[] = [...routes, ...waterSpots];

  return (
    <div className="page-shell py-10 space-y-6">
      <Helmet>
        <title>{t('routes.title')} | Patas Navarricas</title>
        <meta name="description" content={t('home.hero.description')} />
      </Helmet>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-brand-dark/70">{t('routes.tagline')}</p>
          <h1 className="text-3xl font-bold">{t('routes.title')}</h1>
        </div>
        <p className="text-sm text-brand-dark/70">
          {combined.length} {t('routes.countLabel')}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {combined.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
        <aside className="space-y-3">
          <div className="bg-white p-3 rounded-xl border border-brand-dark/5 shadow-sm">
            <h3 className="font-semibold mb-2">{t('place.map.title')}</h3>
            {combined[0] ? <LeafletMap place={combined[0]} /> : <p>{t('routes.mapEmpty')}</p>}
          </div>
        </aside>
      </div>
    </div>
  );
}
