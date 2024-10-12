import { View, Text } from "react-native";
import React from "react";

const contact = () => {
  return (
    <View className="bg-yomWhite w-full h-full flex justify-center items-center">
      <Text className="font-[WantedSB] text-[30px] mb-[25px]">Contact</Text>
      <View className="w-fit h-[90px] flex justify-between ">
        <Text className="font-[WantedR] text-[24px]">
          📧 | yomoffice3117@gmail.com
        </Text>

        <Text className="font-[WantedR] text-[24px]">🌐 | @yom.apps </Text>
      </View>
    </View>
  );
};

export default contact;
