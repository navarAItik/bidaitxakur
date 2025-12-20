import useSWR from 'swr';
import { useDebounce } from 'use-debounce';
import type { SearchFilters } from '@/types/filters';
import type { POI } from '@/types/poi';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function usePOIs(filters: SearchFilters) {
  const [debouncedFilters] = useDebounce(filters, 300);

  const query = new URLSearchParams();
  if (debouncedFilters.region) query.append('region', debouncedFilters.region);
  if (debouncedFilters.category) query.append('category', debouncedFilters.category);
  if (debouncedFilters.poiType) query.append('type', debouncedFilters.poiType);
  // Add other filters as needed

  const { data, error, isLoading } = useSWR(`/api/poi?${query}`, fetcher);

  return {
    pois: data?.pois || [],
    error,
    isLoading,
  };
}