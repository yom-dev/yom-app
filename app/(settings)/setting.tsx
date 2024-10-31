import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SettingSlot from "@/components/Page/SettingPage/SettingSlot";
import { supabase } from "@/utils/Supabase/supabase";
import { Link } from "expo-router";
import * as Notifications from "expo-notifications";
import { getScheduleNotifications } from "@/utils/Notifications/getScheduledNotifications";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const Setting = () => {
  const handleSignOut = () => {
    supabase.auth.signOut();
  };

  const handleCheckScheduledNotifications = getScheduleNotifications;

  return (
    <View className="w-full h-full bg-yomWhite ">
      <View className="w-full flex justify-center items-center">
        <SettingSlot
          iconName="information"
          text="Info"
          href="/(settings)/info"
        />
        <SettingSlot
          iconName="briefcase-sharp"
          text="About us"
          href="/(settings)/about-us"
        />
        <SettingSlot
          iconName="people-circle-outline"
          text="Contributers"
          href="/(settings)/contributers"
        />
        <SettingSlot
          iconName="at"
          text="Contact us"
          href="/(settings)/contact"
        />
        <TouchableOpacity
          onPress={handleSignOut}
          className="h-[50px] flex justify-center w-[90%]"
        >
          <Text className="text-yomRed font-semibold">Sign Out</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => {
            handleCheckScheduledNotifications;
          }}
          className="h-[50px] flex justify-center w-[90%]"
        >
          <Text className="text-yomRed font-semibold">
            CHECK SCHEDULED NOTIFICATIONS
          </Text>
        </TouchableOpacity> */}

        {/* <Link href="/signin">
          <Text>Login</Text>
        </Link>
        <Link href="/(auth)/profileSetting">
          <Text>profileSetting</Text>
        </Link> */}
      </View>
    </View>
  );
};

export default Setting;
