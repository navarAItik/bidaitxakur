'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ane & Kovu',
    location: 'Bilbao',
    text: 'Encontramos una casa rural con 4.000m² vallados y rutas con agua a 10 minutos. El filtro "vallado certificado" nos ahorró horas.',
  },
  {
    id: 2,
    name: 'Laura & Max',
    location: 'A Coruña',
    text: 'Por fin un sitio que explica claramente cómo viajar en tren y avión con perro. La guía legal nos dio tranquilidad.',
  },
  {
    id: 3,
    name: 'Diego & Nuna',
    location: 'Donostia',
    text: 'Usamos el marketplace de cuidadores para una boda en Getxo. Todo verificado y con reviews reales.',
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Testimonios reales</p>
          <p className="mt-6 text-2xl font-semibold text-slate-900">“{testimonial.text}”</p>
          <p className="mt-4 text-sm text-slate-600">
            {testimonial.name} · {testimonial.location}
          </p>
          <div className="mt-6 flex gap-3">
            <button onClick={prev} className="rounded-full border border-slate-200 px-4 py-2 text-sm">
              ←
            </button>
            <button onClick={next} className="rounded-full border border-slate-200 px-4 py-2 text-sm">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
