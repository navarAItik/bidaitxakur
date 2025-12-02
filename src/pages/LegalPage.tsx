import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const content: Record<string, { title: string; body: string }> = {
  privacidad: {
    title: 'Política de privacidad',
    body: 'No compartimos tus datos y solo usamos la newsletter para enviarte novedades pet-friendly.',
  },
  cookies: {
    title: 'Política de cookies',
    body: 'Usamos cookies analíticas básicas para mejorar la experiencia. Puedes desactivarlas en tu navegador.',
  },
  aviso: {
    title: 'Aviso legal',
    body: 'Patas Navarricas es una guía informativa. Verifica condiciones de cada lugar antes de acudir.',
  },
};

export default function LegalPage() {
  const { page } = useParams<{ page: string }>();
  const current = page && content[page] ? content[page] : content.aviso;

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 space-y-4">
      <Helmet>
        <title>{current.title} | Patas Navarricas</title>
        <meta name="description" content={`${current.title} de Patas Navarricas.`} />
      </Helmet>
      <h1 className="text-3xl font-bold">{current.title}</h1>
      <p className="text-brand-dark/80 leading-relaxed">{current.body}</p>
    </div>
  );
}
