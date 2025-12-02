import { CategorySlug } from '../types/place';
import { useLanguage } from '../i18n/LanguageProvider';
import type { TranslationKey } from '../i18n/translations';
import { placesService } from '../services/placesService';

interface Props {
  search: string;
  town: string;
  category?: CategorySlug;
  onChange: (values: { search?: string; town?: string; category?: CategorySlug }) => void;
}

export default function SearchBar({ search, town, category, onChange }: Props) {
  const { t } = useLanguage();
  const categories = placesService.categories();

  return (
    <div className="grid gap-4 sm:grid-cols-3 bg-white/90 p-5 rounded-3xl shadow-soft border border-brand-dark/5">
      <label className="flex flex-col gap-1 text-sm text-brand-dark/80">
        <span className="font-semibold text-brand-dark flex items-center gap-2">
          <span aria-hidden>🔍</span> {t('search.labels.query')}
        </span>
        <input
          value={search}
          onChange={(e) => onChange({ search: e.target.value })}
          placeholder={t('search.placeholders.query')}
          className="rounded-2xl border border-brand-dark/10 px-4 py-3 bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm text-brand-dark/80">
        <span className="font-semibold text-brand-dark flex items-center gap-2">
          <span aria-hidden>📍</span> {t('search.labels.town')}
        </span>
        <input
          value={town}
          onChange={(e) => onChange({ town: e.target.value })}
          placeholder={t('search.placeholders.town')}
          className="rounded-2xl border border-brand-dark/10 px-4 py-3 bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm text-brand-dark/80">
        <span className="font-semibold text-brand-dark flex items-center gap-2">
          <span aria-hidden>✨</span> {t('search.labels.category')}
        </span>
        <select
          value={category ?? ''}
          onChange={(e) => onChange({ category: (e.target.value || undefined) as CategorySlug | undefined })}
          className="rounded-2xl border border-brand-dark/10 px-4 py-3 bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
        >
          <option value="">{t('search.all')}</option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {t(`categories.${cat.slug}` as TranslationKey)}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
