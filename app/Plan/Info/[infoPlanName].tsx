import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomButton from "@/components/Button/CustomButton";
import InfoContent from "./infoContent";

const InfoPage = () => {
  const { infoPlanName } = useLocalSearchParams();
  const handleSave = () => {};
  return (
    <View className="w-full h-full flex items-center bg-yomWhite">
      <View className="w-[90%] h-full">
        <ScrollView className="w-full h-full">
          <View className="flex-row justify-center mt-[20px]">
            <Text className="text-[24px] font-[WantedB] text-yomBlack">
              {infoPlanName}
            </Text>
          </View>
          <View className="w-full h-[200px] mt-[50px]">
            <ImageBackground
              source={require("@/assets/images/note-icon.png")}
              className="w-full h-full flex justify-center items-center"
              resizeMode="contain"
              style={{ borderRadius: 20 }} // ImageBackground에 직접 borderRadius 추가
            />
          </View>

          <View className="flex-row justify-center mt-[50px]">
            <InfoContent
              text={
                "Daily Meditation is a plan to assist you with meditation. Set a time when you can dedicate your life "
              }
            />
          </View>
        </ScrollView>
        <View className="w-full h-[50px] fixed bottom-10">
          <CustomButton
            title="내 플랜에 추가하기"
            titleSize={18}
            backgroundColor="yomGreen"
            activeBackgroundColor="yomDarkGreen"
            textColor="yomWhite"
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default InfoPage;
