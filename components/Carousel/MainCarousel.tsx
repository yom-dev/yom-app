import {
  View,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { useState } from "react";
import { Dimensions } from "react-native";
import PlanCardReading from "@/components/PlanCard/PlanCardReading";
import MainCard from "@/components/MainCard/MainCard";

const MainCarousel = () => {
  const { width, height } = Dimensions.get("window");

  const [current, setCurrent] = useState(0);
  const handleCurrentChange = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const nextCurrent: number = Math.floor(
      e.nativeEvent.contentOffset.x / width
    );
    if (nextCurrent < 0) {
      return;
    }
    setCurrent(nextCurrent);
  };
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScrollEndDrag={handleCurrentChange}
      className="flex gap-[10px]"
    >
      <View className="w-[350px] h-[300px]">
        <MainCard></MainCard>
      </View>
      <View className="w-[350px] h-[300px]">
        <MainCard></MainCard>
      </View>
      <View className="w-[350px] h-[300px]">
        <MainCard></MainCard>
      </View>
      <View className="w-[350px] h-[300px]">
        <MainCard></MainCard>
      </View>

      {/* <View className="mr-[10px]">
        <PlanCardReading
          size="large"
          startColor="#615EE2"
          endColor="#BA8DF3"
          title="Reading"
          subTitle="Coming Soon"
        />
      </View>
      <View className="mr-[10px]">
        <PlanCardReading
          size="large"
          startColor="#615EE2"
          endColor="#BA8DF3"
          title="Reading"
          subTitle="Coming Soon"
        />
      </View>
      <View className="mr-[10px]">
        <PlanCardReading
          size="large"
          startColor="#615EE2"
          endColor="#BA8DF3"
          title="Reading"
          subTitle="Coming Soon"
        />
      </View>
      <View className="mr-[10px]">
        <PlanCardReading
          size="large"
          startColor="#615EE2"
          endColor="#BA8DF3"
          title="Reading"
          subTitle="Coming Soon"
        /> */}
      {/* </View> */}
    </Animated.ScrollView>
  );
};

export default MainCarousel;
