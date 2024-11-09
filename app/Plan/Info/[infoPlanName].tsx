import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
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
import useGetMyPlans from "@/hooks/useGetMyPlans";
type PlanName = keyof typeof icons;

const InfoPage = () => {
  const { infoPlanName } = useLocalSearchParams();
  const {
    data: infoData,
    loading,
    error,
  } = useGetPlanInfo(infoPlanName as string);
  const { data: userId } = useGetUserId();
  const {
    trueKeys,
    loading: myPlansLoading,
    error: myPlansError,
  } = useGetMyPlans();

  // Check if the current plan is already in the user's plans
  const isInMyPlans = trueKeys.some((plan) => plan.planName === infoPlanName);

  useEffect(() => {
    console.log("True Keys:", trueKeys);
  }, [trueKeys]);

  if (loading || myPlansLoading) {
    return (
      <View className="h-full w-full flex justify-center items-center bg-yomWhite">
        <ActivityIndicator />
      </View>
    );
  }

  if (error || myPlansError || !infoData) {
    return (
      <View className="h-full w-full flex justify-center items-center bg-yomWhite">
        <Text>{error || myPlansError || "No data found"}</Text>
      </View>
    );
  }

  const icon = icons[infoData.planName as PlanName];

  const handleSave = async () => {
    const { data, error } = await supabase
      .from("my_plans")
      .update({ [infoPlanName as string]: true })
      .eq("id", userId);

    if (error) {
      console.error("Error updating data:", error);
    } else {
      console.log("Data updated successfully:", data);
      alert("Data updated successfully");
      router.replace("/(tabs)/plan");
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
              source={icon} // Apply the icon from icons object
              className="w-full h-full flex justify-center items-center"
              resizeMode="contain"
            />
          </View>

          {/* content */}
          <View className="flex-row justify-center mt-[50px]">
            <InfoContent text={infoData.description} />
          </View>

          <View className="h-[50px]"></View>
        </ScrollView>

        {/* button */}
        <View className="w-full h-[50px] bottom-5">
          {infoData.isActive === false ? (
            // When isActive is false, show "Coming Soon"
            <View className="border-yomGreen border-[2px] w-full h-full rounded-full flex-1 justify-center items-center">
              <Text className="text-yomGreen font-[WantedSB] text-[18px]">
                Coming Soon.
              </Text>
            </View>
          ) : // When isActive is true, check if it's already in the user's plans
          isInMyPlans ? (
            <View className="border-yomGreen border-[2px] w-full h-full rounded-full flex-1 justify-center items-center">
              <Text className="text-yomGreen font-[WantedSB] text-[18px]">
                Already in my plan.
              </Text>
            </View>
          ) : (
            <CustomButton
              title="Add to My Plan"
              titleSize={18}
              backgroundColor="yomGreen"
              activeBackgroundColor="yomDarkGreen"
              textColor="yomWhite"
              onPress={handleSave}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default InfoPage;
