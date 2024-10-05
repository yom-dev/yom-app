import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

interface NotificationCardWideProps {
  identifier: string;
  notificationType: string;
  hour: string;
  minute: string;
}

const NotificationCardWide: React.FC<NotificationCardWideProps> = ({
  identifier,
  notificationType,
  hour,
  minute,
}) => {
  const handleDeleteNotification = (id: string) => {
    console.log("delete notification with id: ", id);
  };
  const handlePress = () => {};

  return (
    <View className="w-full h-[80px] rounded-xl ">
      <LinearGradient
        colors={["#6A96CF", "#746ACC"]}
        start={[1, 0]}
        end={[0, 1]}
        style={{ height: "100%", width: "100%", borderRadius: 25 }}
      >
        <View className="w-full h-full flex justify-center items-center px-[30px]">
          <View className="w-full h-[10%]">
            <Text className="font-[WantedM] text-white text-[8px]">
              Notification
            </Text>
          </View>
          <View className="w-full h-[40%] flex-row">
            <View className="w-[50%] flex justify-center">
              <Text className="font-[WantedB] text-white text-[26px]">
                {notificationType}
              </Text>
            </View>
            <View className="w-[33%] flex justify-center">
              <Text className="font-[WantedSB] text-white text-[24px]">
                {hour}:{minute}
              </Text>
            </View>

            <TouchableOpacity
              className="w-[17%] flex-row justify-end items-center"
              onPress={() => handleDeleteNotification(identifier)}
            >
              <Ionicons name="trash-outline" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default NotificationCardWide;
