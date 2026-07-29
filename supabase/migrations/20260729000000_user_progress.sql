create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null unique
    check (username = lower(username))
    check (username ~ '^[a-z0-9._-]{3,24}$'),
  created_at timestamptz not null default now()
);

create table public.exercise_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null check (lesson_id in ('pronouns', 'future', 'reflexive', 'present')),
  exercise_set_id text not null,
  best_score smallint not null check (best_score between 0 and 10),
  attempts integer not null default 1 check (attempts > 0),
  completed_at timestamptz not null default now(),
  primary key (user_id, exercise_set_id)
);

alter table public.profiles enable row level security;
alter table public.exercise_progress enable row level security;

create policy "Users read their profile"
on public.profiles for select
using (auth.uid() = id);

create policy "Users read their progress"
on public.exercise_progress for select
using (auth.uid() = user_id);

create policy "Users insert their progress"
on public.exercise_progress for insert
with check (auth.uid() = user_id);

create policy "Users update their progress"
on public.exercise_progress for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, username)
  values (new.id, lower(new.raw_user_meta_data ->> 'username'));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create or replace function public.record_exercise_result(
  p_lesson_id text,
  p_exercise_set_id text,
  p_score smallint
)
returns void
language plpgsql
security invoker
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Authentication required';
  end if;
  if p_lesson_id not in ('pronouns', 'future', 'reflexive', 'present') then
    raise exception 'Unknown lesson';
  end if;
  if p_score < 0 or p_score > 10 then
    raise exception 'Invalid score';
  end if;

  insert into public.exercise_progress (
    user_id, lesson_id, exercise_set_id, best_score, attempts, completed_at
  )
  values (
    auth.uid(), p_lesson_id, p_exercise_set_id, p_score, 1, now()
  )
  on conflict (user_id, exercise_set_id) do update
  set best_score = greatest(exercise_progress.best_score, excluded.best_score),
      attempts = exercise_progress.attempts + 1,
      completed_at = now();
end;
$$;

grant execute on function public.record_exercise_result(text, text, smallint) to authenticated;
