import useSWR from 'swr';
import type { Review } from '@/types/review';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useReviews(poiId: number) {
  const { data, error, isLoading, mutate } = useSWR(`/api/reviews?poi=${poiId}`, fetcher);

  return {
    reviews: data?.results || [],
    error,
    isLoading,
    mutate,
  };
}