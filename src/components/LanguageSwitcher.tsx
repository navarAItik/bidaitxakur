import { useLanguage } from '../i18n/LanguageProvider';
import { localeOptions } from '../i18n/translations';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <label className="flex items-center gap-2 text-xs font-semibold text-brand-dark/70">
      <span className="hidden sm:inline">Lang</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as typeof locale)}
        className="rounded-full border border-brand-dark/10 bg-white/80 px-3 py-1 text-sm font-semibold shadow-inner focus:border-brand-green focus:outline-none"
      >
        {localeOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
