import { useLanguage } from '../i18n/LanguageProvider';
import type { TranslationKey } from '../i18n/translations';

interface Props {
  verified: boolean;
  fencedGarden: boolean;
  waterNearby: boolean;
  onChange: (values: { verified?: boolean; fencedGarden?: boolean; waterNearby?: boolean }) => void;
  onReset?: () => void;
}

type FilterKey = 'verified' | 'fencedGarden' | 'waterNearby';

const filterConfigs: Array<{
  key: FilterKey;
  labelKey: TranslationKey;
  hintKey: TranslationKey;
  icon: string;
}> = [
  { key: 'verified', labelKey: 'filters.verified.label', hintKey: 'filters.verified.hint', icon: '✅' },
  { key: 'fencedGarden', labelKey: 'filters.fenced.label', hintKey: 'filters.fenced.hint', icon: '🌿' },
  { key: 'waterNearby', labelKey: 'filters.water.label', hintKey: 'filters.water.hint', icon: '💧' },
];

export default function FiltersBar({ verified, fencedGarden, waterNearby, onChange, onReset }: Props) {
  const { t } = useLanguage();
  const states: Record<FilterKey, boolean> = { verified, fencedGarden, waterNearby };

  const handleToggle = (key: FilterKey, checked: boolean) => {
    if (key === 'verified') onChange({ verified: checked });
    if (key === 'fencedGarden') onChange({ fencedGarden: checked });
    if (key === 'waterNearby') onChange({ waterNearby: checked });
  };

  const hasActive = verified || fencedGarden || waterNearby;

  return (
    <fieldset className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-soft backdrop-blur">
      <legend className="sr-only">{t('filters.legend')}</legend>
      <div className="flex flex-wrap gap-3">
        {filterConfigs.map((filter) => (
          <label
            key={filter.key}
            className="group relative flex flex-1 min-w-[220px] items-center gap-3 rounded-2xl border border-brand-dark/10 bg-white/70 px-3 py-2 transition hover:border-brand-green/40 focus-within:border-brand-green/60"
          >
            <input
              type="checkbox"
              checked={states[filter.key]}
              onChange={(event) => handleToggle(filter.key, event.target.checked)}
              className="sr-only peer"
            />
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-dark/10 bg-white text-lg peer-checked:border-brand-green peer-checked:bg-brand-green peer-checked:text-white transition"
              aria-hidden
            >
              {filter.icon}
            </span>
            <div className="flex flex-col text-sm">
              <span className="font-semibold text-brand-dark">{t(filter.labelKey)}</span>
              <span className="text-brand-dark/60 text-xs">{t(filter.hintKey)}</span>
            </div>
            <span className="absolute right-3 text-[11px] uppercase tracking-wide text-brand-dark/40 peer-checked:text-brand-green">
              {states[filter.key] ? t('filters.stateOn') : t('filters.stateOff')}
            </span>
          </label>
        ))}
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            disabled={!hasActive}
            className="inline-flex items-center gap-2 rounded-full border border-brand-dark/10 bg-white/70 px-4 py-2 text-sm font-semibold text-brand-dark/70 disabled:opacity-40 disabled:cursor-not-allowed hover:text-brand-dark"
          >
            <span aria-hidden>↺</span>
            {t('filters.reset')}
          </button>
        )}
      </div>
    </fieldset>
  );
}
