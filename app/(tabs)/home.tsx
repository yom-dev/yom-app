import {
  View,
  Text,
  Button,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import MainMyPlan from "@/components/MainMyPlan/MainMyPlan";
import { useState } from "react";
import MainCarousel from "@/components/Carousel/MainCarousel";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        {/* 스크롤 뷰 */}
        {/* <ScrollView
          className="w-full h-full"
          showsVerticalScrollIndicator={false}
        > */}
        <FlatList
          data={[]}
          renderItem={null}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View>
              <View className="h-fit flex flex-col justify-end mt-[20px]">
                <Text className="text-[32px] text-yomBlack font-[WantedSB]">
                  Welcome, Joseph.
                </Text>
              </View>

              <Link href="/signin">
                <Text>Login</Text>{" "}
              </Link>
              <Link href="/(auth)/profileSetting">
                <Text>profileSetting</Text>{" "}
              </Link>

              <View className="w-full h-[410px] mt-[20px]">
                {/* <MainCard /> */}
                <MainCarousel itemHeight={400} containerHeight={410} />
              </View>

              <View className="w-full h-[215px] mt-[35px]">
                <MainMyPlan />
              </View>

              <View className="w-full h-[50px]"></View>
            </View>
          }
        />

        {/* </ScrollView> */}
      </View>
    </View>
  );
}
