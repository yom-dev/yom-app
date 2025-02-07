import { View, Text } from "react-native";
import React from "react";

import getGratitudeItems from "@/utils/Gratitude/getGratitudeItems";
import PlanNotificationSetting from "@/components/Plan/Shared/PlanNotificationSetting";
import SleepAssistantContent from "./Main/SleepAssistantContent";
import SleepAssistantStat from "./Stat/SleepAssistantStat";

interface GratitudeProviderProps {
  index: number;
}

const SleepAssistantProvider = ({ index }: GratitudeProviderProps) => {
  //   const { data, error, loading, refetch } = getGratitudeItems();

  return (
    <View>
      {index === 0 && <SleepAssistantContent />}
      {index === 1 && <SleepAssistantStat />}
      {index === 2 && (
        <PlanNotificationSetting planName="sleepAssistant" darkMode={true} />
      )}

      {/* planName을 props로 전달 */}
    </View>
  );
};

export default SleepAssistantProvider;
