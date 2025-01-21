import {
  View,
  Text,
  ActivityIndicator,
  AppState,
  AppStateStatus,
} from "react-native"; // ActivityIndicator 추가
import React, { FC, useState, useEffect } from "react";
import { Image } from "expo-image";
import { Link } from "expo-router";
import * as Notifications from "expo-notifications";
import useGetYomCoin from "@/hooks/useGetYomCoin";

const HeaderRight = () => {
  const { data, loading, error, refetch } = useGetYomCoin();

  useEffect(() => {
    refetch;
  }, []);

  const [notification, setNotification] = useState<
    Notifications.Notification[]
  >([]);
  const [appState, setAppState] = useState(AppState.currentState);

  async function fetchDeliveredNotifications() {
    const deliveredNotifications =
      await Notifications.getPresentedNotificationsAsync();
    setNotification(deliveredNotifications);
  }

  useEffect(() => {
    const fetchDeliveredNotifications = async () => {
      const deliveredNotifications =
        await Notifications.getPresentedNotificationsAsync();
      setNotification(deliveredNotifications);
    };

    const subscription = Notifications.addNotificationReceivedListener(
      fetchDeliveredNotifications
    );

    return () => {
      subscription.remove();
    };
  }, []);

  // 알림 수신 시 fetchDeliveredNotifications 호출로 알림 상태를 업데이트
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      fetchDeliveredNotifications
    );
    return () => {
      subscription.remove();
    };
  }, []);

  const handleNotificationClick = () => {
    setNotification([]); // 알림을 읽은 것으로 간주하여 배열을 빈 배열로 만듦
  };

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (appState.match(/inactive|background/) && nextAppState === "active") {
        fetchDeliveredNotifications();
      }
      setAppState(nextAppState);
    };

    const appStateListener = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      appStateListener.remove();
    };
  }, [appState]);

  // 네트워크 연결 상태를 감지하여 변경 시 처리

  return (
    <View className="flex-row items-center justify-between  w-[82px]">
      <View className="flex-row items-center">
        <Image
          source={require("@/assets/images/icons/coin-icon.png")}
          style={{ width: 22, height: 22 }}
        />
        {loading ? (
          <ActivityIndicator size="small" color="#FFA500" /> // 로딩 중일 때 ActivityIndicator 렌더링
        ) : (
          <Text className="font-[WantedSB] ml-2 text-yomOrange text-[15px]">
            {data}
          </Text>
        )}
      </View>

      <Link
        href="/notification"
        key={notification.length}
        onPress={handleNotificationClick}
      >
        {notification.length > 0 ? (
          <Image
            source={require("@/assets/images/icons/notification-unread-icon.png")}
            style={{ width: 22, height: 22 }}
          />
        ) : (
          <Image
            source={require("@/assets/images/icons/notification-icon.png")}
            style={{ width: 22, height: 22 }}
          />
        )}
      </Link>
    </View>
  );
};

export default HeaderRight;
