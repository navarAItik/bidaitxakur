import { NextResponse } from 'next/server';
import type { POIType } from '@/types/poi';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const region = searchParams.get('region');
  const category = searchParams.get('category');
  const poiType = searchParams.get('poiType') as POIType | null;
  const tags = searchParams.get('tags')?.split(',') || [];

  // Mock POI results - in real app, query database
  const mockResults = [
    {
      id: '1',
      region: region || 'norte',
      category: category || 'ocio-naturaleza',
      type: poiType || 'playa',
      name: 'Playa de La Concha',
      slug: 'playa-la-concha',
      description: 'Playa urbana pet-friendly en San Sebastián.',
      location: { latitude: 43.3183, longitude: -1.9812 },
      petRules: { allowed: true, notes: 'Permitidos en temporada baja' },
      verified: true,
      featured: true,
    },
  ];

  return NextResponse.json({ query, filters: { region, category, poiType, tags }, results: mockResults });
}
