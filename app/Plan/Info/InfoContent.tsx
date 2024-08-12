import { View, Text } from "react-native";
import React from "react";

const InfoContent = ({ text }: { text: string }) => {
  return (
    <View className="w-[92%] h-fit flex-row justify-center">
      <Text className="font-[WantedB] text-[16px] text-justify leading-snug">
        {text}
      </Text>
    </View>
  );
};

export default InfoContent;
