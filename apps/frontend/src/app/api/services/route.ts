import { NextResponse } from 'next/server';
import { PET_SERVICES } from '@/lib/petServices';

export async function GET() {
  return NextResponse.json({ data: PET_SERVICES });
}
