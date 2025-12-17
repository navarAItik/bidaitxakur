import type { CategorySlug, RegionSlug } from '@/lib/constants';

export interface FilterOption {
  value: string;
  label: string;
}

export interface SearchFilters {
  region?: RegionSlug;
  category?: CategorySlug;
  query?: string;
  tags?: string[];
  priceLevels?: string[];
  fenced?: boolean;
  transportMode?: string;
  maxExtraFee?: number;
}
