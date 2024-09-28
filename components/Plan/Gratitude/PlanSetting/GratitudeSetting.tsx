import {
  View,
  Text,
  Modal,
  ModalProps,
  ImageBackground,
  Alert,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SwitchInput from "@/components/Shared/Input/SwitchInput";
import CustomButton from "@/components/Shared/Button/CustomButton";
import TimeInput from "@/components/Shared/Input/TimeInput";
import { useLocalSearchParams, router } from "expo-router";
import { useGetUserId } from "@/hooks/useGetUserId";
import useLocalNotification from "@/hooks/useLocalNotification";
import { planDeleteAlert } from "@/utils/Alert/planDeleteAlert";
import * as Notifications from "expo-notifications"; // 알림 가져오기 위한 import

// 기존 코드 유지
const STORAGE_KEYS = {
  notification: "@gratitude_notification_enabled",
  notificationId: "@gratitude_notification_id",
  time: "@gratitude_notification_time",
};

const GratitudeSetting = () => {
  const [notification, setNotification] = useState(false);
  const [time, setTime] = useState(new Date());
  const [notificationId, setNotificationId] = useState("");

  const toggleSwitch = () => setNotification((previousState) => !previousState);
  const planNameParams = useLocalSearchParams();
  const planName = planNameParams.contentPlanName as string;
  const { data: userId } = useGetUserId();
  const {
    triggerDailyNotification,
    cancelNotificationById,
    cancelAllNotifications,
  } = useLocalNotification();

  // Load saved notification settings on component mount
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const storedNotification = await AsyncStorage.getItem(
          STORAGE_KEYS.notification
        );
        const storedNotificationId = await AsyncStorage.getItem(
          STORAGE_KEYS.notificationId
        );
        const storedTime = await AsyncStorage.getItem(STORAGE_KEYS.time);

        if (storedNotification !== null) {
          setNotification(JSON.parse(storedNotification));
        }
        if (storedNotificationId) {
          setNotificationId(storedNotificationId);
        }
        if (storedTime) {
          setTime(new Date(storedTime));
        }
      } catch (error) {
        console.error("Error loading notification settings:", error);
      }
    };

    loadSettings();
  }, []);

  // 알림 클릭 시 이벤트 리스너 추가
  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        // 여기에 알림을 클릭했을 때 수행할 동작을 추가하세요.

        router.push("/plan/plan/gratitude"); // 특정 화면으로 이동
      }
    );

    return () => {
      subscription.remove(); // 컴포넌트가 언마운트 될 때 리스너 제거
    };
  }, []);

  // Save notification settings to AsyncStorage
  const saveSettings = async (id: string) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.notification,
        JSON.stringify(notification)
      );
      await AsyncStorage.setItem(
        STORAGE_KEYS.notificationId,
        id || notificationId
      );
      await AsyncStorage.setItem(STORAGE_KEYS.time, time.toISOString());
      console.log("Notification settings saved.");
    } catch (error) {
      console.error("Error saving notification settings:", error);
    }
  };
  const handleSave = async () => {
    // If the notification toggle is off, cancel any existing notifications and don't schedule a new one
    if (!notification) {
      if (notificationId) {
        try {
          await cancelNotificationById(notificationId); // Cancel existing notification
          console.log(
            "Notification canceled as the switch is off:",
            notificationId
          );
          setNotificationId(""); // Reset notificationId as it's been canceled
          await saveSettings(""); // Save settings with no notificationId
          Alert.alert(
            "Notification Canceled",
            "The notification has been canceled."
          );
        } catch (error) {
          console.error(
            "Error canceling the notification when the switch is off:",
            error
          );
          Alert.alert("Error", "Failed to cancel the notification.");
        }
      }
      return; // Exit the function early as no new notification should be scheduled
    }

    // Existing notification logic if the switch is on
    if (notificationId) {
      try {
        await cancelNotificationById(notificationId); // Cancel the existing notification
        console.log("Previous notification canceled:", notificationId);
      } catch (error) {
        console.error("Error canceling previous notification:", error);
      }
    }

    try {
      const id = await triggerDailyNotification(
        "Gratitude Reminder",
        "Have you thanked today?",
        time.getHours(),
        time.getMinutes()
      );
      if (id) {
        setNotificationId(id); // Set the new notification ID
        await saveSettings(id); // Save the new notification settings
        console.log("New Notification ID:", id);
        Alert.alert("Success", "The notification has been saved.");
      }
    } catch (error) {
      console.error("Error handling save:", error);
      Alert.alert("Error", "Failed to save the notification.");
    }
  };

  const handleDelete = async () => {
    // Alert API로 사용자에게 확인 메시지 표시
    planDeleteAlert(planName, userId);
    // Optionally, clear the saved settings on delete
    await AsyncStorage.removeItem(STORAGE_KEYS.notification);
    await AsyncStorage.removeItem(STORAGE_KEYS.notificationId);
    await AsyncStorage.removeItem(STORAGE_KEYS.time);
  };

  return (
    <View className="bg-white flex justify-center w-full h-full">
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={30}
        keyboardOpeningTime={100}
      >
        <View className="flex-row justify-center mt-[30px]"></View>

        <View>
          <View className="mt-[70px]">
            <SwitchInput
              value={notification}
              onValueChange={toggleSwitch}
              title="Daily Notification"
            />
          </View>
          {notification && (
            <View className="mt-[70px]">
              <TimeInput
                title="Time"
                value={time}
                onChange={(event, selectedTime) =>
                  setTime(selectedTime || time)
                }
              />
            </View>
          )}
        </View>
        <View className="h-fit w-full mt-[30px] flex items-center mb-[60]"></View>
      </KeyboardAwareScrollView>

      <View className="w-full h-[45px] mt-[35px] fixed bottom-20 flex flex-row justify-between">
        <View className="w-[48%] h-[45px] flex-row justify-center">
          <CustomButton
            title="Save"
            titleSize={18}
            backgroundColor="yomGreen"
            activeBackgroundColor="yomDarkGreen"
            textColor="yomWhite"
            onPress={() => {
              handleSave();
            }}
          />
        </View>
        <View className="w-[48%]">
          <CustomButton
            title="Remove Plan"
            titleSize={18}
            backgroundColor="yomRed"
            activeBackgroundColor="yomWhite"
            textColor="yomWhite"
            onPress={() => {
              handleDelete();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default GratitudeSetting;
