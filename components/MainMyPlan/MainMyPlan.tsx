import { View, Text } from "react-native";
import React from "react";

import MainMyPlanHeader from "./MainMyPlanHeader";
import MainMyPlanContent from "./MainMyPlanContent";

const MainMyPlan = () => {
  return (
    <View className="w-full h-full">
      {/* 내 플랜 헤더: 제목 및 자세히 보기*/}
      <View className="w-full h-fit">
        <MainMyPlanHeader />
      </View>

      {/* 플랜 카드 스크롤 */}
      <View className="w-full h-full ">
        <MainMyPlanContent />
      </View>
    </View>
  );
};

export default MainMyPlan;
