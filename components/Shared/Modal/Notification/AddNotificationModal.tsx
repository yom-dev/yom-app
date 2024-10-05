import { Alert, View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import TimeInput from "@/components/Shared/Input/TimeInput";
import CustomButton from "@/components/Shared/Button/CustomButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import useLocalNotifications from "@/hooks/useLocalNotification";
interface AddNotificationModalProps {
  isVisible: boolean;
  onClose: () => void;
  onUpdate: () => void; // update 값을 증가시키는 함수
  planName: string;
}

const AddNotificationModal: React.FC<AddNotificationModalProps> = ({
  isVisible,
  onClose,
  onUpdate,
  planName,
}) => {
  const [time, setTime] = useState(new Date());
  const { triggerDailyNotification } = useLocalNotifications();

  const handleSave = async () => {
    try {
      const id = await triggerDailyNotification(
        "Gratitude Reminder",
        "Have you thanked today?",
        time.getHours(),
        time.getMinutes(),
        planName
      );
      onClose();
      onUpdate();
    } catch (error) {
      console.error("Error handling save:", error);
      Alert.alert("Error", "Failed to save the notification.");
    }
  };

  return (
    <Modal
      visible={isVisible}
      presentationStyle="pageSheet"
      animationType="slide"
      onRequestClose={onClose} // Android에서 뒤로가기를 눌렀을 때 모달을 닫음
    >
      <View className="w-full h-full flex items-center justify-center">
        <Text className="text-[24px] font-[WantedM]">Daily Notifcation</Text>
        <View className="h-[200px]">
          <DateTimePicker
            mode="time"
            display="spinner"
            value={time}
            onChange={(event, selectedTime) => setTime(selectedTime || time)}
            style={{ flex: 1 }}
          />
        </View>

        <View className="w-full h-[45px]">
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
      </View>
    </Modal>
  );
};

export default AddNotificationModal;
