import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const CustomButton = ({
  title,
  titleSize,
  backgroundColor,
  textColor,
  activeBackgroundColor,
}: {
  title: string;
  titleSize: number;
  backgroundColor: string;
  textColor: string;
  activeBackgroundColor: string;
}) => {
  // 스타일 정의

  return (
    <Pressable
      className={`w-full h-full bg-${backgroundColor} flex justify-center items-center rounded-full active:opacity-90 active:${activeBackgroundColor}`}
    >
      <Text className={`text-${textColor} font-[WantedSB]`}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
