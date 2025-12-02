import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageProvider';
import type { TranslationKey } from '../i18n/translations';

const planKeys = ['free', 'featured', 'sponsored'] as const;
type PlanKey = (typeof planKeys)[number];

const planFeatureKeys: Record<PlanKey, TranslationKey[]> = {
  free: [
    'promote.plans.free.features.0',
    'promote.plans.free.features.1',
    'promote.plans.free.features.2',
  ],
  featured: [
    'promote.plans.featured.features.0',
    'promote.plans.featured.features.1',
    'promote.plans.featured.features.2',
    'promote.plans.featured.features.3',
  ],
  sponsored: [
    'promote.plans.sponsored.features.0',
    'promote.plans.sponsored.features.1',
    'promote.plans.sponsored.features.2',
    'promote.plans.sponsored.features.3',
  ],
};

export default function PromotePage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  return (
    <div className="page-shell py-10 space-y-6">
      <Helmet>
        <title>{t('promote.title')} | Patas Navarricas</title>
        <meta name="description" content={t('promote.description')} />
      </Helmet>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-brand-dark/70">{t('promote.tagline')}</p>
        <h1 className="text-3xl font-bold">{t('promote.title')}</h1>
        <p className="text-brand-dark/80">{t('promote.description')}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {planKeys.map((key) => (
          <div key={key} className="bg-white rounded-xl p-5 border border-brand-dark/5 shadow-sm">
            <p className="text-sm text-brand-dark/70">{t(`promote.plans.${key}.name` as const)}</p>
            <p className="text-2xl font-bold">{t(`promote.plans.${key}.price` as const)}</p>
            <ul className="mt-3 space-y-1 text-sm">
              {planFeatureKeys[key].map((featureKey) => (
                <li key={featureKey}>• {t(featureKey)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <form
        className="bg-white p-6 rounded-2xl shadow-sm border border-brand-dark/5 space-y-4"
        name="destacar-negocio"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          fetch('/', { method: 'POST', body: data })
            .then(() => setStatus('success'))
            .catch(() => setStatus('error'));
        }}
      >
        <input type="hidden" name="form-name" value="destacar-negocio" />
        <p className="hidden">
          <label>
            {t('forms.honeypotLabel')} <input name="bot-field" />
          </label>
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-semibold">{t('promote.form.business')}</span>
            <input required name="business" className="rounded-md border border-brand-dark/10 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-semibold">{t('promote.form.contact')}</span>
            <input required name="contact" className="rounded-md border border-brand-dark/10 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-semibold">{t('promote.form.email')}</span>
            <input required type="email" name="email" className="rounded-md border border-brand-dark/10 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-semibold">{t('promote.form.plan')}</span>
            <select name="plan" className="rounded-md border border-brand-dark/10 px-3 py-2">
              {planKeys.map((key) => {
                const label = t(`promote.plans.${key}.name` as const);
                return (
                  <option key={key} value={label}>
                    {label}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">{t('promote.form.message')}</span>
          <textarea name="message" className="rounded-md border border-brand-dark/10 px-3 py-2" rows={4} />
        </label>
        <button type="submit" className="bg-brand-green text-white px-4 py-2 rounded-md font-semibold">
          {t('promote.form.button')}
        </button>
        {status === 'success' && <p className="text-sm text-emerald-700">{t('promote.form.success')}</p>}
        {status === 'error' && <p className="text-sm text-red-700">{t('promote.form.error')}</p>}
      </form>
    </div>
  );
}
