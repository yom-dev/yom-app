import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CircleButton = ({
  children,
  backgroundColor,
  borderColor = "transparent",
  onPress,
}: {
  children: React.ReactNode;
  backgroundColor: string;
  borderColor?: string;
  onPress: () => void;
}) => {
  const bgColorVariants: { [key: string]: string } = {
    yomGreen: "bg-yomGreen",
    yomWhite: "bg-yomWhite",
    yomBlack: "bg-yomBlack",
    yomGray: "bg-yomGray",
    yomRed: "bg-yomRed",
    yomDarkGreen: "bg-yomDarkGreen",
    yomLightGray: "bg-yomLightGray",
    bibleIvory: "bg-bibleIvory",
    bibleBrown: "bg-bibleBrown",
    bibleLightBrown: "bg-bibleLightBrown",
    sleepGray: "bg-sleepGray",
    sleepDarkNavy: "bg-sleepDarkNavy",
  };

  const borderColorVariants: { [key: string]: string } = {
    tranparent: "",
    yomGreen: "border-yomGreen border-[1px]",
    yomWhite: "border-yomWhite border-[1px]",
    yomBlack: "border-yomBlack border-[1px]",
    yomGray: "border-yomGray border-[1px]",
    yomRed: "border-yomRed border-[1px]",
    yomDarkGreen: "border-yomDarkGreen border-[1px]",
    yomLightGray: "border-yomLightGray border-[1px]",
    bibleIvory: "border-bibleIvory border-[1px]",
    bibleBrown: "border-bibleBrown border-[1px]",
    bibleLightBrown: "border-bibleLightBrown border-[1px]",
    sleepGray: "border-sleepGray border-[1px]",
    sleepDarkNavy: "border-sleepDarkNavy border-[1px]",
  };

  return (
    <TouchableOpacity
      className={`w-full h-full rounded-full flex items-center justify-center ${bgColorVariants[backgroundColor]} ${borderColorVariants[borderColor]}`}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CircleButton;
