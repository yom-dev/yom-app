import { View, Text } from "react-native";
import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import NotificationCardWide from "@/components/notification/NotificationCardWide";

const PlanNotificationSetting = () => {
  return (
    <View className="w-full h-[90%] mt-[30px]">
      <ScrollView>
        <NotificationCardWide
          identifier="asdf"
          hour="13"
          minute="13"
          notificationType="Daily"
        />
      </ScrollView>
    </View>
  );
};

export default PlanNotificationSetting;
