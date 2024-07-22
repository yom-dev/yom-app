import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

const CustomHeader = () => {
  return (
    <View className=" h-[] w-full bg-[#F9F8F4] flex justify-between items-center">
      <View>
        <Text className="font-[WantedM] text-[20px]">yom</Text>
      </View>
      <Ionicons name="notifications-outline" size={24} color={"#000000"} />
    </View>
  );
};

export default CustomHeader;
