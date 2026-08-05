alter table public.exercise_progress
  drop constraint if exists exercise_progress_lesson_id_check;

alter table public.exercise_progress
  add constraint exercise_progress_lesson_id_check
  check (lesson_id in ('pronouns', 'future', 'conditional', 'reflexive', 'present'));

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
  if p_lesson_id not in ('pronouns', 'future', 'conditional', 'reflexive', 'present') then
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
