import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageProvider';
import type { TranslationKey } from '../i18n/translations';

const sections: Record<string, { titleKey: TranslationKey; bodyKey: TranslationKey }> = {
  privacidad: { titleKey: 'legal.privacy.title', bodyKey: 'legal.privacy.body' },
  cookies: { titleKey: 'legal.cookies.title', bodyKey: 'legal.cookies.body' },
  aviso: { titleKey: 'legal.notice.title', bodyKey: 'legal.notice.body' },
};

export default function LegalPage() {
  const { page } = useParams<{ page: string }>();
  const { t } = useLanguage();
  const current = (page && sections[page]) || sections.aviso;
  const title = t(current.titleKey);

  return (
    <div className="page-shell max-w-3xl py-10 space-y-4">
      <Helmet>
        <title>{title} | Patas Navarricas</title>
        <meta name="description" content={`${title} · Patas Navarricas`} />
      </Helmet>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-brand-dark/80 leading-relaxed">{t(current.bodyKey)}</p>
    </div>
  );
}
