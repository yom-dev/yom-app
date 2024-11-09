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

// import { serve } from "https://deno.land/x/sift@0.6.0/mod.ts";
// import { createClient } from "https://esm.sh/@supabase/supabase-js@2.14.0";

// console.log(`Function "delete-user2" up and running!`);

// export const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Headers":
//     "authorization, x-client-info, apikey, content-type",
// };

// serve({
//   "/": async (req: Request) => {
//     if (req.method === "OPTIONS") {
//       return new Response("ok", { headers: corsHeaders });
//     }
//     try {
//       console.log("Authorization Header:", req.headers.get("Authorization"));

//       // 일반 사용자 권한의 Supabase 클라이언트
//       const supabaseClient = createClient(
//         Deno.env.get("SUPABASE_URL") ?? "",
//         Deno.env.get("SUPABASE_ANON_KEY") ?? "",
//         {
//           global: {
//             headers: { Authorization: req.headers.get("Authorization")! },
//           },
//         }
//       );

//       // 현재 로그인한 사용자 정보 가져오기
//       const {
//         data: { user },
//         error: authError,
//       } = await supabaseClient.auth.getUser();
//       if (authError)
//         throw new Error(`Authentication error: ${authError.message}`);
//       if (!user) throw new Error("Failed to fetch authenticated user.");
//       console.log("User to delete:", user.id);

//       // 관리자 권한의 Supabase 클라이언트 생성
//       const supabaseAdmin = createClient(
//         Deno.env.get("SUPABASE_URL") ?? "",
//         Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
//       );

//       // 사용자 계정 삭제
//       const { data: deletionData, error: deletionError } =
//         await supabaseAdmin.auth.admin.deleteUser(user.id);
//       if (deletionError) {
//         console.error("Error deleting user:", deletionError.message);
//         throw new Error(`User deletion error: ${deletionError.message}`);
//       }
//       console.log("User deleted successfully:", deletionData);

//       // 성공 응답 반환
//       return new Response(
//         JSON.stringify({
//           message: "User deleted successfully",
//           data: deletionData,
//         }),
//         {
//           headers: { ...corsHeaders, "Content-Type": "application/json" },
//           status: 200,
//         }
//       );
//     } catch (error) {
//       const errorMessage = (error as Error).message;
//       console.error("Error in deletion process:", errorMessage);
//       return new Response(JSON.stringify({ error: errorMessage }), {
//         headers: { ...corsHeaders, "Content-Type": "application/json" },
//         status: 400,
//       });
//     }
//   },
// });

// import { serve } from "https://deno.land/x/sift@0.6.0/mod.ts";
// import { createClient } from "https://esm.sh/@supabase/supabase-js@2.14.0";

// console.log(`Function "user-self-deletion4" up and running!`);

// export const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Headers":
//     "authorization, x-client-info, apikey, content-type",
// };

// serve({
//   "/": async (req: Request) => {
//     if (req.method === "OPTIONS") {
//       return new Response("ok", { headers: corsHeaders });
//     }
//     try {
//       const supabaseClient = createClient(
//         Deno.env.get("SUPABASE_URL") ?? "",
//         Deno.env.get("SUPABASE_ANON_KEY") ?? "",
//         {
//           global: {
//             headers: { Authorization: req.headers.get("Authorization")! },
//           },
//         }
//       );

//       // 현재 로그인한 사용자 정보 가져오기
//       const {
//         data: { user: user },
//         error: authError,
//       } = await supabaseClient.auth.getUser();
//       if (authError)
//         throw new Error(`Authentication error: ${authError.message}`);

//       // 사용자 프로필 정보 가져오기
//       const { data: profiles, error: userError } = await supabaseClient
//         .from("profiles")
//         .select("id, avatar_url");
//       if (userError)
//         throw new Error(`Profile fetch error: ${userError.message}`);

//       // 사용자 ID와 아바타 URL 로깅
//       const user_id = profiles[0]?.id;
//       const user_avatar = profiles[0]?.avatar_url;
//       console.log("User ID to delete:", user_id);
//       console.log("User Avatar URL:", user_avatar);

//       if (!user_id) throw new Error("User ID not found in profile data");

//       // 관리자 권한의 Supabase 클라이언트 생성
//       const supabaseAdmin = createClient(
//         Deno.env.get("SUPABASE_URL") ?? "",
//         Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
//       );

//       // 아바타 삭제
//       const { data: avatar_deletion, error: avatar_error } =
//         await supabaseAdmin.storage.from("avatars").remove([user_avatar]);
//       if (avatar_error) {
//         console.error("Error deleting avatar:", avatar_error.message);
//         throw new Error(`Avatar deletion error: ${avatar_error.message}`);
//       }
//       console.log("Avatar deleted successfully:", avatar_deletion);

//       // 사용자 계정 삭제
//       const { data: deletion_data, error: deletion_error } =
//         await supabaseAdmin.auth.admin.deleteUser(user_id);
//       if (deletion_error) {
//         console.error("Error deleting user:", deletion_error.message);
//         throw new Error(`User deletion error: ${deletion_error.message}`);
//       }
//       console.log("User deleted successfully, user_id:", user_id);

//       // 성공 응답 반환
//       return new Response(
//         JSON.stringify({
//           message: "User deleted successfully",
//           data: deletion_data,
//         }),
//         {
//           headers: { ...corsHeaders, "Content-Type": "application/json" },
//           status: 200,
//         }
//       );
//     } catch (error) {
//       // 에러 메시지 캐스팅 및 로깅
//       const errorMessage = (error as Error).message;
//       console.error("Error in deletion process:", errorMessage);
//       return new Response(JSON.stringify({ error: errorMessage }), {
//         headers: { ...corsHeaders, "Content-Type": "application/json" },
//         status: 400,
//       });
//     }
//   },
// });
