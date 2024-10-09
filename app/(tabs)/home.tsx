import {
  View,
  Text,
  Button,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import MainMyPlan from "@/components/MainPage/MainMyPlan/MainMyPlan";
import { useState } from "react";
import MainCarousel from "@/components/Shared/Carousel/MainCarousel";
import { Link } from "expo-router";
import { useGetUser } from "@/hooks/useGetUser";
import useGetProfile from "@/hooks/useGetProfile";

export default function HomeScreen() {
  const { data, loading, error } = useGetProfile();
  const profile = data && data.length > 0 ? data[0] : null;
  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <FlatList
          data={[]}
          renderItem={null}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View>
              <View className="h-fit flex flex-col justify-end mt-[20px]">
                <Text className="text-[32px] text-yomBlack font-[WantedSB]">
                  Welcome, {profile ? profile.firstName : ""}
                </Text>
              </View>

              <View className="w-full h-[410px] mt-[20px]">
                {/* <MainCard /> */}
                <MainCarousel itemHeight={400} containerHeight={410} />
              </View>

              {/* <View className="w-full h-[215px] mt-[35px]">
                <MainMyPlan />
              </View> */}

              <View className="w-full h-[50px]"></View>
            </View>
          }
        />

        {/* </ScrollView> */}
      </View>
    </View>
  );
}
