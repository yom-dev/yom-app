import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import useLocalNotifications from "@/hooks/useLocalNotification";

interface NotificationCardWideProps {
  identifier: string;
  notificationType: string;
  hour: number;
  minute: number;
  onUpdate: () => void; // update 값을 증가시키는 함수
}

const NotificationCardWide: React.FC<NotificationCardWideProps> = ({
  identifier,
  notificationType,
  hour,
  minute,
  onUpdate,
}) => {
  const { cancelNotificationById } = useLocalNotifications();

  const handleDeleteNotification = (id: string) => {
    // Alert with confirmation
    Alert.alert(
      "Delete Notification",
      "Are you sure you want to delete this notification?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            await cancelNotificationById(id); // 알림 취소
            onUpdate(); // update 값 증가
          },
        },
      ],
      { cancelable: true }
    );
  };

  // 한 자리수일 경우 0을 붙여주는 로직
  const formattedHour = String(hour).padStart(2, "0");
  const formattedMinute = String(minute).padStart(2, "0");

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
                {formattedHour}:{formattedMinute}
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
