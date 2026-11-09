import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
// Isikan nilai daripada Supabase Project Settings > API. JANGAN gunakan service_role key.
export const SUPABASE_URL = 'GANTIKAN_SUPABASE_URL';
export const SUPABASE_ANON_KEY = 'GANTIKAN_SUPABASE_ANON_KEY';
export const configured = SUPABASE_URL.startsWith('https://') && !SUPABASE_ANON_KEY.startsWith('GANTIKAN_');
export const supabase = configured ? createClient(SUPABASE_URL,SUPABASE_ANON_KEY) : null;
