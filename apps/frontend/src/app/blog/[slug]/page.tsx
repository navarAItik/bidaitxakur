import { notFound } from 'next/navigation';
import BlogDetailContent from '@/components/pages/BlogDetailContent';
import { BASE_BLOG_POSTS } from '@/lib/i18n';

const BLOG_POST_SLUGS = new Set(BASE_BLOG_POSTS.map((post) => post.slug));

export function generateStaticParams() {
  return BASE_BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

interface Params {
  params: { slug: string };
}

export default function BlogDetailPage({ params }: Params) {
  if (!BLOG_POST_SLUGS.has(params.slug)) {
    notFound();
  }

  return <BlogDetailContent slug={params.slug} />;
}
