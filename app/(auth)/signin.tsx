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
import SignInButton from "@/components/Button/SignInButton";
import { Link } from "expo-router";

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
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
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
            placeholder="email adress"
            autoCapitalize={"none"}
            className="border border-yomGray h-[50px] rounded-2xl p-3 w-full font-[WantedR] text-[14px]"
          />

          <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="password"
            autoCapitalize={"none"}
            className="border border-yomGray h-[50px] rounded-2xl p-3 w-full font-[WantedR] text-[14px]"
          />
        </View>
        <View className="w-full h-[46px] border-yomGray border-[0.5px] rounded-3xl mt-[25px]">
          <SignInButton
            title="Sign in"
            titleSize={14}
            backgroundColor="yomWhite"
            textColor="yomBlack"
            activeBackgroundColor="yomGreen"
            onPress={() => signInWithEmail()}
          />
        </View>

        <View className="flex-row items-center justify-between my-[40px]">
          <View className="w-[40%] border-b border-yomGray"></View>
          <Text className="font-[WantedM] text-[16px]">or</Text>
          <View className="w-[40%] border-b border-yomGray"></View>
        </View>

        <View className="w-full h-[46px] border-yomGray border-[0.5px] rounded-3xl">
          <SignInButton
            title="Sign in with Google"
            titleSize={14}
            backgroundColor="yomWhite"
            textColor="yomBlack"
            activeBackgroundColor="yomGreen"
            onPress={() => signInWithEmail()}
          />
        </View>

        <View className="w-full flex-row justify-center mt-[40px]">
          <Text className="text-yomGray mr-1 font-[WantedM]">
            Are you new to yom?{" "}
          </Text>
          <Link href="/(auth)/signup">
            <Text className="text-yomGray font-[WantedM] underline">
              Sign up
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
