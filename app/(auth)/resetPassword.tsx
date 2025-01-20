import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  AppState,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { supabase } from "@/utils/supabase";
import { Button, Input } from "@rneui/themed";
import SignInButton from "@/components/Shared/Button/SignInButton";
import { Link, useRouter } from "expo-router";

const resetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleResetPW() {
    console.log;
    setLoading(true);
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://yomapps.com/updatePassword",
    });
    if (error) {
      Alert.alert("Invalid email / password");
    } else {
      Alert.alert("Password reset link sent! Please check your email.", "", [
        {
          text: "OK",
          onPress: () => router.replace("/(auth)/signin"),
        },
      ]);
    }
    setLoading(false);
  }

  if (loading) {
    // 로딩 상태일 때 보여줄 컴포넌트
    return (
      <View className="bg-white h-full w-full flex items-center justify-center">
        <ActivityIndicator size="large" />
        <Text className="text-yomGray mt-4 font-[WantedM]">
          Sending Link to your email......
        </Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView className="bg-white h-full w-full flex items-center justify-center">
      <View className="w-[90%] h-full flex justify-center">
        <View className="flex items-center justify-end ">
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
        </View>

        <View className="w-full h-[46px]  rounded-3xl mt-[25px]">
          <SignInButton
            title={"Submit"}
            titleSize={14}
            backgroundColor="yomWhite"
            textColor="yomBlack"
            activeBackgroundColor="yomGreen"
            onPress={() => {
              handleResetPW();
            }}
          />
        </View>

        {/* <View className="flex-row items-center justify-between my-[40px]">
            <View className="w-[40%] border-b border-yomGray"></View>
            <Text className="font-[WantedM] text-[16px]">or</Text>
            <View className="w-[40%] border-b border-yomGray"></View>
          </View> */}

        {/* <View className="w-full h-[46px] border-yomGray border-[0.5px] rounded-3xl">
            <GoogleSignInButton />
          </View> */}

        <View className="w-full flex-row justify-center mt-[40px]">
          <Text className="text-yomGray mr-1 font-[WantedM]">Go back to</Text>
          <Link href="/(auth)/signin">
            <Text className="text-yomGray font-[WantedM] underline">
              Sign in.
            </Text>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default resetPassword;
