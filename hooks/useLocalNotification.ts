import { useEffect } from "react";
import * as Notifications from "expo-notifications";

// 알림을 설정하고 관리하는 커스텀 훅
const useLocalNotifications = () => {
  // 훅 호출 시 알림 권한 요청 및 알림 핸들러 설정
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
    try {
      const settings = await Notifications.getPermissionsAsync();
      if (!settings.granted) {
        await Notifications.requestPermissionsAsync();
      }
    } catch (error) {
      console.error("Error requesting permissions:", error);
    }
  };

  // 즉시 알림 보내기 함수
  const triggerNotification = async (
    title = "로컬 알림",
    body = "이것은 로컬 푸시 알림입니다."
  ) => {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title,
          body,
          data: { data: "알림 데이터" },
        },
        trigger: null,
      });
    } catch (error) {
      console.error("Error triggering notification:", error);
    }
  };

  // 예약 알림 보내기 함수
  const triggerScheduledNotification = async (
    title = "로컬 알림",
    body = "이것은 로컬 푸시 알림입니다.",
    hour = 9,
    minute = 0
  ) => {
    try {
      const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title,
          body,
          data: { data: "알림 데이터" },
        },
        trigger: {
          repeats: true,
          hour,
          minute,
        },
      });
      return notificationId; // Return the notification ID
    } catch (error) {
      console.error("Error scheduling notification:", error);
      return null; // Return null in case of an error
    }
  };

  // 알림 ID로 특정 알림 취소 함수
  const cancelNotificationById = async (id: string) => {
    try {
      await Notifications.cancelScheduledNotificationAsync(id);
    } catch (error) {
      console.error("Error canceling notification:", error);
    }
  };

  // 모든 예약된 알림 취소 함수
  const cancelAllNotifications = async () => {
    try {
      await Notifications.cancelAllScheduledNotificationsAsync();
    } catch (error) {
      console.error("Error canceling all notifications:", error);
    }
  };

  return {
    triggerNotification,
    triggerScheduledNotification,
    cancelNotificationById,
    cancelAllNotifications,
  };
};

export default useLocalNotifications;
