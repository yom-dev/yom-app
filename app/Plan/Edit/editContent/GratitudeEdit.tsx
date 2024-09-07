import { View, Text, Modal, ModalProps, ImageBackground } from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SwitchInput from "@/components/Shared/Input/SwitchInput";
import CustomButton from "@/components/Shared/Button/CustomButton";
import TimeInput from "@/components/Shared/Input/TimeInput";

interface GratitudeEditProps {
  visible: boolean;
}

const GratitudeEdit: React.FC<GratitudeEditProps> = ({ visible }) => {
  const [notification, setNotification] = useState(false);
  const toggleSwitch = () => setNotification((previousState) => !previousState);
  const [time, setTime] = useState(new Date());
  return (
    <View className="bg-yomWhite flex justify-center w-full h-full">
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={30}
        keyboardOpeningTime={100}
      >
        <View className="flex-row justify-center mt-[20px]">
          <Text className="text-[24px] font-[WantedB] text-yomBlack">
            하루감사
          </Text>
        </View>
        <View className="w-full h-[200px] mt-[60px]">
          <ImageBackground
            source={require("@/assets/images/icons/note-icon.png")}
            className="w-full h-full flex justify-center items-center"
            resizeMode="contain"
            style={{ borderRadius: 20 }}
          />
        </View>

        <View>
          <View className="mt-[70px]">
            <SwitchInput value={notification} onValueChange={toggleSwitch} />
          </View>
          {notification && (
            <View className="mt-[50px]">
              <TimeInput
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
      <View className="w-full h-[50px] fixed bottom-10">
        <CustomButton
          title="저장하기"
          titleSize={18}
          backgroundColor="yomGreen"
          activeBackgroundColor="yomDarkGreen"
          textColor="yomWhite"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default GratitudeEdit;
