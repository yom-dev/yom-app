import { View, Text, ImageBackground, Pressable } from "react-native";
import CustomButton from "@/components/Button/CustomButton";
import React from "react";
import { useModal } from "@/shared/store/use-modal-store";

const ReadingMainCard: React.FC = ({}) => {
  const { onOpen } = useModal();
  return (
    <View className="bg-yomBlack w-full h-full border-none rounded-2xl overflow-hidden ">
      {/*배경화면 설정*/}
      <ImageBackground
        source={require("@/assets/images/main-card-background-purple.png")}
        className="w-full h-full flex justify-center items-center"
        resizeMode="cover"
        style={{ borderRadius: 20 }}
      >
        {/* 카드 제목 & 부제목 */}
        <View className="w-[85%] h-[85%] flex justify-between">
          <View className="flex flex-column justify-between gap-[5px] h-[20%]">
            <Text className="text-yomWhite font-[WantedM] text-[16px]">
              오늘의 독서 시간을 기록하세요.
            </Text>
            <Text className="text-yomWhite font-[WantedSB] text-[32px]">
              독서
            </Text>
          </View>

          {/* 메인카드 컨텐츠 */}
          <View className="w-full h-[60%] flex justify-center items-center">
            <Text className="font-[WantedSB] text-[24px] text-yomWhite opacity-40 text-center">
              오늘 독서하셨나요?
            </Text>
          </View>

          {/* 작성하기 버튼 */}
          <View className="h-[20%] flex justify-end">
            <View className="h-[50px] w-full">
              <CustomButton
                title="작성하기"
                titleSize={14}
                backgroundColor="yomWhite"
                activeBackgroundColor="yomLightGray"
                textColor="yomGreen"
                onPress={() => onOpen("gratitude-edit")}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ReadingMainCard;
