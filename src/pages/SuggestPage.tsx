import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageProvider';

export default function SuggestPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  return (
    <div className="page-shell max-w-3xl py-10 space-y-6">
      <Helmet>
        <title>{t('suggest.title')} | Patas Navarricas</title>
        <meta name="description" content={t('home.hero.description')} />
      </Helmet>
      <div>
        <p className="text-sm text-brand-dark/70">{t('suggest.tagline')}</p>
        <h1 className="text-3xl font-bold">{t('suggest.title')}</h1>
      </div>
      <form
        className="bg-white p-6 rounded-2xl shadow-sm border border-brand-dark/5 space-y-4"
        name="sugerir-sitio"
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
        <input type="hidden" name="form-name" value="sugerir-sitio" />
        <p className="hidden">
          <label>
            {t('forms.honeypotLabel')} <input name="bot-field" />
          </label>
        </p>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">{t('suggest.form.name')}</span>
          <input required name="name" className="rounded-md border border-brand-dark/10 px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">{t('suggest.form.town')}</span>
          <input required name="town" className="rounded-md border border-brand-dark/10 px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">{t('suggest.form.category')}</span>
          <input required name="category" className="rounded-md border border-brand-dark/10 px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">{t('suggest.form.contact')}</span>
          <input name="contact" className="rounded-md border border-brand-dark/10 px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">{t('suggest.form.notes')}</span>
          <textarea name="notes" className="rounded-md border border-brand-dark/10 px-3 py-2" rows={4} />
        </label>
        <button type="submit" className="bg-brand-green text-white px-4 py-2 rounded-md font-semibold">
          {t('suggest.form.button')}
        </button>
        {status === 'success' && <p className="text-sm text-emerald-700">{t('suggest.form.success')}</p>}
        {status === 'error' && <p className="text-sm text-red-700">{t('suggest.form.error')}</p>}
      </form>
    </div>
  );
}
