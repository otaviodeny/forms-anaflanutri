import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mnalmeljheapdwidhlef.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uYWxtZWxqaGVhcGR3aWRobGVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NzczMjYsImV4cCI6MjA4NjI1MzMyNn0.7UjIl5gHnyped4oyjaj2fwhYA5oi1aEhlt8edgZ58mw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
