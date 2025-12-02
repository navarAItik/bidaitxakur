import { Link } from 'react-router-dom';
import { placesService } from '../services/placesService';

export default function CategoryGrid() {
  const categories = placesService.categories();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          to={`/categoria/${cat.slug}`}
          className="bg-white rounded-lg p-4 border border-brand-dark/5 shadow-sm hover:shadow-md transition"
        >
          <p className="font-semibold">{cat.label}</p>
          <p className="text-sm text-brand-dark/70">Explorar</p>
        </Link>
      ))}
    </div>
  );
}
