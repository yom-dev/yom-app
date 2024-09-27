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
import { supabase } from "@/utils/supabase";
import { useLocalSearchParams, router } from "expo-router";
import { useGetUserId } from "@/hooks/useGetUserId";
import useLocalNotification from "@/hooks/useLocalNotification";

const GratitudeSetting = () => {
  const [notification, setNotification] = useState(false);
  const toggleSwitch = () => setNotification((previousState) => !previousState);
  const [time, setTime] = useState(new Date());
  const planNameParams = useLocalSearchParams();
  const planName = planNameParams.contentPlanName as string;
  const { data: userId } = useGetUserId();
  const { triggerNotification } = useLocalNotification();

  const handleSave = async () => {
    // 로컬 알림을 트리거
    triggerNotification("저장됨", "설정이 저장되었습니다."); // 원하는 제목과 본문으로 변경 가능
  };

  const handleDelete = async () => {
    // Alert API로 사용자에게 확인 메시지 표시
    Alert.alert(
      "Remove Plan",
      "Your data will not be restored. Are you sure you want to remove this plan?",
      [
        {
          text: "Cancel",
          style: "cancel", // 취소 버튼
        },
        {
          text: "OK", // 확인 버튼
          onPress: async () => {
            const { data, error } = await supabase
              .from("myPlans")
              .update({ [planName]: false }) // 예시로 수정한 부분
              .eq("id", userId);

            if (error) {
              console.error("Error updating data:", error);
            } else {
              console.log("Data updated successfully:", data);
              router.push("/(tabs)/plan");
            }
          },
        },
      ],
      { cancelable: true } // 백 버튼으로 닫을 수 있게 설정
    );
  };
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
