import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const MainMyPlanHeader = () => {
  const handleMorePress = () => {
    router.navigate("/plan");
  };
  return (
    <View className="flex flex-row justify-between items-end">
      <Text className="text-[28px] text-yomBlack font-[WantedSB]">Plans</Text>

      <View className="flex flex-row items-center justify-end">
        <Link
          href="/plan"
          asChild
          className="flex flex-row items-center justify-end"
        >
          <Text className="text-[16px] text-yomRed font-[WantedR] active:font-[WantedSB] active:bg-none">
            Detail
          </Text>
        </Link>
        <Link href="/plan" className="flex flex-row items-center justify-end">
          <AntDesign
            name="right"
            size={14}
            color={Colors.light.yomRed}
          ></AntDesign>
        </Link>
      </View>
    </View>
  );
};

export default MainMyPlanHeader;
