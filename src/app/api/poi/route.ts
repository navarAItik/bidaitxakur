import { NextResponse } from 'next/server';
import type { POI } from '@/types/poi';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get('region');
  const category = searchParams.get('category');
  const type = searchParams.get('type');

  // Mock POI data - replace with database query
  const mockPOIs: POI[] = [
    {
      id: '1',
      region: 'euskadi',
      category: 'ocio-naturaleza',
      type: 'playa',
      name: 'Playa de La Concha',
      slug: 'playa-la-concha',
      description: 'Playa urbana icónica en San Sebastián, pet-friendly en temporada baja.',
      location: { latitude: 43.3183, longitude: -1.9812, town: 'San Sebastián' },
      petRules: {
        allowed: true,
        notes: 'Permitidos fuera de temporada alta. Bozal obligatorio para PPP.',
        maxPets: 2,
        typesAllowed: ['perro'],
        restrictions: ['correa obligatoria', 'no en zona de baño'],
      },
      contact: { website: 'https://www.sansebastianturismo.com' },
      images: ['/images/playa-concha.jpg'],
      verified: true,
      featured: true,
      tags: ['playa', 'urbana', 'temporada-baja'],
      stats: { reviews: 45, rating: 4.2, favorites: 120 },
    },
    {
      id: '2',
      region: 'asturias',
      category: 'ocio-naturaleza',
      type: 'ruta',
      name: 'Ruta del Flysch',
      slug: 'ruta-flysch',
      description: 'Ruta geológica por acantilados con vistas espectaculares.',
      location: { latitude: 43.4, longitude: -2.5, town: 'Zumaia' },
      petRules: {
        allowed: true,
        notes: 'Perros con correa. Agua disponible en algunos tramos.',
        typesAllowed: ['perro'],
      },
      verified: true,
      featured: true,
      tags: ['ruta', 'geologica', 'acantilados'],
    },
  ];

  let filteredPOIs = mockPOIs;

  if (region) {
    filteredPOIs = filteredPOIs.filter(poi => poi.region === region);
  }
  if (category) {
    filteredPOIs = filteredPOIs.filter(poi => poi.category === category);
  }
  if (type) {
    filteredPOIs = filteredPOIs.filter(poi => poi.type === type);
  }

  return NextResponse.json({ pois: filteredPOIs });
}

export async function POST(request: Request) {
  // Placeholder for creating POI
  const body = await request.json();
  return NextResponse.json({ message: 'POI created', data: body }, { status: 201 });
}