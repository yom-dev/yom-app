import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { SupabaseInfo } from "@/constants/SupabaseInfo";

const supabaseUrl = SupabaseInfo.supabaseUrl;
const supabaseAnonKey = SupabaseInfo.supabaseAnonKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
