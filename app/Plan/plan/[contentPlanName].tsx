import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Gratitude from "@/components/Plan/Gratitude/Gratitude";

const ContentPage = () => {
  const { contentPlanName } = useLocalSearchParams();
  return <View>{contentPlanName === "gratitude" ? <Gratitude /> : null}</View>;
};

export default ContentPage;
