import { View, Text } from "react-native";
import React, { useState } from "react";
import OldTestment from "./Content/OldTestment";
import NewTestment from "./Content/NewTestment";
import PlanNotificationSetting from "@/components/Plan/Shared/PlanNotificationSetting";
import Stats from "./Stats/Stats";
import DropDownPicker from "react-native-dropdown-picker";

interface GratitudeProviderProps {
  index: number;
}

const BibleReadingProvider = ({ index }: GratitudeProviderProps) => {
  return (
    <View>
      <View className="w-full mt-[25px] flex-row justify-between items-end">
        <View className="w-[85%] h-[30px]">
          <Text className="font-[WantedM] text-[25px]">2025 Bible Reading</Text>
        </View>
        <Text className="font-[WantedR] text-[11px]">edit plan</Text>
      </View>

      {index === 0 && <OldTestment />}
      {index === 1 && <NewTestment />}
      {index === 2 && <Stats />}
      {index === 3 && <PlanNotificationSetting planName="bibleReading" />}
    </View>
  );
};

export default BibleReadingProvider;
