import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import FiltersBar from '../components/FiltersBar';
import LeafletMap from '../components/LeafletMap';
import PlaceCard from '../components/PlaceCard';
import { useLanguage } from '../i18n/LanguageProvider';
import type { TranslationKey } from '../i18n/translations';
import { placesService } from '../services/placesService';
import { CategorySlug, Place } from '../types/place';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: CategorySlug }>();
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [town, setTown] = useState('');
  const [verified, setVerified] = useState(false);
  const [fencedGarden, setFencedGarden] = useState(false);
  const [waterNearby, setWaterNearby] = useState(false);

  const categoryLabel = slug ? t(`categories.${slug}` as TranslationKey) : t('category.hero.tagline');

  const results = useMemo<Place[]>(() => {
    return placesService.list({ search, town, category: slug, verified, fencedGarden, waterNearby });
  }, [search, town, slug, verified, fencedGarden, waterNearby]);

  const handleAdvancedReset = () => {
    setVerified(false);
    setFencedGarden(false);
    setWaterNearby(false);
  };

  return (
    <div className="page-shell py-10 space-y-6">
      <Helmet>
        <title>{categoryLabel} | Patas Navarricas</title>
        <meta name="description" content={t('home.hero.description')} />
      </Helmet>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-brand-dark/70">{t('category.hero.tagline')}</p>
          <h1 className="text-3xl font-bold">{categoryLabel}</h1>
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('category.searchPlaceholder')}
          className="rounded-md border border-brand-dark/10 px-3 py-2 focus:outline-brand-green"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={town}
          onChange={(e) => setTown(e.target.value)}
          placeholder={t('category.townPlaceholder')}
          className="rounded-md border border-brand-dark/10 px-3 py-2 focus:outline-brand-green"
        />
        <FiltersBar
          verified={verified}
          fencedGarden={fencedGarden}
          waterNearby={waterNearby}
          onChange={(values) => {
            if (values.verified !== undefined) setVerified(values.verified);
            if (values.fencedGarden !== undefined) setFencedGarden(values.fencedGarden);
            if (values.waterNearby !== undefined) setWaterNearby(values.waterNearby);
          }}
          onReset={handleAdvancedReset}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {results.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
          {results.length === 0 && <p>{t('category.empty')}</p>}
        </div>
        <aside className="space-y-3">
          <div className="bg-white p-3 rounded-xl border border-brand-dark/5 shadow-sm">
            <h3 className="font-semibold mb-2">{t('place.map.title')}</h3>
            {results[0] ? (
              <LeafletMap place={results[0]} />
            ) : (
              <p className="text-sm text-brand-dark/70">{t('category.mapEmpty')}</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
