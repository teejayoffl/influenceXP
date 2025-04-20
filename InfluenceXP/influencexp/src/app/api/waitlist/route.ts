import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const { email, name } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  // Insert into waitlist (no .select() to avoid triggering RLS on SELECT)
  const { error: supabaseError } = await supabase
    .from('waitlist')
    .insert([{ email, name }]);

  if (supabaseError) {
    console.error('Supabase insert error:', supabaseError);
    // Unique constraint violation
    if (supabaseError.code === '23505') {
      return NextResponse.json({ message: 'You are already on the waitlist!' });
    }
    // Return the actual error message from Supabase
    return NextResponse.json(
      { error: supabaseError.message || 'Failed to join waitlist' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, message: 'Thank you for joining the waitlist!' });
} 