'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface LegislationContentProps {
  regionName: string;
}

export default function LegislationContent({ regionName }: LegislationContentProps) {
  const {
    translations: {
      pages: { legislation },
    },
  } = useLanguage();

  return (
    <div className="bg-white py-12">
      <div className="container-page space-y-4">
        <p className="text-sm uppercase tracking-wide text-primary-500">{legislation.badge}</p>
        <h1 className="text-3xl font-semibold text-slate-900">
          {legislation.titlePrefix} {regionName}
        </h1>
        <p className="text-slate-600">{legislation.description}</p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
          {legislation.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
