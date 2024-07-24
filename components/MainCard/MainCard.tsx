import { View, Text, ImageBackground } from "react-native";
import CustomButton from "@/components/Button/CustomButton";
import React from "react";

const MainCard = () => {
  return (
    <View className="bg-yomBlack w-full h-full border-none rounded-2xl overflow-hidden ">
      <ImageBackground
        source={require("@/assets/images/main-card-background.png")}
        className="w-full h-full flex justify-center items-center"
        resizeMode="cover"
        style={{ borderRadius: 20 }} // ImageBackground에 직접 borderRadius 추가
      >
        <View className="w-[85%] h-[85%] flex justify-between">
          <View className="flex flex-column justify-between gap-[5px] h-[20%]">
            <Text className="text-yomWhite font-[WantedM] text-[16px]">
              오늘 하루 감사한 일들을 작성하세요.{" "}
            </Text>
            <Text className="text-yomWhite font-[WantedSB] text-[32px]">
              하루감사
            </Text>
          </View>

          <View className="w-full h-[60%] flex justify-center items-center">
            <Text className="font-[WantedM] text-[24px] text-yomWhite opacity-40 text-center">
              오늘 하루
              {"\n"}
              감사하셨나요?
            </Text>
          </View>
          <View className="h-[20%] flex justify-end">
            <View className="h-[80%] w-full">
              <CustomButton
                title="작성하기"
                titleSize={14}
                backgroundColor="yomWhite"
                activeBackgroundColor="yomLightGray"
                textColor="yomGreen"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MainCard;
