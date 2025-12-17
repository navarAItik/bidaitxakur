import { notFound } from 'next/navigation';

const posts = {
  'viajar-en-tren-con-perro': {
    title: 'Guía completa para viajar en tren con perro por el norte',
    content:
      'Explicamos la normativa de Renfe, OUIGO, Euskotren y FEVE con tablas por peso, tamaños y horarios recomendados.',
  },
  'mejores-playas-caninas': {
    title: 'Las mejores playas caninas del norte',
    content:
      'Listado provincia a provincia con servicios cercanos y avisos de socorrismo que aceptan perros.',
  },
};

interface Params {
  params: { slug: keyof typeof posts };
}

export default function BlogDetailPage({ params }: Params) {
  const post = posts[params.slug];
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white py-12">
      <div className="container-page space-y-6">
        <p className="text-sm uppercase tracking-wide text-primary-500">Blog</p>
        <h1 className="text-4xl font-semibold text-slate-900">{post.title}</h1>
        <p className="text-lg text-slate-600">{post.content}</p>
      </div>
    </div>
  );
}
