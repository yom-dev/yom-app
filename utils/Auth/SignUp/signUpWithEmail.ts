import { Alert } from "react-native";
import { supabase } from "@/utils/Supabase/supabase";
import { router } from "expo-router";
import { validatePassword } from "@/utils/Auth/SignUp/validatePassword";

// 회원가입 함수
export async function signUpWithEmail(
  email: string,
  password: string,
  confirmPassword: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (password !== confirmPassword) {
    Alert.alert("Passwords do not match");
    return;
  }

  if (!validatePassword(password)) {
    Alert.alert(
      "Password must contain at least one uppercase letter, one number, and one letter."
    );
    return;
  }

  setLoading(true);
  const {
    data: { session },
    error,
  } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    Alert.alert(error.message);
    setLoading(false);
    return;
  }

  if (!session) {
    Alert.alert(
      "Please check your inbox for email verification!",
      "",
      [
        {
          text: "OK",
          onPress: () => router.replace("/(auth)/signin"),
        },
      ],
      { cancelable: false }
    );
  } else {
    router.push("/(auth)/profileSetting");

    Alert.alert(
      "Welcome to yom!",
      "Sign-up successful🎉",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
  }

  setLoading(false);
}
