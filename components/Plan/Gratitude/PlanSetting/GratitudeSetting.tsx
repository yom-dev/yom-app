import { View, Text, Modal, ModalProps, ImageBackground } from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SwitchInput from "@/components/Shared/Input/SwitchInput";
import CustomButton from "@/components/Shared/Button/CustomButton";
import TimeInput from "@/components/Shared/Input/TimeInput";

const GratitudeSetting = () => {
  const [notification, setNotification] = useState(false);
  const toggleSwitch = () => setNotification((previousState) => !previousState);
  const [time, setTime] = useState(new Date());
  return (
    <View className="bg-white flex justify-center w-full h-full">
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={30}
        keyboardOpeningTime={100}
      >
        <View className="flex-row justify-center mt-[30px]">
          {/* <Text className="text-[24px] font-[WantedB] text-yomBlack">
          Setting
          </Text> */}
        </View>
        {/* <View className="w-full h-[200px] mt-[60px]">
          <ImageBackground
            source={require("@/assets/images/icons/note-icon.png")}
            className="w-full h-full flex justify-center items-center"
            resizeMode="contain"
            style={{ borderRadius: 20 }}
          />
        </View> */}

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
      <View className="w-full h-[45px] mt-[35px] fixed bottom-20">
        <CustomButton
          title="Save"
          titleSize={18}
          backgroundColor="yomGreen"
          activeBackgroundColor="yomDarkGreen"
          textColor="yomWhite"
          onPress={() => {
            console.log("저장하기");
          }}
        />
      </View>
    </View>
  );
};

export default GratitudeSetting;
