import 'react-native-url-polyfill/auto';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, Session } from '@supabase/supabase-js';
import { Platform } from 'react-native';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

const storage = Platform.OS === 'web' ? undefined : AsyncStorage;

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        storage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: Platform.OS === 'web',
      },
    })
  : null;

export type UserProgress = {
  exercise_set_id: string;
  lesson_id: string;
  best_score: number;
  attempts: number;
  completed_at: string;
};

const usernamePattern = /^[a-z0-9._-]{3,24}$/;

export function normalizeUsername(value: string) {
  return value.trim().toLocaleLowerCase('cs-CZ');
}

export function validateUsername(value: string) {
  return usernamePattern.test(normalizeUsername(value));
}

function usernameEmail(username: string) {
  return `${normalizeUsername(username)}@users.italian-grammar.app`;
}

export async function signUpWithUsername(username: string, password: string) {
  if (!supabase) throw new Error('Supabase není nastavený.');
  const normalized = normalizeUsername(username);
  return supabase.auth.signUp({
    email: usernameEmail(normalized),
    password,
    options: { data: { username: normalized } },
  });
}

export async function signInWithUsername(username: string, password: string) {
  if (!supabase) throw new Error('Supabase není nastavený.');
  return supabase.auth.signInWithPassword({
    email: usernameEmail(username),
    password,
  });
}

export async function loadProgress(session: Session | null) {
  if (!supabase || !session) return [] as UserProgress[];
  const { data, error } = await supabase
    .from('exercise_progress')
    .select('exercise_set_id, lesson_id, best_score, attempts, completed_at')
    .order('completed_at', { ascending: false });
  if (error) throw error;
  return (data ?? []) as UserProgress[];
}

export async function saveProgress(
  session: Session | null,
  lessonId: string,
  exerciseSetId: string,
  score: number,
) {
  if (!supabase || !session) return;
  const { error } = await supabase.rpc('record_exercise_result', {
    p_lesson_id: lessonId,
    p_exercise_set_id: exerciseSetId,
    p_score: score,
  });
  if (error) throw error;
}
