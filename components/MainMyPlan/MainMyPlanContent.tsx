import { View, Text, ScrollView } from "react-native";
import React from "react";
import ParallaxScrollView from "../default/ParallaxScrollView";

const MainMyPlanContent = () => {
  return (
    <View className="bg-slate-300 w-full h-full flex justify-center">
      <View className="w-full h-[170px]">
        <ScrollView className="w-full bg-yomRed flex" horizontal={true}>
          <Text className="text-yomBlack font-[WantedM] text-[16px] ">
            This is the Plan Card Scroll View
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default MainMyPlanContent;
