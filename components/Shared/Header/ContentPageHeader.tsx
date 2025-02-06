import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ContentPageHeader = ({ color }: { color: string }) => {
  const navigation = useNavigation();
  return (
    <View
      className={`w-full h-[11%] flex-row justify-center items-end bg-[${color}] pb-2`}
    >
      <View className="w-full">
        <Ionicons
          name="arrow-back"
          size={28}
          color={"#000000"}
          onPress={navigation.goBack}
        />
      </View>
    </View>
  );
};

export default ContentPageHeader;
