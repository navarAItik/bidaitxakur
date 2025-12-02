import { CategorySlug } from '../types/place';
import { placesService } from '../services/placesService';

interface Props {
  search: string;
  town: string;
  category?: CategorySlug;
  onChange: (values: { search?: string; town?: string; category?: CategorySlug }) => void;
}

export default function SearchBar({ search, town, category, onChange }: Props) {
  const categories = placesService.categories();

  return (
    <div className="grid gap-4 sm:grid-cols-3 bg-white/80 p-4 sm:p-5 rounded-2xl shadow-soft border border-brand-dark/5">
      <label className="flex flex-col gap-1 text-sm text-brand-dark/80">
        <span className="font-semibold text-brand-dark flex items-center gap-2">
          <span aria-hidden>🔍</span> ¿Qué buscas?
        </span>
        <input
          value={search}
          onChange={(e) => onChange({ search: e.target.value })}
          placeholder="Nombre, palabra clave…"
          className="rounded-xl border border-brand-dark/10 px-3 py-2.5 bg-white/90 focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm text-brand-dark/80">
        <span className="font-semibold text-brand-dark flex items-center gap-2">
          <span aria-hidden>📍</span> Localidad
        </span>
        <input
          value={town}
          onChange={(e) => onChange({ town: e.target.value })}
          placeholder="Pamplona, Baztan…"
          className="rounded-xl border border-brand-dark/10 px-3 py-2.5 bg-white/90 focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm text-brand-dark/80">
        <span className="font-semibold text-brand-dark flex items-center gap-2">
          <span aria-hidden>✨</span> Categoría
        </span>
        <select
          value={category ?? ''}
          onChange={(e) => onChange({ category: (e.target.value || undefined) as CategorySlug | undefined })}
          className="rounded-xl border border-brand-dark/10 px-3 py-2.5 bg-white/90 focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
        >
          <option value="">Todas</option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
