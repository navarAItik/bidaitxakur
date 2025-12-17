import Link from 'next/link';
import { CATEGORIES } from '@/lib/constants';

interface CategoryCardProps {
  slug: string;
}

const COLORS: Record<string, { bg: string; text: string }> = {
  alojamiento: { bg: 'bg-emerald-50', text: 'text-emerald-600' },
  transporte: { bg: 'bg-sky-50', text: 'text-sky-600' },
  veterinarios: { bg: 'bg-rose-50', text: 'text-rose-600' },
  tiendas: { bg: 'bg-amber-50', text: 'text-amber-600' },
  'ocio-naturaleza': { bg: 'bg-teal-50', text: 'text-teal-600' },
  hosteleria: { bg: 'bg-indigo-50', text: 'text-indigo-600' },
  servicios: { bg: 'bg-fuchsia-50', text: 'text-fuchsia-600' },
  comunidad: { bg: 'bg-slate-50', text: 'text-slate-600' },
};

export default function CategoryCard({ slug }: CategoryCardProps) {
  const category = CATEGORIES.find((item) => item.slug === slug);
  if (!category) return null;
  const colors = COLORS[category.slug] ?? { bg: 'bg-slate-100', text: 'text-slate-700' };

  return (
    <Link
      href={`/norte/${category.slug}`}
      className={`flex flex-col gap-3 rounded-3xl border border-transparent bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary-100 hover:shadow-card ${colors.bg}`}
    >
      <p className={`text-sm font-semibold uppercase ${colors.text}`}>{category.label}</p>
      <p className="text-sm text-slate-600">{category.description}</p>
      <span className="text-xs font-semibold uppercase text-slate-500">Ver listado →</span>
    </Link>
  );
}
