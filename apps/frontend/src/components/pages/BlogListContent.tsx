'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogListContent() {
  const {
    translations: {
      pages: { blog },
    },
  } = useLanguage();

  return (
    <div className="bg-white py-12">
      <div className="container-page space-y-8">
        <header>
          <p className="text-sm uppercase tracking-wide text-primary-500">{blog.badge}</p>
          <h1 className="text-4xl font-semibold text-slate-900">{blog.title}</h1>
          <p className="text-slate-600">{blog.description}</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {blog.posts.map((post) => (
            <article key={post.slug} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
              <p className="text-xs uppercase text-slate-500">{post.tag}</p>
              <h2 className="text-2xl font-semibold text-slate-900">{post.title}</h2>
              <p className="text-sm text-slate-600">{post.summary}</p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary-600">
                {blog.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
