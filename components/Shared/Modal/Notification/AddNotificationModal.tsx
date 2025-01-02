import { Alert, View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import TimeInput from "@/components/Shared/Input/TimeInput";
import CustomButton from "@/components/Shared/Button/CustomButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import useLocalNotifications from "@/hooks/useLocalNotification";
import ModalHeader from "../ModalHeader";
import { NotifyMsg } from "@/constants/NotifyMsg";

interface AddNotificationModalProps {
  isVisible: boolean;
  onClose: () => void;
  onUpdate: () => void; // update 값을 증가시키는 함수
  planName: string; // NotifyMsg 키만 허용
}

const AddNotificationModal: React.FC<AddNotificationModalProps> = ({
  isVisible,
  onClose,
  onUpdate,
  planName,
}) => {
  const [time, setTime] = useState(new Date());
  const { triggerDailyNotification } = useLocalNotifications();

  const notifyData = NotifyMsg[planName];

  const notifyTitle = notifyData.title;
  const notifyBody = notifyData.body;

  const handleSave = async () => {
    try {
      const id = await triggerDailyNotification(
        notifyTitle,
        notifyBody,
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
      <View className="w-full h-full flex items-center">
        <View className="w-[90%] h-full flex items-center justify-start">
          <ModalHeader title="Notification" onRequestClose={onClose} />

          <View className="w-full flex justify-center items-center flex-grow">
            <Text className="text-[24px] font-[WantedM] mb-4">
              Daily Notification
            </Text>
            <View className="h-[200px]">
              <DateTimePicker
                mode="time"
                display="spinner"
                value={time}
                onChange={(event, selectedTime) =>
                  setTime(selectedTime || time)
                }
                style={{ flex: 1 }}
              />
            </View>
          </View>

          {/* 버튼을 모달 맨 아래에 배치 */}
          <View className="w-full absolute left-0 right-0 h-[48px] bottom-6">
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
      </View>
    </Modal>
  );
};

export default AddNotificationModal;
