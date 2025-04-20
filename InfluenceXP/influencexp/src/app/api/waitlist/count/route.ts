import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Use service role key to bypass RLS for counting
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  const { count, error } = await supabaseAdmin
    .from('waitlist')
    .select('id', { count: 'exact', head: true });
  if (error) {
    console.error('Error fetching waitlist count (admin):', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ count });
} 