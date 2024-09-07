import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomButton from "@/components/Shared/Button/CustomButton";
import InfoContent from "./infoContent";
import { Image } from "expo-image";
import { icons } from "@/constants/Icons";

// logos 객체의 타입을 정의합니다.
type PlanName = keyof typeof icons;

const InfoPage = () => {
  const { infoPlanName } = useLocalSearchParams();
  const handleSave = () => {};

  const infoData: { planName: PlanName; title: string; content: string } = {
    planName: "meditation", // 이 값은 logos의 키 중 하나로 제한됩니다.
    title: "Daily Gratitude",
    content:
      "Daily Gratitude is a plan to assist you with gratitude. Set a time when you can dedicate your life. Daily Gratitude is a plan to assist you with gratitude. Set a time when you can dedicate your life",
  };

  const icon = icons[infoData.planName];

  return (
    <View className="w-full h-full flex items-center bg-yomWhite">
      <View className="w-[90%] h-full">
        <ScrollView className="w-full h-full">
          {/* title */}
          <View className="flex-row justify-center mt-[20px]">
            <Text className="text-[24px] font-[WantedB] text-yomBlack">
              {infoData.title}
            </Text>
          </View>

          {/* image */}
          <View className="w-full h-[200px] mt-[50px]">
            <ImageBackground
              source={icon} // logos 객체에서 가져온 logo를 source에 적용
              className="w-full h-full flex justify-center items-center"
              resizeMode="contain"
            />
          </View>

          {/* content */}
          <View className="flex-row justify-center mt-[50px]">
            <InfoContent text={infoData.content} />
          </View>
        </ScrollView>

        {/* button */}
        <View className="w-full h-[50px] fixed bottom-10">
          <CustomButton
            title="Add to My Plan"
            titleSize={18}
            backgroundColor="yomGreen"
            activeBackgroundColor="yomDarkGreen"
            textColor="yomWhite"
            onPress={handleSave}
          />
        </View>
      </View>
    </View>
  );
};

export default InfoPage;
