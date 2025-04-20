-- Allow anonymous SELECT on waitlist
create policy allow_anonymous_select on public.waitlist
  for select using (true); 