import { View, Text } from "react-native";
import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const MainCircleProgress = () => {
  return (
    <View className="w-full flex items-center">
      <View className="flex-row justify-center  h-[120px]">
        <AnimatedCircularProgress
          size={240}
          fill={80}
          arcSweepAngle={180}
          width={15}
          backgroundWidth={15}
          rotation={270}
          duration={1600}
          tintColor="#BC6619"
          // onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#FFECCF"
          lineCap="round"
          children={() => {
            return (
              <View className="h-[50%] w-full  flex justify-end items-end px-4">
                <Text className="font-[WantedB] text-[15px] text-bibleBrown">
                  Finish
                </Text>
              </View>
            );
          }}
          childrenContainerStyle={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center", // 변경된 부분
          }}
        />
      </View>
      <View className="w-[260px] h-[60px]  mt-10 flex-row py-2">
        <View className="w-[50%]  h-full flex justify-between items-center">
          <Text className="font-[WantedSB] text-bibleBrown text-[18px]">
            2024.12.13
          </Text>
          <Text className="font-[WantedM] text-gray-400">Start Date</Text>
        </View>
        <View className="w-[1px] bg-gray-200 h-full"></View>
        <View className="w-[50%]  h-full flex justify-between items-center">
          <Text className="font-[WantedSB] text-bibleBrown text-[18px]">
            100%
          </Text>
          <Text className="font-[WantedM] text-gray-400">Percentage</Text>
        </View>
      </View>
    </View>
  );
};

export default MainCircleProgress;
