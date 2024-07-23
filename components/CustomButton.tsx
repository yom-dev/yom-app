import { Text, Pressable } from "react-native";
import React from "react";

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

  return (
    <Pressable
      className={`w-full h-full ${bgColorVariants[backgroundColor]} flex justify-center items-center rounded-full active:opacity-90 ${bgColorVariantsActive[activeBackgroundColor]}`}
    >
      <Text className={`${textColorVariants[textColor]} font-[WantedSB]`}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
