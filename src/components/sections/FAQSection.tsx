'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const {
    translations: {
      home: { faq },
    },
  } = useLanguage();

  if (!faq?.items?.length) return null;

  return (
    <section className="bg-white py-16">
      <div className="container-page space-y-6">
        <div>
          <p className="text-sm uppercase tracking-wide text-primary-500">FAQ</p>
          <h2 className="text-3xl font-semibold text-slate-900">{faq.title}</h2>
          <p className="text-slate-600">{faq.intro}</p>
        </div>
        <div className="space-y-4">
          {faq.items.map((item, idx) => (
            <div key={item.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
              >
                <span className="text-lg font-semibold text-slate-800">{item.question}</span>
                <span aria-hidden>{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && <p className="mt-3 text-sm text-slate-600">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
