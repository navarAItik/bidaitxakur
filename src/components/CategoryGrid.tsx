import { Link } from 'react-router-dom';
import { placesService } from '../services/placesService';

export default function CategoryGrid() {
  const categories = placesService.categories();
  const accents = [
    'from-brand-sky/70 to-white',
    'from-brand-blush/60 to-brand-cream/60',
    'from-brand-green/10 via-white to-brand-sand/80',
    'from-white to-brand-sky/40',
  ];
  const icons: Record<string, string> = {
    veterinarios: '🩺',
    tiendas: '🛍️',
    alojamientos: '🛏️',
    'bares-restaurantes': '🍽️',
    planes: '🎉',
    rutas: '🥾',
    rios: '💦',
    guarderias: '🏡',
    cuidadores: '🐕',
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((cat, index) => (
        <Link
          key={cat.slug}
          to={`/categoria/${cat.slug}`}
          className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-4 shadow-soft transition card-glow"
        >
          <div
            className={`absolute inset-0 -z-10 opacity-90 bg-gradient-to-br ${
              accents[index % accents.length]
            }`}
          />
          <div className="flex items-start justify-between gap-2">
            <p className="font-semibold text-brand-dark">{cat.label}</p>
            <span className="text-xl" aria-hidden>
              {icons[cat.slug] ?? '🐶'}
            </span>
          </div>
          <p className="text-xs mt-1 text-brand-dark/70">Explorar</p>
        </Link>
      ))}
    </div>
  );
}
