import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
// Isikan nilai daripada Supabase Project Settings > API. JANGAN gunakan service_role key.
export const SUPABASE_URL = 'https://gfvagrkkjjsijitljvjp.supabase.co/rest/v1/';
export const SUPABASE_ANON_KEY = 'sb_publishable_7kpOi9oytPWM1Tctkd1BTg_ZnLUo9Qy';
export const configured = SUPABASE_URL.startsWith('https://') && !SUPABASE_ANON_KEY.startsWith('GANTIKAN_');
export const supabase = configured ? createClient(SUPABASE_URL,SUPABASE_ANON_KEY) : null;
