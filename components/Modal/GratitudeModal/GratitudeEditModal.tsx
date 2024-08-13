import React, { useState } from "react";
import { View, Text, Modal, ModalProps, ImageBackground } from "react-native";
import ModalHeader from "@/components/Modal/ModalHeader";
import CustomButton from "@/components/Button/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useModal } from "@/shared/store/use-modal-store";
import SwitchInput from "@/components/Input/SwitchInput";
import TimeInput from "@/components/Input/TimeInput";

interface GratitudeModalProps extends ModalProps {
  visible: boolean;
}

const GratitudeEditModal: React.FC<GratitudeModalProps> = ({ visible }) => {
  const { onClose } = useModal();
  const [notification, setNotification] = useState(false);
  const toggleSwitch = () => setNotification((previousState) => !previousState);
  const [time, setTime] = useState(new Date());

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      presentationStyle="pageSheet"
      animationType="slide"
    >
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <View style={{ width: "90%", flex: 1 }}>
          <KeyboardAwareScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            extraScrollHeight={30}
            keyboardOpeningTime={100}
          >
            <View className="w-full h-[200px] mt-[60px]">
              <ImageBackground
                source={require("@/assets/images/note-icon.png")}
                className="w-full h-full flex justify-center items-center"
                resizeMode="contain"
                style={{ borderRadius: 20 }}
              />
            </View>

            <View>
              <View className="mt-[70px]">
                <SwitchInput
                  value={notification}
                  onValueChange={toggleSwitch}
                />
              </View>
              {notification && (
                <View className="mt-[50px]">
                  <TimeInput
                    onChange={(event, selectedTime) =>
                      setTime(selectedTime || time)
                    }
                  />
                </View>
              )}
            </View>
            <View className="h-fit w-full mt-[30px] flex items-center mb-[60]"></View>
          </KeyboardAwareScrollView>
          <View className="w-full h-[50px] fixed bottom-10">
            <CustomButton
              title="저장하기"
              titleSize={18}
              backgroundColor="yomGreen"
              activeBackgroundColor="yomDarkGreen"
              textColor="yomWhite"
              onPress={() => {
                onClose();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GratitudeEditModal;
