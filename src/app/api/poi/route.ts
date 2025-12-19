import { NextResponse } from 'next/server';
import type { POI } from '@/types/poi';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const region = searchParams.get('region');
    const category = searchParams.get('category');
    const type = searchParams.get('type');

    // Build query string
    const queryParams = new URLSearchParams();
    if (region) queryParams.append('region', region);
    if (category) queryParams.append('category', category);
    if (type) queryParams.append('type', type);

    const apiUrl = `${API_BASE_URL}/pois/?${queryParams.toString()}`;
    console.log('Fetching from:', apiUrl);

    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();

    // Transform backend data to match frontend types
    const transformedPOIs: POI[] = data.map((poi: any) => ({
      id: poi.id.toString(),
      region: poi.region,
      category: poi.category,
      type: poi.type,
      name: poi.name,
      slug: poi.slug,
      description: poi.description,
      location: poi.location,
      petRules: poi.pet_rules,
      contact: poi.contact,
      images: poi.images,
      verified: poi.verified,
      featured: poi.featured,
      tags: poi.tags,
      stats: poi.stats,
    }));

    return NextResponse.json({ pois: transformedPOIs });
  } catch (error) {
    console.error('Error fetching POIs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch POIs', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  // Placeholder for creating POI
  const body = await request.json();
  return NextResponse.json({ message: 'POI created', data: body }, { status: 201 });
}