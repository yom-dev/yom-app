import CustomButton from "@/components/Button/CustomButton";
import { View, Text, Button, Pressable, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import MainCard from "@/components/MainCard/MainCard";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MainMyPlan from "@/components/MainMyPlan/MainMyPlan";
// import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <ScrollView className="w-full h-full">
          <View className="h-fit flex flex-col justify-end mt-[20px]">
            <Text className="text-[32px] text-yomBlack font-[WantedSB]">
              상훈님, 반가워요.
            </Text>
          </View>
          <View className="w-full h-[400px] mt-[20px]">
            <MainCard />
          </View>
          <View className="w-full h-[215px] mt-[35px]">
            <MainMyPlan />
          </View>

          <View className="w-full h-[50px]"></View>
        </ScrollView>
      </View>
    </View>
  );
}
