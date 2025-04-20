-- Create the waitlist table
create table if not exists public.waitlist (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  name text,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.waitlist enable row level security;

-- Allow anonymous inserts for waitlist entries
create policy allow_anonymous_insert on public.waitlist
  for insert with check (true);
