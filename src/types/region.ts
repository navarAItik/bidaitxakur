import type { RegionSlug } from '@/lib/constants';

export interface RegionStats {
  businesses: number;
  routes: number;
  verified: number;
}

export interface RegionInfo {
  slug: RegionSlug;
  headline: string;
  heroImage: string;
  stats: RegionStats;
  description: string;
  legalHighlights: string[];
}
