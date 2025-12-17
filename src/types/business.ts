import type { CategorySlug, RegionSlug } from '@/lib/constants';

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  town?: string;
  postalCode?: string;
}

export interface TransportPolicy {
  mode: 'vuelos' | 'autobus' | 'tren' | 'cercanias' | 'coches';
  weightLimit?: number;
  sizeLimit?: string;
  allowedInCabin?: boolean;
  allowedInHold?: boolean;
  price?: string;
  notes?: string;
}

export interface Business {
  id: string;
  region: RegionSlug;
  category: CategorySlug;
  subcategory?: string;
  name: string;
  slug: string;
  description: string;
  location: Location;
  tags: string[];
  phone?: string;
  website?: string;
  email?: string;
  verified: boolean;
  featured: boolean;
  images?: string[];
  priceLevel?: '$' | '$$' | '$$$' | '$$$$';
  petPolicy: {
    allowed: boolean;
    notes?: string;
    maxDogs?: number;
    weightLimit?: number;
    fenced?: boolean;
    extraFee?: string;
  };
  transportPolicy?: TransportPolicy[];
  stats?: {
    reviews: number;
    rating: number;
    favorites: number;
  };
}
