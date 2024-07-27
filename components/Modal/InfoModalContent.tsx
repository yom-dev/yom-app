import { View, Text } from "react-native";
import React from "react";

const InfoModalContent = ({ text }: { text: string }) => {
  return (
    <View className="w-full h-fit flex-row justify-center">
      <Text className="font-[WantedB] text-[16px] text-justify">{text}</Text>
    </View>
  );
};

export default InfoModalContent;
