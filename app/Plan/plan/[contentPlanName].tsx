import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ContentPage = () => {
  const { contentPlanName } = useLocalSearchParams();
  return (
    <View>
      <Text className="text-yomBlack">{contentPlanName}</Text>
    </View>
  );
};

export default ContentPage;
