import { OgImage } from '@/components/og-image';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'InfluenceXP - Gamified LinkedIn Growth Platform';
    const description = searchParams.get('description') || 'Rack up XP, unlock badges, and watch your LinkedIn reach explode.';

    return await OgImage({ title, description });
  } catch (error) {
    console.error(error);
    return new Response('Failed to generate image', { status: 500 });
  }
} 