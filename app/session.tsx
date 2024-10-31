// import { useState, useEffect } from "react";
// import { supabase } from "@/utils/supabase";

// import { View } from "react-native";
// import { Session } from "@supabase/supabase-js";
// import { Redirect } from "expo-router";

// export default function App() {
//   const [session, setSession] = useState<Session | null>(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });
//   }, []);

//   return (
//     <View>
//       {session && session.user ? (
//         <Redirect href="/(tabs)/home" />
//       ) : (
//         <Redirect href="/(auth)/signin" />
//       )}
//     </View>
//   );
// }

import { useState, useEffect } from "react";
import { supabase } from "@/utils/Supabase/supabase";
import { View, ActivityIndicator } from "react-native";
import { Session } from "@supabase/supabase-js";
import { router } from "expo-router";
import NetInfo from "@react-native-community/netinfo";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace("/(tabs)/home");
      } else {
        router.replace("/(auth)/signin");
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.replace("/(tabs)/home");
      } else {
        router.replace("/(auth)/signin");
      }
    });
  }, []);
  return (
    <View className="flex w-full h-full justify-center items-center bg-white">
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );
}
