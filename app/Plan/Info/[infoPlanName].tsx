import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import CustomButton from "@/components/Shared/Button/CustomButton";
import InfoContent from "./infoContent";
import { icons } from "@/constants/Icons";
import useGetPlanInfo from "@/hooks/useGetPlanInfo"; // Import the custom hook
import { supabase } from "@/utils/supabase";
import { useGetUserId } from "@/hooks/useGetUserId";
import info from "@/app/(settings)/info";
type PlanName = keyof typeof icons;

const InfoPage = () => {
  const { infoPlanName } = useLocalSearchParams();
  const {
    data: infoData,
    loading,
    error,
  } = useGetPlanInfo(infoPlanName as string);

  const { data: userId } = useGetUserId();

  if (loading) {
    return (
      <View className="h-full w-full flex justify-center items-center bg-yomWhite">
        <ActivityIndicator />
      </View>
    );
  }

  if (error || !infoData) {
    return (
      <View className="h-full w-full flex justify-center items-center bg-yomWhite">
        <Text>{error || "No data found"}</Text>
      </View>
    );
  }

  const icon = icons[infoData.planName as PlanName]; // Use the planName from the fetched data

  const handleSave = async () => {
    const { data, error } = await supabase
      .from("myPlans")
      .update({ [infoPlanName as string]: true }) // 예시로 수정한 부분
      .eq("id", userId);

    if (error) {
      console.error("Error updating data:", error);
    } else {
      console.log("Data updated successfully:", data);
      alert("Data updated successfully");
      router.push("/(tabs)/plan");
    }
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
        <View className="w-full h-[50px] bottom-10">
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
