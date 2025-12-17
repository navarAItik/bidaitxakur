'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { LANGUAGES, type LanguageCode, TRANSLATIONS } from '@/lib/i18n';

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  translations: (typeof TRANSLATIONS)[LanguageCode];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>('es');

  useEffect(() => {
    const stored = window.localStorage.getItem('huellas-language') as LanguageCode | null;
    if (stored && LANGUAGES.some((lang) => lang.code === stored)) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('huellas-language', code);
    }
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      translations: TRANSLATIONS[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
