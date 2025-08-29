import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase config check:', { 
  hasUrl: !!supabaseUrl, 
  hasKey: !!supabaseAnonKey 
})

// Create a null client if environment variables are not available
// This prevents the app from crashing when Supabase isn't connected yet
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  const configured = !!(supabaseUrl && supabaseAnonKey && supabase)
  console.log('Supabase configured:', configured)
  return configured
}