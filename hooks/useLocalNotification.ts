// useLocalNotifications.js
import { useEffect } from "react";
import * as Notifications from "expo-notifications";

// 알림을 설정하고 관리하는 커스텀 훅
const useLocalNotifications = () => {
  useEffect(() => {
    requestPermissions();

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
  }, []);

  // 알림 권한 요청 함수
  const requestPermissions = async () => {
    const settings = await Notifications.getPermissionsAsync();
    if (!settings.granted) {
      await Notifications.requestPermissionsAsync();
    }
  };

  // 즉시 알림 보내기 함수
  const triggerNotification = async (
    title = "로컬 알림",
    body = "이것은 로컬 푸시 알림입니다."
  ) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data: { data: "알림 데이터" },
      },
      trigger: null, // 즉시 알림 트리거
    });
  };

  return {
    triggerNotification,
  };
};

export default useLocalNotifications;
