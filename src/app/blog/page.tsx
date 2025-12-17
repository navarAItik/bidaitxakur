import Link from 'next/link';

const posts = [
  {
    slug: 'viajar-en-tren-con-perro',
    title: 'Guía completa para viajar en tren con perro por el norte',
    summary: 'Normativa Renfe, OUIGO y Euskotren con checklist descargable.',
  },
  {
    slug: 'mejores-playas-caninas',
    title: 'Las mejores playas caninas de Galicia, Asturias y Cantabria',
    summary: 'Mapa interactivo y calendario por temporada, con servicios cercanos.',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white py-12">
      <div className="container-page space-y-8">
        <header>
          <p className="text-sm uppercase tracking-wide text-primary-500">Blog</p>
          <h1 className="text-4xl font-semibold text-slate-900">Contenido que posiciona y convierte</h1>
          <p className="text-slate-600">SEO local + guías prácticas para dueños de perros que viajan por el norte.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
              <p className="text-xs uppercase text-slate-500">SEO / Comunidad</p>
              <h2 className="text-2xl font-semibold text-slate-900">{post.title}</h2>
              <p className="text-sm text-slate-600">{post.summary}</p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary-600">
                Leer artículo →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
