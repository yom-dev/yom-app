import { View, Text, Image } from "react-native";
import {
  TouchableOpacity,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import React from "react";
import { icons } from "@/constants/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { planGradation } from "@/constants/planGradation";

type PlanName = keyof typeof icons;

interface StoreCardProps {
  planName: string;
  price: number;
  title: string;
  description: string;
  isActive: boolean;
}

const StoreCard = ({
  planName,
  price,
  title,
  description,
  isActive,
}: StoreCardProps) => {
  const validPlanName = planName as PlanName;
  const { startColor, endColor } = planGradation[
    validPlanName as keyof typeof planGradation
  ] || {
    startColor: "#000",

    endColor: "#FFF",
  };

  return (
    <GestureHandlerRootView>
      <Link href={`plan/info/${planName}`} asChild>
        <TouchableOpacity>
          <View
            className="w-full h-fit flex justify-start"
            style={{ opacity: isActive ? 1 : 0.5 }} // isActive가 true일 경우 opacity를 60%로 설정
          >
            <View className="w-full aspect-square ">
              <LinearGradient
                colors={[startColor, endColor]}
                start={[1, 0]}
                end={[0, 1]}
                style={{ height: "100%", width: "100%", borderRadius: 25 }}
              >
                <View className="w-full h-full flex justify-center items-center ">
                  <Image
                    source={icons[validPlanName]}
                    className="w-[70%]"
                    resizeMode="contain"
                  />
                </View>
              </LinearGradient>
            </View>

            <View className="mt-[10px] w-full flex-row justify-between items-end">
              <Text className="font-[WantedB] text-[18px]">{title}</Text>
              <View className="w-fit h-full  flex-row justify-between items-end">
                <Image
                  source={require("@/assets/images/icons/coin-icon.png")}
                  className="w-[16px] h-[16px]"
                />
                <Text className="font-[WantedM] text-[12px] ml-1">{price}</Text>
              </View>
            </View>

            <View className="w-full mt-[5px] font-[WantedM] ">
              <Text className="text-[14px]">{description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    </GestureHandlerRootView>
  );
};

export default StoreCard;
