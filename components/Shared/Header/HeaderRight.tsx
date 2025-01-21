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
import useYomCoinStore from "@/shared/store/yomCoinStore";

const HeaderRight = () => {
  const { data, loading, error, refetch } = useGetYomCoin();

  const { yomCoin, setYomCoin } = useYomCoinStore();

  // data 값이 변경되었을 때 yomCoin 상태를 업데이트하는 useEffect
  useEffect(() => {
    if (data !== undefined) {
      setYomCoin(data);
    }
  }, [data, setYomCoin]); // data나 setYomCoin이 변경될 때마다 실행

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

  return (
    <View className="flex-row items-center justify-between  w-[90px]">
      <View className="flex-row items-center">
        <Image
          source={require("@/assets/images/icons/coin-icon.png")}
          style={{ width: 22, height: 22 }}
        />
        {loading ? (
          <ActivityIndicator size="small" color="#FFA500" />
        ) : (
          <Text className="font-[WantedSB] ml-2 text-yomOrange text-[15px]">
            {yomCoin}
          </Text>
        )}
      </View>

      <Link
        href="/notification"
        key={notification.length}
        onPress={() => setNotification([])} // 알림 클릭 시 알림 비우기
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
