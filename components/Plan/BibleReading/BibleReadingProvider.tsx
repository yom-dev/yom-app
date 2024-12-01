import { View, Text } from "react-native";
import React from "react";
import OldTestment from "./Content/OldTestment";
import NewTestment from "./Content/NewTestment";
import PlanNotificationSetting from "@/components/Plan/Shared/PlanNotificationSetting";
import Stats from "./Stats/Stats";

interface GratitudeProviderProps {
  index: number;
}

const BibleReadingProvider = ({ index }: GratitudeProviderProps) => {
  return (
    <View>
      {index === 0 && <OldTestment />}
      {index === 1 && <NewTestment />}
      {index === 2 && <Stats />}
      {index === 3 && <PlanNotificationSetting planName="bibleReading" />}
    </View>
  );
};

export default BibleReadingProvider;
