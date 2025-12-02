import { places } from '../data/places';
import { CategorySlug, Place } from '../types/place';

type Filters = {
  search?: string;
  category?: CategorySlug;
  town?: string;
  verified?: boolean;
  fencedGarden?: boolean;
  waterNearby?: boolean;
};

const normalize = (value: string) => value.toLowerCase();

export const placesService = {
  list(filters: Filters = {}): Place[] {
    const { search, category, town, verified, fencedGarden, waterNearby } = filters;

    return places
      .filter((place) => {
        if (category && place.category !== category) return false;
        if (typeof verified === 'boolean' && place.verified !== verified) return false;
        if (town && normalize(place.town).includes(normalize(town)) === false) return false;
        if (fencedGarden && place.tags.every((tag) => normalize(tag) !== 'jardín vallado')) return false;
        if (waterNearby && place.tags.every((tag) => !normalize(tag).includes('agua'))) return false;

        if (search) {
          const haystack = normalize(
            [place.name, place.town, place.description, place.tags.join(' ')].join(' '),
          );
          if (!haystack.includes(normalize(search))) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (a.sponsored && !b.sponsored) return -1;
        if (!a.sponsored && b.sponsored) return 1;
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.name.localeCompare(b.name);
      });
  },
  getById(id: string): Place | undefined {
    return places.find((place) => place.id === id);
  },
  categories(): { slug: CategorySlug; label: string }[] {
    return [
      { slug: 'veterinarios', label: 'Veterinarios' },
      { slug: 'tiendas', label: 'Tiendas' },
      { slug: 'alojamientos', label: 'Alojamientos' },
      { slug: 'bares-restaurantes', label: 'Bares y restaurantes' },
      { slug: 'planes', label: 'Planes' },
      { slug: 'rutas', label: 'Rutas' },
      { slug: 'rios', label: 'Ríos y pantanos' },
      { slug: 'guarderias', label: 'Guarderías caninas' },
      { slug: 'cuidadores', label: 'Cuidadores particulares' },
    ];
  },
};
