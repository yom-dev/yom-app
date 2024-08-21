import { View, Text, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, router } from "expo-router";
const SettingSlot = ({
  iconName,
  text,
  href,
}: {
  iconName: keyof typeof Ionicons.glyphMap;
  text: string;
  href: Href<string>;
}) => {
  const handlePress = () => {
    router.push(href);
  };

  return (
    <View className="w-full border-b-[0.5px] border-white h-[50px] flex justify-center items-center">
      <Pressable
        onPress={handlePress}
        className="w-[90%] flex-row justify-between items-center"
      >
        <View className="flex-row gap-3 items-center">
          <Ionicons name={iconName} color="black" size={24} />
          <Text className="font-[WantedR] text-[16px]">{text}</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default SettingSlot;
