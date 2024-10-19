import { View, Text, ImageBackground, Pressable, Linking } from "react-native";
import CustomButton from "@/components/Shared/Button/CustomButton";
import React from "react";
import { useModal } from "@/shared/store/use-modal-store";

const TutorialMainCard: React.FC = ({}) => {
  const { onOpen } = useModal();

  const handleVisitWebpage = () => {
    Linking.openURL(
      "https://shore-bacon-35a.notion.site/User-guide-Tutorial-11a1313ef6f48060be18f378643b0492?pvs=4"
    ); // 구글 홈페이지로 이동
  };

  return (
    <View className="bg-yomBlack w-full h-full border-none rounded-2xl overflow-hidden">
      {/*배경화면 설정*/}
      <ImageBackground
        source={require("@/assets/images/background/main-card-background-purple.png")}
        className="w-full h-full flex justify-center items-center"
        resizeMode="cover"
        style={{ borderRadius: 20 }}
      >
        {/* 카드 제목 & 부제목 */}
        <View className="w-[85%] h-[85%] flex justify-between">
          <View className="flex flex-column justify-between gap-[5px] h-[20%]">
            <Text className="text-yomWhite font-[WantedM] text-[16px]">
              Are you new to yom?
            </Text>
            <Text className="text-yomWhite font-[WantedSB] text-[32px]">
              Tutorial
            </Text>
          </View>

          {/* 메인카드 컨텐츠 */}
          <View className="w-full h-[60%] flex justify-center items-center">
            <Text className="font-[WantedSB] text-[28px] text-yomWhite text-center">
              Visit our tutorial webpage!
            </Text>
          </View>

          {/* 작성하기 버튼 */}
          <View className="h-[20%] flex justify-start">
            <View className="h-[50px] w-full">
              <CustomButton
                title="Visit Webpage"
                titleSize={14}
                backgroundColor="yomWhite"
                activeBackgroundColor="yomLightGray"
                textColor="yomPurple"
                onPress={handleVisitWebpage} // 버튼 클릭 시 구글 홈페이지로 이동
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TutorialMainCard;
