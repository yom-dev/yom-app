import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  AppState,
  Text,
  TextInput,
} from "react-native";
import { supabase } from "@/utils/supabase";
import { Button, Input } from "@rneui/themed";
import SignInButton from "@/components/Shared/Button/SignInButton";
import { Link, router } from "expo-router";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인 필드 추가
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
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
            // onPress: () => router.replace("/(auth)/profileSetting"),
          },
        ],
        { cancelable: false }
      );
    }

    setLoading(false);
  }

  return (
    <View className="bg-white h-full w-full flex items-center ">
      <View className="w-[90%] h-full">
        <View className="flex items-center h-[20%] justify-end">
          <Text className="font-[WantedSB] text-[40px]">yom</Text>
        </View>

        <View className="flex h-fit gap-4 mt-[60px]">
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email address"
            autoCapitalize={"none"}
            className="border border-yomGray h-[50px] rounded-2xl p-3 w-full font-[WantedR] text-[14px]"
          />

          <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="password"
            textContentType="none"
            autoCapitalize={"none"}
            className="border border-yomGray h-[50px] rounded-2xl p-3 w-full font-[WantedR] text-[14px]"
          />

          <TextInput
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            secureTextEntry={true}
            placeholder="confirm password"
            textContentType="none"
            autoCapitalize={"none"}
            className="border border-yomGray h-[50px] rounded-2xl p-3 w-full font-[WantedR] text-[14px]"
          />
        </View>

        <View className="w-full h-[46px] border-yomGray border-[0.5px] rounded-3xl mt-[25px]">
          <SignInButton
            title="Sign up"
            titleSize={14}
            backgroundColor="yomWhite"
            textColor="yomBlack"
            activeBackgroundColor="yomGreen"
            onPress={() => signUpWithEmail()}
          />
        </View>

        <View className="w-full flex-row justify-center mt-[40px]">
          <Text className="text-yomGray mr-1 font-[WantedM]">
            Already a member of yom?
          </Text>
          <Link href="/(auth)/signin">
            <Text className="text-yomGray font-[WantedM] underline">
              Sign in
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
