import type { CategorySlug, RegionSlug } from '@/lib/constants';

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  town?: string;
  postalCode?: string;
}

export interface Contact {
  phone?: string;
  website?: string;
  email?: string;
}

export interface PetRules {
  allowed: boolean;
  notes?: string;
  maxPets?: number;
  weightLimit?: number;
  typesAllowed?: string[]; // e.g., ['perro', 'gato']
  restrictions?: string[];
  extraFee?: string;
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

export type POIType =
  | 'alojamiento'
  | 'playa'
  | 'veterinaria'
  | 'ruta'
  | 'transporte'
  | 'espacio-natural'
  | 'hosteleria'
  | 'tienda'
  | 'servicio'
  | 'comunidad';

export interface POI {
  id: string;
  region: RegionSlug;
  category: CategorySlug;
  type: POIType;
  name: string;
  slug: string;
  description: string;
  location: Location;
  petRules: PetRules;
  contact?: Contact;
  images?: string[];
  verified: boolean;
  featured: boolean;
  tags?: string[];
  stats?: {
    reviews: number;
    rating: number;
    favorites: number;
  };
}

// Specific extensions
export interface BeachPOI extends POI {
  type: 'playa';
  seasonAccess?: boolean; // true if accessible in high season
  pppAllowed?: boolean; // Perros Potencialmente Peligrosos
  specialRegulations?: string[];
}

export interface RoutePOI extends POI {
  type: 'ruta';
  length?: number; // in km
  difficulty?: 'facil' | 'medio' | 'dificil';
  duration?: string; // estimated time
  waterAccess?: boolean;
  suitableFor?: string[]; // e.g., ['bicicleta', 'senderismo']
}

export interface TransportPOI extends POI {
  type: 'transporte';
  transportPolicies: TransportPolicy[];
}

export interface NaturalSpacePOI extends POI {
  type: 'espacio-natural';
  regulations?: string[]; // e.g., ZEC, ecoturismo
  activities?: string[];
}