import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  AppState,
  Text,
  TextInput,
} from "react-native";
import { signUpWithEmail } from "@/utils/Auth/SignUp/signUpWithEmail";
import SignInButton from "@/components/Shared/Button/SignInButton";
import { Link } from "expo-router";
import { supabase } from "@/utils/supabase";

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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View className="bg-white h-full w-full flex items-center ">
      <View className="w-[90%] h-full flex justify-center">
        <View className="flex items-center  justify-end">
          <Text className="font-[WantedSB] text-[40px]">yom</Text>
        </View>

        <View className="flex h-fit gap-4 mt-[60px]">
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email address (please enter a valid email)"
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

        <View className="w-full h-[46px]  mt-[45px]">
          <SignInButton
            title="Sign up"
            titleSize={14}
            backgroundColor="yomWhite"
            textColor="yomBlack"
            activeBackgroundColor="yomGreen"
            onPress={() =>
              signUpWithEmail(email, password, confirmPassword, setLoading)
            }
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
