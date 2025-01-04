import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { planGradation } from "@/constants/planGradation";
import { Ionicons } from "@expo/vector-icons";
import { icons } from "@/constants/Icons";

const BiblePlanItem = ({ title }: { title: string }) => {
  const icon = icons.bibleReading;
  const startColor = planGradation.bibleReading.startColor;
  const endColor = planGradation.bibleReading.endColor;
  return (
    <View className="w-full h-[65px]">
      <TouchableOpacity className="w-full h-[60px]">
        <LinearGradient
          colors={[startColor, endColor]}
          start={[1, 0]}
          end={[0, 1]}
          style={{ height: "100%", width: "100%", borderRadius: 10 }}
        >
          <View className="w-full h-full  p-3 flex-row justify-between items-center ">
            <View className="w-[15%] h-full  flex justify-center items-start">
              <ImageBackground
                source={icon} // Apply the icon from icons object
                className="w-[80%] h-[80%] flex justify-center items-center"
                resizeMode="contain"
              />
            </View>
            <View className="w-[70%] h-full flex justify-center items-center">
              <Text className="font-[WantedSB] text-[14px] text-white">
                {title}
              </Text>
            </View>
            <View className="w-[15%] h-full flex justify-center items-end">
              <TouchableOpacity>
                <Ionicons name="trash-outline" size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <View className="w-full flex-row justify-end mt-[3px]">
        <Text className="text-[8px] text-yomGray">Start Date: 2024-10-24</Text>
      </View>
    </View>
  );
};

export default BiblePlanItem;
