
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://trpuzowfovxxolgqjyyc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRycHV6b3dmb3Z4eG9sZ3FqeXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NzAwMjAsImV4cCI6MjAxMjQ0NjAyMH0.4ZdV0yevaoOWeVLpuQr09cBPqzFHppnSIunPEi2jh58')
