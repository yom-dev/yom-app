import {
  View,
  Text,
  Modal,
  ModalProps,
  ImageBackground,
  Alert,
} from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SwitchInput from "@/components/Shared/Input/SwitchInput";
import CustomButton from "@/components/Shared/Button/CustomButton";
import TimeInput from "@/components/Shared/Input/TimeInput";
import { useLocalSearchParams, router } from "expo-router";
import { useGetUserId } from "@/hooks/useGetUserId";
import useLocalNotification from "@/hooks/useLocalNotification";
import { planDeleteAlert } from "@/utils/Alert/planDeleteAlert";

const GratitudeSetting = () => {
  const [notification, setNotification] = useState(false);
  const toggleSwitch = () => setNotification((previousState) => !previousState);
  const [time, setTime] = useState(new Date());
  const planNameParams = useLocalSearchParams();
  const planName = planNameParams.contentPlanName as string;
  const { data: userId } = useGetUserId();
  const { triggerScheduledNotification, cancelNotificationById } =
    useLocalNotification();
  const [notificationId, setNotificationId] = useState("");

  const handleSave = async () => {
    cancelNotificationById(notificationId); // Cancel the existing notification if it exists
    try {
      const id = await triggerScheduledNotification(
        "저장됨",
        "설정이 저장되었습니다.",
        time.getHours(),
        time.getMinutes()
      );
      if (id) {
        setNotificationId(id); // Set the returned ID if scheduling was successful
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
