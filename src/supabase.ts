import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://waumtfpjtppbxtsnocgg.supabase.co";

const supabaseKey =
  "sb_publishable_46RupFwNRDhHTSqg0ryT7g_vwCwa0T3";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);