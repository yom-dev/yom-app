import { View, Text } from "react-native";
import React from "react";

const info = () => {
  return (
    <View className="bg-yomWhite w-full h-full flex justify-center items-center">
      <View className="w-[90%] h-full flex justify-center items-center">
        <Text className="font-[WantedSB] text-[24px] mb-[25px]">Info</Text>
        <Text className="font-[WantedR] text-[18px]">Version 1.0.0</Text>
      </View>
    </View>
  );
};

export default info;
