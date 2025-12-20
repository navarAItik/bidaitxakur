'use client';

import { useMemo, useState } from 'react';
import { PET_SERVICES, type PetServiceCategory } from '@/lib/petServices';

const regions = [
  { value: '', label: 'Todas las regiones' },
  { value: 'galicia', label: 'Galicia' },
  { value: 'asturias', label: 'Asturias' },
  { value: 'cantabria', label: 'Cantabria' },
  { value: 'euskadi', label: 'Euskadi' },
  { value: 'navarra', label: 'Navarra' },
  { value: 'iparralde', label: 'Iparralde' },
];

const categories: { value: '' | PetServiceCategory; label: string }[] = [
  { value: '', label: 'Todas las categorías' },
  { value: 'playa', label: 'Playas caninas' },
  { value: 'alojamiento', label: 'Alojamientos' },
  { value: 'veterinario', label: 'Veterinarios' },
  { value: 'transporte', label: 'Transporte' },
  { value: 'experiencia', label: 'Experiencias' },
  { value: 'servicio', label: 'Servicios críticos' },
];

export default function ServiceList() {
  const [region, setRegion] = useState('');
  const [category, setCategory] = useState<'' | PetServiceCategory>('');

  const filtered = useMemo(() => {
    return PET_SERVICES.filter((service) => {
      if (region && service.region !== region) return false;
      if (category && service.category !== category) return false;
      return true;
    });
  }, [region, category]);

  return (
    <section className="space-y-6">
      <header className="flex flex-wrap gap-3">
        <select
          value={region}
          onChange={(event) => setRegion(event.target.value)}
          className="rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-700 focus:border-primary-400 focus:outline-none"
        >
          {regions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value as PetServiceCategory | '')}
          className="rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-700 focus:border-primary-400 focus:outline-none"
        >
          {categories.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((service) => (
          <article key={service.id} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500">
              <span>{service.region}</span>
              <span>{service.category}</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{service.name}</h3>
            <p className="text-sm text-slate-600">{service.description}</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-600">
              {service.serviceDetails.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="text-primary-500">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs text-slate-500">
              <p>
                <strong>Normativa:</strong>{' '}
                {service.policy.seasonalAccess ? `${service.policy.seasonalAccess}. ` : ''}
                {service.policy.leashRequired ? 'Correa obligatoria. ' : 'Sin correa. '}
                {service.policy.muzzleRequired ? 'Bozal requerido. ' : ''}
                {service.policy.notes}
              </p>
              <p className="mt-1">
                <strong>Verificado:</strong> {service.verifiedAt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
