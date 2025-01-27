import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";

const TutorialCard = ({
  subTitle,
  title,
  startColor,
  endColor,
  link,
}: {
  subTitle: string;
  title: string;
  startColor: string;
  endColor: string;
  link: string;
}) => {
  const handlePress = async () => {
    if (link) {
      const supported = await Linking.canOpenURL(link);
      if (supported) {
        await Linking.openURL(link);
      } else {
        Alert.alert(`Can't open this URL. Please Try again.`);
      }
    }
  };

  return (
    <TouchableOpacity
      className="w-full h-full"
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <LinearGradient
        colors={[startColor, endColor]}
        start={[1, 0]}
        end={[0, 1]}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 15,
        }}
        pointerEvents="box-none"
      >
        <View className="w-full h-full flex justify-center px-6">
          <Text className="text-[12px] text-gray-200 font-[WantedR]">
            {subTitle}
          </Text>
          <Text className="text-[24px] text-white font-[WantedSB]">
            {title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default TutorialCard;
