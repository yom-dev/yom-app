import { View, Text } from "react-native";
import React from "react";

import getGratitudeItems from "@/utils/Gratitude/getGratitudeItems";
import PlanNotificationSetting from "@/components/Plan/Shared/PlanNotificationSetting";

interface GratitudeProviderProps {
  index: number;
}

const SleepAssistantProvider = ({ index }: GratitudeProviderProps) => {
  //   const { data, error, loading, refetch } = getGratitudeItems();

  return (
    <View>
      {index === 0 && (
        <View>
          <Text>main</Text>
        </View>
      )}
      {index === 1 && <View></View>}
      {index === 2 && (
        <PlanNotificationSetting planName="sleepAssistant" darkMode={true} />
      )}

      {/* planName을 props로 전달 */}
    </View>
  );
};

export default SleepAssistantProvider;
