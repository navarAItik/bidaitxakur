import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function SuggestPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 space-y-6">
      <Helmet>
        <title>Sugerir un sitio | Patas Navarricas</title>
        <meta name="description" content="Envía un nuevo lugar pet-friendly en Navarra para añadirlo al directorio." />
      </Helmet>
      <div>
        <p className="text-sm text-brand-dark/70">Comunidad</p>
        <h1 className="text-3xl font-bold">Sugiere un sitio</h1>
      </div>
      <form
        className="bg-white p-6 rounded-2xl shadow-sm border border-brand-dark/5 space-y-4"
        name="sugerir-sitio"
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
        <input type="hidden" name="form-name" value="sugerir-sitio" />
        <p className="hidden">
          <label>
            No rellenes: <input name="bot-field" />
          </label>
        </p>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">Nombre del lugar</span>
          <input required name="name" className="rounded-md border border-brand-dark/10 px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">Localidad</span>
          <input required name="town" className="rounded-md border border-brand-dark/10 px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">Categoría</span>
          <input required name="category" className="rounded-md border border-brand-dark/10 px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">Enlace o teléfono</span>
          <input name="contact" className="rounded-md border border-brand-dark/10 px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">Notas pet-friendly</span>
          <textarea name="notes" className="rounded-md border border-brand-dark/10 px-3 py-2" rows={4} />
        </label>
        <button type="submit" className="bg-brand-green text-white px-4 py-2 rounded-md font-semibold">
          Enviar sugerencia
        </button>
        {status === 'success' && <p className="text-sm text-emerald-700">¡Gracias! Revisaremos tu aporte.</p>}
        {status === 'error' && <p className="text-sm text-red-700">Ups, no se pudo enviar.</p>}
      </form>
    </div>
  );
}
