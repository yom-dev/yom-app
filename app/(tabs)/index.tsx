import { View, Text, Button, Pressable, ScrollView } from "react-native";
import MainCard from "@/components/MainCard/MainCard";
import MainMyPlan from "@/components/MainMyPlan/MainMyPlan";
import { useState } from "react";
import MainCarousel from "@/components/Carousel/MainCarousel";

export default function HomeScreen() {
  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        {/* 스크롤 뷰 */}
        <ScrollView
          className="w-full h-full"
          showsVerticalScrollIndicator={false}
        >
          {/* 메인 타이틀 */}
          <View className="h-fit flex flex-col justify-end mt-[20px]">
            <Text className="text-[32px] text-yomBlack font-[WantedSB]">
              상훈님, 반가워요.
            </Text>
          </View>

          {/* 메인 카드:  */}
          <View className="w-full h-[410px] mt-[20px]">
            {/* <MainCard /> */}
            <MainCarousel itemHeight={400} containerHeight={410} />
          </View>

          {/* 내 플랜 */}
          <View className="w-full h-[215px] mt-[35px]">
            <MainMyPlan />
          </View>

          <View className="w-full h-[50px]"></View>
        </ScrollView>
      </View>
    </View>
  );
}
