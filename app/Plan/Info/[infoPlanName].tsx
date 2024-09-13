import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import CustomButton from "@/components/Shared/Button/CustomButton";
import InfoContent from "./infoContent";
import { icons } from "@/constants/Icons";
import { supabase } from "@/utils/supabase";
import { ActivityIndicator } from "react-native";

// Define the type for the Supabase data
interface PlanStore {
  id: number;
  isActive: boolean;
  planName: string;
  subTitle: string;
  title: string;
  description: string;
}

// logos 객체의 타입을 정의합니다.
type PlanName = keyof typeof icons;

const InfoPage = () => {
  const { infoPlanName } = useLocalSearchParams();
  const [infoData, setInfoData] = useState<PlanStore | null>(null); // State for storing the fetched data
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchPlanStore = async () => {
      let { data, error } = await supabase
        .from("planStore")
        .select("*")
        .eq("planName", `${infoPlanName}`); // Filter the data by planName

      if (error) {
        console.error("Error fetching plan store data:", error);
      } else {
        if (data && data.length > 0) {
          setInfoData(data[0]); // Set the first item of the result to state
        }
        console.log(data); // Supabase에서 받아온 데이터 로그 확인
      }
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchPlanStore();
  }, []);

  if (loading) {
    return (
      <View className="h-full w-full flex justify-center items-center bg-yomWhite">
        <ActivityIndicator />
      </View>
    );
  }

  if (!infoData) {
    return (
      <View className="h-full w-full flex justify-center items-center bg-yomWhite">
        <Text>No data found</Text>
      </View>
    );
  }

  const icon = icons[infoData.planName as PlanName]; // Use the planName from the fetched data

  const handleSave = () => {
    // Handle save logic here
  };

  return (
    <View className="w-full h-full flex items-center bg-yomWhite">
      <View className="w-[90%] h-full">
        <ScrollView className="w-full h-full">
          {/* title */}
          <View className="flex-row justify-center mt-[20px]">
            <Text className="text-[24px] font-[WantedB] text-yomBlack">
              {infoData.title}
            </Text>
          </View>

          {/* image */}
          <View className="w-full h-[200px] mt-[50px]">
            <ImageBackground
              source={icon} // logos 객체에서 가져온 logo를 source에 적용
              className="w-full h-full flex justify-center items-center"
              resizeMode="contain"
            />
          </View>

          {/* content */}
          <View className="flex-row justify-center mt-[50px]">
            <InfoContent text={infoData.description} />
          </View>
        </ScrollView>

        {/* button */}
        <View className="w-full h-[50px] fixed bottom-10">
          <CustomButton
            title="Add to My Plan"
            titleSize={18}
            backgroundColor="yomGreen"
            activeBackgroundColor="yomDarkGreen"
            textColor="yomWhite"
            onPress={handleSave}
          />
        </View>
      </View>
    </View>
  );
};

export default InfoPage;
