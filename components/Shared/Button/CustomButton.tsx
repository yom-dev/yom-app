import { Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  titleSize,
  backgroundColor,
  textColor,
  activeBackgroundColor = "blah",
  borderColor = "transparent",
  onPress,
}: {
  title: string;
  titleSize: number;
  backgroundColor: string;
  textColor: string;
  borderColor?: string;
  activeBackgroundColor?: string;
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

  const textColorVariants: { [key: string]: string } = {
    yomGreen: "text-yomGreen",
    yomWhite: "text-yomWhite",
    yomBlack: "text-yomBlack",
    yomGray: "text-yomGray",
    yomRed: "text-yomRed",
    yomDarkGreen: "text-yomDarkGreen",
    yomLightGray: "text-yomLightGray",
    bibleIvory: "text-bibleIvory",
    bibleBrown: "text-bibleBrown",
    bibleLightBrown: "bg-bibleLightBrown",
    white: "text-white",
  };
  const bgColorVariantsActive: { [key: string]: string } = {
    yomGreen: "active:bg-yomGreen",
    yomWhite: "active:bg-yomWhite",
    yomBlack: "active:bg-yomBlack",
    yomGray: "active:bg-yomGray",
    yomRed: "active:bg-yomRed",
    yomDarkGreen: "active:bg-yomDarkGreen",
    yomLightGray: "active:bg-yomLightGray",
    bibleIvory: "bg-bibleIvory",
    bibleBrown: "bg-bibleBrown",
    bibleLightBrown: "bg-bibleLightBrown",
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
      className={`w-full h-full ${bgColorVariants[backgroundColor]} flex justify-center items-center rounded-xl  ${borderColorVariants[borderColor]}`}
      onPress={onPress}
    >
      <Text
        className={`${textColorVariants[textColor]} font-[WantedM] ${titleSizeVariants[titleSize]}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
