import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const CustomGreenButton = ({
  title,
  titleSize,
}: {
  title: string;
  titleSize: number;
}) => {
  // 스타일 정의

  return (
    <View>
      <Pressable className="w-full h-full bg-yomGreen flex justify-center items-center rounded-full ">
        <Text className="text-yomWhite font-[WantedSB]">{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomGreenButton;
