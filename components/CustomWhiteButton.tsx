import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const CustomWhiteButton = ({
  title,
  titleSize,
}: {
  title: string;
  titleSize: number;
}) => {
  // 스타일 정의

  return (
    <View>
      <Pressable className="w-full h-full bg-yomWhite flex justify-center items-center rounded-full ">
        <Text className="text-yomGreen font-[WantedSB]">{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomWhiteButton;
