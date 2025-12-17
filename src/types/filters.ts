import type { CategorySlug, RegionSlug } from '@/lib/constants';
import type { POIType } from './poi';

export interface FilterOption {
  value: string;
  label: string;
}

export interface SearchFilters {
  region?: RegionSlug;
  category?: CategorySlug;
  poiType?: POIType;
  query?: string;
  tags?: string[];
  priceLevels?: string[];
  fenced?: boolean;
  transportMode?: string;
  maxExtraFee?: number;
  seasonAccess?: boolean;
  pppAllowed?: boolean;
  difficulty?: string;
  waterAccess?: boolean;
}
