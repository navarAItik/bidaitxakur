import { useState } from 'react';

export default function NewsletterCTA() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  return (
    <section className="bg-white border border-brand-dark/5 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Recibe planes y sitios nuevos</h2>
      <p className="text-sm text-brand-dark/70 mb-4">
        Newsletter mensual con rutas, alojamientos y descuentos solo para la comunidad perruna.
      </p>
      <form
        className="flex flex-col gap-3 sm:flex-row"
        name="newsletter"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const data = new FormData(form);
          fetch('/', { method: 'POST', body: data })
            .then(() => setStatus('success'))
            .catch(() => setStatus('error'));
        }}
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <p className="hidden">
          <label>
            No rellenes: <input name="bot-field" />
          </label>
        </p>
        <input
          required
          name="email"
          type="email"
          placeholder="tu@email.com"
          className="flex-1 rounded-md border border-brand-dark/10 px-3 py-2 focus:outline-brand-green"
        />
        <button
          type="submit"
          className="bg-brand-green text-white px-4 py-2 rounded-md font-semibold shadow"
        >
          Apuntarme
        </button>
      </form>
      {status === 'success' && <p className="text-sm text-emerald-700 mt-2">¡Gracias por unirte!</p>}
      {status === 'error' && <p className="text-sm text-red-700 mt-2">Algo falló, prueba de nuevo.</p>}
    </section>
  );
}
