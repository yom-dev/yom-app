import CustomButton from "@/components/CustomButton";
import { View, Text, Button, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  return (
    <View className="bg-yomWhite w-full flex h-full px-[20px] py-[20px]">
      <Text className="text-[32px] text-yomBlack font-[WantedSB]">
        상훈님, 반가워요.
      </Text>
      <View className="w-full h-[40px] ">
        <CustomButton
          title="저장하기"
          titleSize={14}
          backgroundColor="yomGreen"
          activeBackgroundColor="yomDarkGreen"
          textColor="yomWhite"
        />
      </View>
      <View className="w-full h-[60px] ">
        <CustomButton
          title="저장하기"
          titleSize={14}
          backgroundColor="yomWhite"
          activeBackgroundColor="yomLightGray"
          textColor="yomGreen"
        />
      </View>
    </View>
  );
}
