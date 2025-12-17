'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface CommunityPlaceholderProps {
  variant: 'forum' | 'events' | 'adoptions' | 'missing';
}

export default function CommunityPlaceholder({ variant }: CommunityPlaceholderProps) {
  const {
    translations: {
      pages: { community },
    },
  } = useLanguage();

  const message = community[variant];

  return (
    <div className="bg-white py-12">
      <div className="container-page space-y-4">
        <p className="text-sm uppercase tracking-wide text-primary-500">{community.badge}</p>
        <h1 className="text-3xl font-semibold text-slate-900">{community.title}</h1>
        <p className="text-slate-600">{message}</p>
      </div>
    </div>
  );
}
