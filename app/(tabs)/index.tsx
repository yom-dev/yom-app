import CustomGreenButton from "@/components/CustomGreenButton";
import CustomWhiteButton from "@/components/CustomWhiteButton";
import { View, Text, Button } from "react-native";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  return (
    <View className="bg-yomWhite w-full flex h-full px-[20px] py-[20px]">
      <Text className="text-[32px] text-yomBlack font-[WantedSB]">
        상훈님, 반가워요.
      </Text>
      <View className="w-full h-[60px] ">
        <CustomGreenButton title="저장하기" titleSize={14} />
      </View>
      <View className="w-full h-[60px] ">
        <CustomWhiteButton title="저장하기" titleSize={14} />
      </View>
    </View>
  );
}
