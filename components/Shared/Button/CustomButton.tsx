import { Text, Pressable } from "react-native";
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
    bibleIvory: "bg-bibleIvory",
    bibleBrown: "bg-bibleBrown",
    bibleLightBrown: "bg-bibleLightBrown",
  };

  const textColorVariants: { [key: string]: string } = {
    yomGreen: "text-yomGreen",
    yomWhite: "text-yomWhite",
    yomBlack: "text-yomBlack",
    yomGray: "text-yomGray",
    yomRed: "text-yomRed",
    yomDarkGreen: "text-yomDarkGreen",
    yomLightGray: "text-yomLightGray",
    bibleIvory: "bg-bibleIvory",
    bibleBrown: "bg-bibleBrown",
    bibleLightBrown: "bg-bibleLightBrown",
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
    <Pressable
      className={`w-full h-full ${bgColorVariants[backgroundColor]} flex justify-center items-center rounded-2xl active:opacity-90 ${bgColorVariantsActive[activeBackgroundColor]}`}
      onPress={onPress}
    >
      <Text
        className={`${textColorVariants[textColor]} font-[WantedSB] ${titleSizeVariants[titleSize]}`}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
