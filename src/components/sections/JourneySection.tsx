'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function JourneySection() {
  const {
    translations: {
      home: { journey },
    },
  } = useLanguage();

  return (
    <section className="bg-white py-16">
      <div className="container-page space-y-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-wide text-primary-500">{journey.badge}</p>
          <h2 className="text-3xl font-semibold text-slate-900">{journey.title}</h2>
          <p className="text-slate-600">{journey.description}</p>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {journey.steps.map((step) => (
            <li
              key={step.title}
              className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary-500">{step.badge}</span>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {step.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="text-primary-500">●</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
