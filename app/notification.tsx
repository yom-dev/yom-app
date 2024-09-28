import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import NotificationItem from "@/components/notification/NotificationItem";
import * as Notifications from "expo-notifications";
import { Notification as ExpoNotification } from "expo-notifications"; // 타입 임포트 및 별칭 사용

export default function Notification() {
  const [notifications, setNotifications] = useState<ExpoNotification[]>([]); // 별칭을 사용한 타입 지정

  async function fetchDeliveredNotifications() {
    const deliveredNotifications =
      await Notifications.getPresentedNotificationsAsync();
    // console.log(deliveredNotifications);
    setNotifications(deliveredNotifications);
  }

  useEffect(() => {
    fetchDeliveredNotifications();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "white",
        width: "100%",
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <Text style={{ fontSize: 32, color: "black", fontFamily: "WantedSB" }}>
        Notifications
      </Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.request.identifier}
        renderItem={({ item }) => (
          <NotificationItem
            title={item.request.content.title || "No Title"}
            body={item.request.content.body || "No Body"}
            date={item.date}
            id={item.request.identifier}
          />
        )}
        style={{ width: "100%", marginTop: 4 }}
      />
    </View>
  );
}
