'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const {
    translations: {
      home: { testimonials: testimonialsCopy },
    },
  } = useLanguage();

  const next = () => setIndex((prev) => (prev + 1) % testimonialsCopy.items.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonialsCopy.items.length) % testimonialsCopy.items.length);

  const testimonial = testimonialsCopy.items[index];

  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{testimonialsCopy.badge}</p>
          <p className="mt-6 text-2xl font-semibold text-slate-900">“{testimonial.text}”</p>
          <p className="mt-4 text-sm text-slate-600">
            {testimonial.name} · {testimonial.location}
          </p>
          <div className="mt-6 flex gap-3">
            <button onClick={prev} className="rounded-full border border-slate-200 px-4 py-2 text-sm">
              {testimonialsCopy.prev}
            </button>
            <button onClick={next} className="rounded-full border border-slate-200 px-4 py-2 text-sm">
              {testimonialsCopy.next}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
