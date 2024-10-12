import { View, Text } from "react-native";
import React from "react";

const contributers = () => {
  return (
    <View className="bg-yomWhite w-full h-full flex justify-center items-center">
      <View className="w-[90%] h-full flex justify-center items-center">
        <Text className="font-[WantedSB] text-[24px] mb-[25px]">Credits</Text>
        <Text className="font-[WantedR] text-[12px]">
          Icon made by Freepik from www.flaticon.com
        </Text>
      </View>
    </View>
  );
};

export default contributers;
