import { View, Text } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";

import Animated from "react-native-reanimated";
import { useState } from "react";
import { Dimensions } from "react-native";
import MainCard from "@/components/MainCard/MainCard";

const MainCarousel2 = () => {
  const width = Dimensions.get("window").width;

  return (
    <View>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
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

        )}</Carousel>
    </View>
  );
};

export default MainCarousel2;
