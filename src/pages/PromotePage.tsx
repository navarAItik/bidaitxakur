import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const plans = [
  {
    name: 'Gratis',
    price: '0€',
    features: ['Aparece en el listado general', 'Ficha básica con contacto', 'Revisión manual'],
  },
  {
    name: 'Destacado',
    price: '19€/mes',
    features: [
      'Badge destacado',
      'Prioridad en resultados',
      'CTA a tu web',
      'Visibilidad en home',
    ],
  },
  {
    name: 'Patrocinado',
    price: '39€/mes',
    features: [
      'Slot fijo arriba',
      'Badge patrocinado',
      'Banner en categoría',
      'Informe mensual de clics',
    ],
  },
];

export default function PromotePage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-6">
      <Helmet>
        <title>Destaca tu negocio pet-friendly | Patas Navarricas</title>
        <meta
          name="description"
          content="Planes de visibilidad para negocios pet-friendly en Navarra: gratis, destacado o patrocinado."
        />
      </Helmet>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-brand-dark/70">Monetización transparente</p>
        <h1 className="text-3xl font-bold">Destaca tu negocio</h1>
        <p className="text-brand-dark/80">
          Selecciona el plan que mejor encaja y te contactamos para activar tu ficha.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white rounded-xl p-5 border border-brand-dark/5 shadow-sm">
            <p className="text-sm text-brand-dark/70">{plan.name}</p>
            <p className="text-2xl font-bold">{plan.price}</p>
            <ul className="mt-3 space-y-1 text-sm">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <form
        className="bg-white p-6 rounded-2xl shadow-sm border border-brand-dark/5 space-y-4"
        name="destacar-negocio"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          fetch('/', { method: 'POST', body: data })
            .then(() => setStatus('success'))
            .catch(() => setStatus('error'));
        }}
      >
        <input type="hidden" name="form-name" value="destacar-negocio" />
        <p className="hidden">
          <label>
            No rellenes: <input name="bot-field" />
          </label>
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-semibold">Nombre del negocio</span>
            <input required name="business" className="rounded-md border border-brand-dark/10 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-semibold">Tu nombre</span>
            <input required name="contact" className="rounded-md border border-brand-dark/10 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-semibold">Email</span>
            <input required type="email" name="email" className="rounded-md border border-brand-dark/10 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-semibold">Plan</span>
            <select name="plan" className="rounded-md border border-brand-dark/10 px-3 py-2">
              {plans.map((plan) => (
                <option key={plan.name} value={plan.name}>
                  {plan.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">Mensaje</span>
          <textarea name="message" className="rounded-md border border-brand-dark/10 px-3 py-2" rows={4} />
        </label>
        <button type="submit" className="bg-brand-green text-white px-4 py-2 rounded-md font-semibold">
          Solicitar alta
        </button>
        {status === 'success' && <p className="text-sm text-emerald-700">¡Hablemos! Te contactaremos pronto.</p>}
        {status === 'error' && <p className="text-sm text-red-700">No se pudo enviar, intenta más tarde.</p>}
      </form>
    </div>
  );
}
