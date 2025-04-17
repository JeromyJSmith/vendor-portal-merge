
import { createClient } from '@supabase/supabase-js';

// Project-specific Supabase project details
const supabaseUrl = 'https://eegqwubvmjgfdbbngpdv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlZ3F3dWJ2bWpnZmRiYm5ncGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NDg4MDMsImV4cCI6MjA1OTEyNDgwM30.G90Ujxxz0aBQk2AvkysD6pGycOfDMTtCleFKKr_Dja8';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
  }
});

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => Boolean(supabaseUrl && supabaseAnonKey);
