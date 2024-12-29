import { View, Text } from "react-native";
import React, { useState } from "react";
import OldTestment from "./Content/OldTestment";
import NewTestment from "./Content/NewTestment";
import PlanNotificationSetting from "@/components/Plan/Shared/PlanNotificationSetting";
import Stats from "./Stats/Stats";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import getBibleReadingContent from "@/utils/BibleReading/getBibleReadingContent";

interface BibleReadingProviderProps {
  index: number;
}

const BibleReadingProvider = ({ index }: BibleReadingProviderProps) => {
  const { data, error, loading, refetch } = getBibleReadingContent();

  console.log("Data:", data);
  console.log("Error:", error);
  console.log("Loading:", loading);

  return (
    <View>
      {index === 3 ? null : (
        <View className="w-full mt-[25px] flex-row justify-between items-end">
          <View className="w-[85%] h-[30px]">
            <Text className="font-[WantedM] text-[25px]">
              2025 Bible Reading
            </Text>
          </View>
          <TouchableOpacity>
            <Text className="font-[WantedM] text-[11px] text-bibleBrown">
              change plan
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {index === 0 && (
        <OldTestment
          data={data}
          loading={loading}
          refetch={refetch}
          error={error}
        />
      )}
      {index === 1 && (
        <NewTestment
          data={data}
          loading={loading}
          refetch={refetch}
          error={error}
        />
      )}
      {index === 2 && (
        <Stats data={data} loading={loading} refetch={refetch} error={error} />
      )}
      {index === 3 && <PlanNotificationSetting planName="bibleReading" />}
    </View>
  );
};

export default BibleReadingProvider;
