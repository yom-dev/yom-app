import { Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  titleSize,
  backgroundColor,
  textColor,
  activeBackgroundColor,
  onPress,
}: {
  title: string;
  titleSize: number;
  backgroundColor: string;
  textColor: string;
  activeBackgroundColor: string;
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
  };

  const textColorVariants: { [key: string]: string } = {
    yomGreen: "text-yomGreen",
    yomWhite: "text-yomWhite",
    yomBlack: "text-yomBlack",
    yomGray: "text-yomGray",
    yomRed: "text-yomRed",
    yomDarkGreen: "text-yomDarkGreen",
    yomLightGray: "text-yomLightGray",
  };
  const bgColorVariantsActive: { [key: string]: string } = {
    yomGreen: "active:bg-yomGreen",
    yomWhite: "active:bg-yomWhite",
    yomBlack: "active:bg-yomBlack",
    yomGray: "active:bg-yomGray",
    yomRed: "active:bg-yomRed",
    yomDarkGreen: "active:bg-yomDarkGreen",
    yomLightGray: "active:bg-yomLightGray",
  };

  const titleSizeVariants: { [key: number]: string } = {
    14: "text-[14px]",
    16: "text-[16px]",
    18: "text-[18px]",
    24: "text-[24px]",
    28: "text-[28px]",
    32: "text-[32px]",
    34: "text-[34px]",
  };

  return (
    <TouchableOpacity
      className={`w-full h-full bg-yomWhite flex justify-center items-center rounded-lg border-yomGray border-[0.5px] `}
      onPress={onPress}
    >
      <Text className={`yomBlack font-[WantedM] text-[14px]`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
