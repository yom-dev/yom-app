import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const MainMyPlan = () => {
  return (
    <View className="w-full h-full">
      <View className="w-full h-fit flex flex-row justify-between items-end">
        <Text className="text-[24px] text-yomBlack font-[WantedSB]">
          내 플랜
        </Text>

        <Link href="/plan">
          <View className="flex flex-row items-center justify-end">
            <Text className="text-[14px] text-yomRed font-[WantedR]">
              자세히 보기
            </Text>
            <AntDesign
              name="right"
              size={14}
              color={Colors.light.yomRed}
            ></AntDesign>
          </View>
        </Link>
      </View>
      <View className="w-full h-[80%] flex flex-row gap-[20px] bg-slate-300  justify-center items-center">
        <Text className="text-yomBlack font-[WantedM] text-[16px] ">
          This is the Plan Card Scroll View
        </Text>
      </View>
    </View>
  );
};

export default MainMyPlan;
