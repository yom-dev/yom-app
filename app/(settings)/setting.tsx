import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SettingSlot from "@/components/Setting/SettingSlot";
import { supabase } from "@/utils/supabase";
import { Link } from "expo-router";

const Setting = () => {
  const handleSignOut = () => {
    supabase.auth.signOut();
  };
  return (
    <View className="w-full h-full bg-yomWhite ">
      <View className="w-full flex justify-center items-center">
        <SettingSlot
          iconName="information"
          text="Info"
          href="/(settings)/setting"
        />
        <SettingSlot
          iconName="briefcase-sharp"
          text="Who we are"
          href="/(settings)/setting"
        />
        <SettingSlot
          iconName="people-circle-outline"
          text="Contributers"
          href="/(settings)/setting"
        />
        <SettingSlot
          iconName="at"
          text="Contact us"
          href="/(settings)/setting"
        />
        <TouchableOpacity
          onPress={handleSignOut}
          className="h-[50px] flex justify-center w-[90%]"
        >
          <Text className="text-yomRed font-semibold">Sign Out</Text>
        </TouchableOpacity>

        <Link href="/signin">
          <Text>Login</Text>{" "}
        </Link>
        <Link href="/(auth)/profileSetting">
          <Text>profileSetting</Text>{" "}
        </Link>
      </View>
    </View>
  );
};

export default Setting;
