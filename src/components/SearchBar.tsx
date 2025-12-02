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
    <div className="grid gap-3 sm:grid-cols-3 bg-white p-4 rounded-xl shadow-sm border border-brand-dark/5">
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold">¿Qué buscas?</span>
        <input
          value={search}
          onChange={(e) => onChange({ search: e.target.value })}
          placeholder="Nombre, palabra clave…"
          className="rounded-md border border-brand-dark/10 px-3 py-2 focus:outline-brand-green"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold">Localidad</span>
        <input
          value={town}
          onChange={(e) => onChange({ town: e.target.value })}
          placeholder="Pamplona, Baztan…"
          className="rounded-md border border-brand-dark/10 px-3 py-2 focus:outline-brand-green"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold">Categoría</span>
        <select
          value={category ?? ''}
          onChange={(e) => onChange({ category: (e.target.value || undefined) as CategorySlug | undefined })}
          className="rounded-md border border-brand-dark/10 px-3 py-2 focus:outline-brand-green"
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
