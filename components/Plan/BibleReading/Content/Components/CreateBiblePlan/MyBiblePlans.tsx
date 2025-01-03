import { View, Text } from "react-native";
import React from "react";
import BiblePlanItem from "./BiblePlanItem";

const MyBiblePlans = () => {
  return (
    <View className="w-full h-full">
      <Text>MyBiblePlans</Text>

      <BiblePlanItem />
    </View>
  );
};

export default MyBiblePlans;
