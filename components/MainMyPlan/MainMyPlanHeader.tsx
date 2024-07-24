import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const MainMyPlanHeader = () => {
  return (
    <View className="flex flex-row justify-between items-end">
      <Text className="text-[24px] text-yomBlack font-[WantedSB]">내 플랜</Text>

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
  );
};

export default MainMyPlanHeader;
