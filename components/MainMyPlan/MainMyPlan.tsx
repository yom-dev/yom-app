import { View, Text } from "react-native";
import React from "react";

import MainMyPlanHeader from "./MainMyPlanHeader";
import MainMyPlanContent from "./MainMyPlanContent";

const MainMyPlan = () => {
  return (
    <View className="w-full h-full">
      <View className="w-full h-fit">
        <MainMyPlanHeader />
      </View>

      <View className="w-full h-full ">
        <MainMyPlanContent />
      </View>
    </View>
  );
};

export default MainMyPlan;
