import { serve } from "https://deno.land/x/sift@0.6.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.14.0";

console.log("Delete user account function up and running");

serve({
  "/": async (req: Request) => {
    try {
      // Create instance of SupabaseClient
      const supabaseClient = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
      );

      // Get the authorization header from the request.
      const authHeader = req.headers.get("Authorization");

      // Check if authHeader is not null before trying to replace
      if (!authHeader) {
        throw new Error("Authorization header is missing");
      }

      // Get JWT from auth header
      const jwt = authHeader.replace("Bearer ", "");

      // Get the user object
      const {
        data: { user },
      } = await supabaseClient.auth.getUser(jwt);

      if (!user) throw new Error("No user found for JWT!");

      // Call deleteUser method and pass user's ID
      const { data, error } = await supabaseClient.auth.admin.deleteUser(
        user.id
      );

      if (error) throw error;

      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    } catch (error) {
      // `error`를 `Error` 타입으로 단언하여 `error.message` 속성에 접근할 수 있게 함
      const err = error as Error;
      return new Response(JSON.stringify({ error: err.message }), {
        headers: { "Content-Type": "application/json" },
        status: 400,
      });
    }
  },
});
