import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabase = createClient(
  'https://ahusdgmncrdfvjoaouez.supabase.co',
  process.env.SUPABASE_ANON_KEY as string,
)

export default supabase
