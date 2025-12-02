import { Helmet } from 'react-helmet-async';
import LeafletMap from '../components/LeafletMap';
import PlaceCard from '../components/PlaceCard';
import { useLanguage } from '../i18n/LanguageProvider';
import { placesService } from '../services/placesService';

export default function PlansPage() {
  const { t } = useLanguage();
  const plans = placesService.list({ category: 'planes' });

  return (
    <div className="page-shell py-10 space-y-6">
      <Helmet>
        <title>{t('plans.title')} | Patas Navarricas</title>
        <meta name="description" content={t('home.hero.description')} />
      </Helmet>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-brand-dark/70">{t('plans.tagline')}</p>
          <h1 className="text-3xl font-bold">{t('plans.title')}</h1>
        </div>
        <p className="text-sm text-brand-dark/70">
          {plans.length} {t('plans.countLabel')}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {plans.map((plan) => (
            <PlaceCard key={plan.id} place={plan} />
          ))}
        </div>
        <aside className="space-y-3">
          <div className="bg-white p-3 rounded-xl border border-brand-dark/5 shadow-sm">
            <h3 className="font-semibold mb-2">{t('place.map.title')}</h3>
            {plans[0] ? <LeafletMap place={plans[0]} /> : <p>{t('plans.mapEmpty')}</p>}
          </div>
        </aside>
      </div>
    </div>
  );
}
