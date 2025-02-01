import React from "react";
import { View, Text } from "react-native";
import HeaderRight from "@/components/Shared/Header/HeaderRight";
import { Colors } from "@/constants/Colors";

const CustomHeader = () => {
  return (
    <View className="flex-row justify-between items-end w-full h-[11%] pb-2 bg-yomWhite">
      <Text className="font-[WantedM] text-[20px] text-dark-text">yom</Text>
      <HeaderRight />
    </View>
  );
};

export default CustomHeader;
