import { supabase } from "../supabase";
import { router } from "expo-router";

export function getSession() {
  // named export로 변경
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (session) {
      router.replace("/(tabs)/home");
    } else {
      // router.replace("/(auth)/signin");
      console.log("User is not logged in");
    }
  });
}
