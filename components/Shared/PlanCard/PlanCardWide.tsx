import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { planGradation } from "@/constants/planGradation";

import { icons } from "@/constants/Icons";

import { Ionicons } from "@expo/vector-icons";

import Entypo from "@expo/vector-icons/Entypo";

import { router } from "expo-router";

type IconPlanName = keyof typeof icons;

type GradationPlanName = keyof typeof planGradation;

const PlanCard = ({
  planName,

  title,

  subTitle,
}: {
  planName: string;

  title: string;

  subTitle: string;
}) => {
  const GradationPlanName = planName as GradationPlanName;

  const IconPlanName = planName as IconPlanName;

  const { startColor, endColor } = planGradation[
    IconPlanName as keyof typeof planGradation
  ] || {
    startColor: "#000",

    endColor: "#FFF",
  };

  const handlePress = () => {
    router.push(`/plan/plan/${planName}`);
  };

  return (
    <TouchableOpacity
      className="w-full h-[80px] rounded-xl"
      onPress={handlePress}
    >
      <LinearGradient
        colors={[startColor, endColor]}
        start={[1, 0]}
        end={[0, 1]}
        style={{ height: "100%", width: "100%", borderRadius: 25 }}
      >
        <View className="w-full h-full px-[20px] py-[20px] flex-row items-center">
          <View className="w-[20%] h-[40px] flex-row justify-start">
            <ImageBackground
              source={icons[IconPlanName]}
              className="w-[40px] h-full"
              resizeMode="contain"
            />
          </View>

          <View className=" w-[60%] h-full flex justify-between">
            <Text className="font-[WantedB] text-[20px] text-white">
              {title}
            </Text>

            <Text className="font-[WantedM] text-[12px] text-white opacity-1">
              {subTitle}
            </Text>
          </View>

          <View className="justify-end flex-row w-[20%]">
            <Entypo name="chevron-thin-right" size={24} color="white" />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PlanCard;
