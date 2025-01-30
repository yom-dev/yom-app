import {
  Alert,
  View,
  Text,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import TimeInput from "@/components/Shared/Input/TimeInput";
import CustomButton from "@/components/Shared/Button/CustomButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import useLocalNotifications from "@/hooks/useLocalNotification";
import ModalHeader from "../ModalHeader";
import { NotifyMsg } from "@/constants/NotifyMsg";
import { router } from "expo-router";

interface SetInitialNotificationModalProps {
  visible: boolean;
  onClose: () => void;
  planName: string | string[]; // NotifyMsg 키만 허용
}

const SetInitialNotificationModal: React.FC<
  SetInitialNotificationModalProps
> = ({ visible, onClose, planName }) => {
  const [time, setTime] = useState(new Date());
  const { triggerDailyNotification } = useLocalNotifications();
  const [loading, setLoading] = useState(false);

  const notifyData = NotifyMsg[planName as string];

  const notifyTitle = notifyData.title;
  const notifyBody = notifyData.body;

  const handleSave = async () => {
    try {
      setLoading(true);
      const id = await triggerDailyNotification(
        notifyTitle,
        notifyBody,
        time.getHours(),
        time.getMinutes(),
        planName as string
      );
    } catch (error) {
      console.error("Error handling save:", error);
      Alert.alert("Error", "Failed to save the notification.");
    } finally {
      router.replace("/(tabs)/plan");
      onClose();

      setLoading(false);
    }
  };

  const handleCancel = () => {
    onClose();
    router.replace("/(tabs)/plan");
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-[80%] h-[38%] p-4 bg-white rounded-lg flex justify-between">
          <View className="w-full h-fit flex justify-center items-center  ">
            <Text className="text-[24px] font-[WantedM]">
              Notification Setting
            </Text>
          </View>

          <View className="h-[150px] w-fit ">
            <DateTimePicker
              mode="time"
              display="spinner"
              value={time}
              onChange={(event, selectedTime) => setTime(selectedTime || time)}
              style={{ flex: 1 }}
            />
          </View>
          <Text className="font-[WantedM] text-gray-500 text-[10px] text-center">
            Want a reminder? Pick a time, and we'll notify you.
          </Text>
          <View className="w-full h-[40px]  flex-row justify-between items-center">
            <TouchableOpacity
              onPress={handleSave}
              className="w-[48%] h-full flex justify-center items-center rounded-lg bg-yomGreen"
            >
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Text className="font-[WantedM] text-white">Save</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleCancel}
              className="w-[48%] h-full flex justify-center items-center rounded-lg bg-yomRed"
            >
              <Text className="font-[WantedM] text-white">No, thanks.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SetInitialNotificationModal;
