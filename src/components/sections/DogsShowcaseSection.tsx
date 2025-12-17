import Image from 'next/image';
import Link from 'next/link';

export default function DogsShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-emerald-50 to-slate-50 py-20">
      <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-emerald-100 opacity-60 blur-3xl" />
      <div className="absolute right-0 top-0 hidden h-64 w-64 rounded-full bg-sky-100 opacity-50 blur-3xl md:block" />
      <div className="container-page relative grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Community first</p>
          <h2 className="text-3xl font-semibold text-slate-900">
            8 categorías integradas para cubrir el viaje completo con perros
          </h2>
          <p className="text-slate-600">
            Alojamientos vallados, transporte claro (vuelos, tren, bus, coche), ocio con agua y servicios esenciales.
            Cada dato está validado con dueños de negocios y con la normativa regional.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Casas con finca', 'Transporte completo', 'Veterinarios 24h', 'Playas caninas'].map((tag) => (
              <span key={tag} className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <Link href="/alta-negocio" className="rounded-full bg-primary-600 px-6 py-3 text-white">
              Añadir mi negocio
            </Link>
            <Link href="#categorias" className="rounded-full bg-white px-6 py-3 text-slate-700 shadow">
              Ver categorías
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative h-80 w-full">
            <Image
              src="/dogs-illustration.svg"
              alt="Perros disfrutando en el norte"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
          <div className="mt-6 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
            <div className="rounded-3xl bg-white/80 p-4 shadow">
              <p className="text-xs uppercase text-slate-500">Monetización</p>
              <p className="text-lg font-semibold text-slate-900">€524k Año 1</p>
              <p>Suscripciones + afiliación + marketplace.</p>
            </div>
            <div className="rounded-3xl bg-white/80 p-4 shadow">
              <p className="text-xs uppercase text-slate-500">Roadmap</p>
              <p>MVP Euskadi → Escalar a 7 regiones en 18 meses.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
