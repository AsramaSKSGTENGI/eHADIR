import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Konfigurasi Supabase e-HADIR SK SG TENGI
// Jangan gunakan service_role atau secret key.
export const SUPABASE_URL = 'https://gfvagrkkjjsijitljvjp.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_7kpOi9oytPWM1Tctkd1BTg_ZnLUo9Qy';
export const configured = SUPABASE_URL.startsWith('https://') && SUPABASE_ANON_KEY.length > 0 && !SUPABASE_ANON_KEY.startsWith('GANTIKAN_');
export const supabase = configured ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
