import { View, Text, ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

const PlanCard = ({
  size,
  startColor,
  endColor,
  title,
  subTitle,
  icon,
  iconWidth,
  iconHeight,
}: {
  size: string;
  startColor: string;
  endColor: string;
  title: string;
  subTitle: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
}) => {
  const sizeVariants: { [key: string]: string } = {
    small: "w-[105px] h-[135px] rounded-[25px] border-none",
    medium: "w-[135px] h-[170px] rounded-[25px] border-none",
    large: "w-[215px] h-[275px] rounded-[25px] border-none",
  };
  const paddingVariants: { [key: string]: string } = {
    small: "border-none pt-[22px] pb-[5px] pl-[16px] w-full h-full",
    medium: "border-none pt-[25px]  pl-[18px] pb-[10px] w-full h-full",
    large: "border-none pt-[40px] pb-[10px] pl-[32px] w-full h-full",
  };

  const titleVariants: { [key: string]: string } = {
    small:
      "text-[14px] gap-[6px] font-[WantedB] text-yomWhite flex justify-between items-start",
    medium:
      "text-[18px] gap-[3px] font-[WantedB]  text-yomWhite flex justify-between items-start",
    large:
      "text-[30px] gap-[10px] font-[WantedB] text-yomWhite flex justify-between items-start",
  };

  const subTitleVariants: { [key: string]: string } = {
    small: "text-[8px] font-[WantedM] text-yomWhite",
    medium: "text-[12px] font-[WantedM] text-yomWhite",
    large: "text-[21px] font-[WantedM] text-yomWhite",
  };

  return (
    <View className={`${sizeVariants[size]}`}>
      <LinearGradient
        colors={[startColor, endColor]}
        start={[1, 0]}
        end={[0, 1]}
        style={{ height: "100%", width: "100%", borderRadius: 25 }}
      >
        <View className={`${paddingVariants[size]}`}>
          <View className={`${titleVariants[size]}`}>
            <Text className={`${titleVariants[size]}`}>{title}</Text>
            <Text className={`${subTitleVariants[size]}`}>{subTitle}</Text>
          </View>

          <View className="w-full h-full flex-row justify-end items-start mt-[5px]">
            <View className="w-[95%] h-[70%] bg-slate-400">
              {/* <ImageBackground
                source={icon}
                className="w-full h-full flex justify-center items-center"
                resizeMode="contain"
                // style={width: iconWidth, height:iconHeight}
                // ImageBackground에 직접 borderRadius 추가
              /> */}
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default PlanCard;
