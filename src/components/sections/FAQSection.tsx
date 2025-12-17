'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Cómo verificáis que un alojamiento tiene terreno vallado?',
    answer: 'Solicitamos vídeo, contrato y verificación mediante visita o dron. Solo entonces etiquetamos como "vallado certificado".',
  },
  {
    question: '¿Incluís transporte completo (vuelos + bus + tren)?',
    answer: 'Sí. Tenemos guías detalladas para Iberia, Air Europa, ALSA, Renfe, Cercanías y compañías de alquiler.',
  },
  {
    question: '¿Puede mi negocio destacar?',
    answer: 'Claro. Ofrecemos planes de suscripción desde 49€/mes que incluyen badge verificado y campañas SEO locales.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <h2 className="text-3xl font-semibold text-slate-900">Preguntas frecuentes</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, idx) => (
            <div key={faq.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
              >
                <span className="text-lg font-semibold text-slate-800">{faq.question}</span>
                <span>{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
