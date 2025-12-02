export type CategorySlug =
  | 'veterinarios'
  | 'tiendas'
  | 'alojamientos'
  | 'bares-restaurantes'
  | 'planes'
  | 'rutas'
  | 'rios'
  | 'guarderias'
  | 'cuidadores';

export interface Place {
  id: string;
  name: string;
  category: CategorySlug;
  subcategory?: string;
  description: string;
  town: string;
  province: 'Navarra';
  address?: string;
  phone?: string;
  website?: string;
  lat: number;
  lng: number;
  tags: string[];
  petPolicy: {
    allowed: boolean;
    notes?: string;
  };
  verified: boolean;
  featured: boolean;
  sponsored?: boolean;
  affiliate?: { provider: 'booking' | 'otra'; url: string; disclaimer: string };
  hours?: string;
  images?: string[];
}
