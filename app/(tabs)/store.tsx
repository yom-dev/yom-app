import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { supabase } from "@/utils/supabase";
import StoreCard from "@/components/StorePage/StoreCard/StoreCard";
import { ActivityIndicator } from "react-native";

// Supabase에서 가져오는 planStore 데이터의 타입 정의
interface PlanStore {
  id: number;
  isActive: boolean;
  planName: string;
  subTitle: string;
  title: string;
}

export default function Plan() {
  // planStore 타입을 지정하여 상태를 설정
  const [planStore, setPlanStore] = useState<PlanStore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanStore = async () => {
      let { data, error } = await supabase.from("planStore").select("*");
      if (error) {
        console.error("Error fetching plan store data:", error);
      } else {
        setPlanStore(data ?? []); // null일 경우 빈 배열로 처리
        console.log(data); // Supabase에서 받아온 데이터 로그 확인
      }
      setLoading(false);
    };

    fetchPlanStore();
  }, []);

  if (loading) {
    return (
      <View className="h-full w-full flex justify-center items-center bg-yomWhite">
        <ActivityIndicator />{" "}
      </View>
    );
  }

  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <View className="w-full h-full">
          <View className="w-full h-full mt-[20px]">
            <FlatList
              data={planStore} // Supabase에서 가져온 데이터를 사용
              numColumns={2}
              className="w-full h-fit"
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{
                justifyContent: "space-between",
                marginBottom: 20,
              }}
              ListFooterComponent={<View className="w-full h-[5px]"></View>}
              ListHeaderComponent={
                <View className="h-fit flex flex-col justify-end mb-[30px]">
                  <Text className="text-[32px] text-yomBlack font-[WantedSB]">
                    Store
                  </Text>
                </View>
              }
              renderItem={({ item }) => (
                <View className="w-[45%]">
                  <StoreCard
                    title={item.title}
                    description={item.subTitle}
                    planName={item.planName}
                    isActive={item.isActive}
                  />
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>

          <View className="w-full h-[50px]"></View>
        </View>
      </View>
    </View>
  );
}
