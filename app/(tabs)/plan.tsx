import { StyleSheet, View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";

import PlanCardWide from "@/components/Shared/PlanCard/PlanCardWide";
import useGetMyPlans from "@/hooks/useGetMyPlans";

export default function Plan() {
  const { trueKeys, loading, error } = useGetMyPlans();

  // data, loading, error가 변경될 때마다 로그 출력
  useEffect(() => {
    if (loading) {
      console.log("Loading...");
    } else if (error) {
      console.error("Error:", error);
    } else {
      console.log("Data:", trueKeys);
    }
  }, [trueKeys, loading, error]); // 의존성 배열에 data, loading, error 추가

  if (loading) {
    return <Text>Loading...</Text>; // 로딩 중일 때 로딩 메시지 표시
  }

  if (error) {
    return <Text>Error: {error}</Text>; // 에러 발생 시 에러 메시지 표시
  }

  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <View className="w-full h-full">
          <View className="w-full h-full mt-[20px]">
            <FlatList
              data={trueKeys}
              numColumns={1}
              className="w-full h-fit"
              renderItem={({ item }) => (
                <View className="mb-[10px]">
                  <PlanCardWide planName={item.planName} />
                </View>
              )}
              keyExtractor={(item) => item.key}
              ListHeaderComponent={
                <View className="h-fit flex flex-col justify-end mb-[30px]">
                  <Text className="text-[32px] text-yomBlack font-[WantedSB]">
                    My Plan
                  </Text>
                </View>
              }
            />
          </View>

          <View className="w-full h-[50px]"></View>
        </View>
      </View>
    </View>
  );
}
