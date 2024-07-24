import CustomButton from "@/components/Button/CustomButton";
import { View, Text, Button, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import MainCard from "@/components/MainCard/MainCard";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MainMyPlan from "@/components/MainMyPlan/MainMyPlan";

export default function HomeScreen() {
  return (
    <View className="bg-yomWhite w-full flex h-full px-[20px]">
      <View className="h-[8%] flex flex-col justify-end">
        <Text className="text-[32px] text-yomBlack font-[WantedSB]">
          상훈님, 반가워요.
        </Text>
      </View>

      <View className="w-full h-[55%] flex flex-col justify-end">
        <View className="h-[95%]">
          <MainCard />
        </View>
      </View>

      <View className="w-full h-[37%] ">
        <MainMyPlan />
      </View>
    </View>
  );
}
