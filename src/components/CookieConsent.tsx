'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

type ConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
};

type StoredConsent = {
  version: number;
  updatedAt: string;
  preferences: ConsentPreferences;
};

const STORAGE_KEY = 'bidaitxakur-cookie-consent';
const CONSENT_VERSION = 1;
const defaultPreferences: ConsentPreferences = {
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const { translations } = useLanguage();
  const copy = translations.cookieConsent;

  const [mounted, setMounted] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>(defaultPreferences);
  const [hasStoredConsent, setHasStoredConsent] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    setMounted(true);
    try {
      const storedRaw = window.localStorage.getItem(STORAGE_KEY);
      if (!storedRaw) {
        setBannerVisible(true);
        return;
      }
      const stored: StoredConsent = JSON.parse(storedRaw);
      if (!stored || stored.version !== CONSENT_VERSION) {
        setBannerVisible(true);
        return;
      }
      setPreferences(stored.preferences);
      setHasStoredConsent(true);
    } catch (error) {
      console.warn('Cookie consent load failed', error);
      setBannerVisible(true);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  const persistPreferences = (next: ConsentPreferences) => {
    const payload: StoredConsent = {
      version: CONSENT_VERSION,
      updatedAt: new Date().toISOString(),
      preferences: next,
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setHasStoredConsent(true);
    } catch (error) {
      console.error('Cookie consent save failed', error);
    }
    setPreferences(next);
    setAnnouncement(copy.savedMessage);
    setTimeout(() => setAnnouncement(''), 4000);
  };

  const handleAcceptAll = () => {
    persistPreferences({ analytics: true, marketing: true });
    setBannerVisible(false);
    setCustomizing(false);
  };

  const handleRejectAll = () => {
    persistPreferences({ analytics: false, marketing: false });
    setBannerVisible(false);
    setCustomizing(false);
  };

  const handleSaveCustom = () => {
    persistPreferences(preferences);
    setBannerVisible(false);
    setCustomizing(false);
  };

  const openPreferences = () => {
    setBannerVisible(true);
    setCustomizing(true);
  };

  const togglePreference = (key: keyof ConsentPreferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {(bannerVisible || customizing) && (
        <section className="fixed inset-x-0 bottom-4 z-50 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1 space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                  {copy.title}
                </p>
                <p className="text-base text-neutral-800">{copy.description}</p>
                <Link
                  href="/docs/legal-framework"
                  className="text-sm font-semibold text-primary-700 underline-offset-4 hover:underline"
                >
                  {copy.learnMore}
                </Link>
              </div>
              <div className="grid gap-2 text-sm text-neutral-600 sm:grid-cols-3">
                {Object.entries(copy.categories).map(([key, category]) => (
                  <div key={key} className="rounded-2xl border border-neutral-100 bg-neutral-50 p-3">
                    <p className="text-sm font-semibold text-neutral-900">{category.title}</p>
                    <p className="mt-1 text-xs text-neutral-600">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {customizing && (
              <fieldset className="mt-4 space-y-3 rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
                <legend className="text-sm font-semibold text-neutral-900">
                  {copy.preferencesTitle}
                </legend>
                <p className="text-xs text-neutral-600">{copy.preferencesDescription}</p>

                <label className="flex items-start gap-3 text-sm text-neutral-800">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="mt-1"
                  />
                  <span>
                    <span className="font-semibold">{copy.categories.necessary.title}</span>
                    <span className="block text-xs text-neutral-500">
                      {copy.categories.necessary.description}
                    </span>
                  </span>
                </label>

                <label className="flex items-start gap-3 text-sm text-neutral-800">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => togglePreference('analytics')}
                    className="mt-1 accent-primary-600"
                  />
                  <span>
                    <span className="font-semibold">{copy.analyticsLabel}</span>
                    <span className="block text-xs text-neutral-500">
                      {copy.categories.analytics.description}
                    </span>
                  </span>
                </label>

                <label className="flex items-start gap-3 text-sm text-neutral-800">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => togglePreference('marketing')}
                    className="mt-1 accent-primary-600"
                  />
                  <span>
                    <span className="font-semibold">{copy.marketingLabel}</span>
                    <span className="block text-xs text-neutral-500">
                      {copy.categories.marketing.description}
                    </span>
                  </span>
                </label>
              </fieldset>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 sm:flex-none sm:px-6"
              >
                {copy.buttons.acceptAll}
              </button>
              <button
                type="button"
                onClick={handleRejectAll}
                className="flex-1 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 hover:border-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 sm:flex-none sm:px-6"
              >
                {copy.buttons.rejectAll}
              </button>
              <button
                type="button"
                onClick={customizing ? handleSaveCustom : () => setCustomizing(true)}
                className="flex-1 rounded-full border border-primary-200 px-4 py-2 text-sm font-semibold text-primary-700 hover:border-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 sm:flex-none sm:px-6"
              >
                {customizing ? copy.buttons.save : copy.buttons.customize}
              </button>
            </div>
          </div>
        </section>
      )}

      {!bannerVisible && hasStoredConsent && (
        <button
          type="button"
          onClick={openPreferences}
          className="fixed bottom-4 left-4 z-40 rounded-full border border-neutral-200 bg-white/90 px-4 py-2 text-xs font-semibold text-neutral-700 shadow backdrop-blur hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        >
          {copy.manageLabel}
        </button>
      )}

      <div className="sr-only" aria-live="polite">
        {announcement}
      </div>
    </>
  );
}
