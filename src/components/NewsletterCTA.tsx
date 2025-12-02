import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';

export default function NewsletterCTA() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-green via-brand-green/90 to-brand-night text-white p-8 shadow-soft">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4),_transparent_45%)]" />
      <div className="relative">
        <p className="text-sm uppercase tracking-[0.4em] text-white/70 mb-2">{t('newsletter.tagline')}</p>
        <h2 className="text-2xl sm:text-3xl font-display font-semibold mb-3">{t('newsletter.title')}</h2>
        <p className="text-sm text-white/80 mb-6 max-w-2xl">{t('newsletter.description')}</p>
      </div>
      <form
        className="relative z-10 flex flex-col gap-3 sm:flex-row"
        name="newsletter"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const data = new FormData(form);
          fetch('/', { method: 'POST', body: data })
            .then(() => setStatus('success'))
            .catch(() => setStatus('error'));
        }}
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <p className="hidden">
          <label>
            {t('forms.honeypotLabel')} <input name="bot-field" />
          </label>
        </p>
        <input
          required
          name="email"
          type="email"
          placeholder={t('newsletter.placeholder')}
          className="flex-1 rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/60"
        />
        <button
          type="submit"
          className="bg-white text-brand-dark px-5 py-3 rounded-2xl font-semibold shadow-soft"
        >
          {t('newsletter.button')}
        </button>
      </form>
      {status === 'success' && <p className="text-sm text-emerald-200 mt-3">{t('newsletter.success')}</p>}
      {status === 'error' && <p className="text-sm text-amber-200 mt-3">{t('newsletter.error')}</p>}
    </section>
  );
}
