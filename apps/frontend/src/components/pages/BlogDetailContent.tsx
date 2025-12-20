'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface BlogDetailContentProps {
  slug: string;
}

export default function BlogDetailContent({ slug }: BlogDetailContentProps) {
  const {
    translations: {
      pages: { blog },
    },
  } = useLanguage();

  const post = blog.posts.find((entry) => entry.slug === slug);
  if (!post) {
    return (
      <div className="bg-white py-12">
        <div className="container-page">
          <p className="text-slate-600">{blog.notFound}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="container-page space-y-6">
        <p className="text-sm uppercase tracking-wide text-primary-500">{post.tag}</p>
        <h1 className="text-4xl font-semibold text-slate-900">{post.title}</h1>
        <p className="text-lg text-slate-600">{post.content}</p>
      </div>
    </div>
  );
}
