import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { fallbackLocale, localeOptions, Locale, TranslationKey, translations } from './translations';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
const STORAGE_KEY = 'patas-navarricas:locale';

const isLocale = (value: string): value is Locale =>
  localeOptions.some((option) => option.code === value);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return fallbackLocale;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isLocale(stored)) return stored;
    const browser = (navigator.language ?? fallbackLocale).slice(0, 2).toLowerCase();
    return isLocale(browser) ? browser : fallbackLocale;
  });

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
    },
    [setLocaleState],
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, locale);
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const translate = useCallback(
    (key: TranslationKey, params?: Record<string, string | number>) => {
      const localeMap = translations[locale] ?? translations[fallbackLocale];
      const template = localeMap[key] ?? translations[fallbackLocale][key] ?? key;
      if (!params) return template;
      return template.replace(/{{(.*?)}}/g, (_, param) => {
        const value = params[param.trim()];
        return value !== undefined ? String(value) : '';
      });
    },
    [locale],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: translate,
    }),
    [locale, setLocale, translate],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
