-- Ensure pgcrypto extension is available for UUID generation
create extension if not exists "pgcrypto";

-- Alter the waitlist id default to use gen_random_uuid()
alter table public.waitlist 
  alter column id set default gen_random_uuid(); 