import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { googleLogin } from "@/utils/googleLogin";
import { Image } from "expo-image";

const GoogleSignInButton = () => {
  return (
    <TouchableOpacity
      onPress={console.log("Google Sign In")}
      className="w-full h-full flex-row items-center justify-center px-3"
    >
      <View className="w-[50%] flex-row justify-between items-center">
        <Image
          source={require("@/assets/images/google-icon.png")}
          width={18}
          height={18}
          contentFit="cover"
        />
        <View className="">
          <Text className="font-[WantedM] text-[14px]">
            Sign in with Google
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleSignInButton;
