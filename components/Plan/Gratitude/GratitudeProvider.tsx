import { View } from "react-native";
import React from "react";
import GratitudeContent from "./PlanContent/GratitudeContent";
import GratitudeRecord from "./PlanRecord/GratitudeRecord";
import GratitudeSetting from "./PlanSetting/GratitudeSetting";
import getGratitudeItems from "@/utils/Gratitude/getGratitudeItems";
import PlanNotificationSetting from "@/components/Plan/Shared/PlanNotificationSetting";

interface GratitudeProviderProps {
  index: number;
}

const GratitudeProvider = ({ index }: GratitudeProviderProps) => {
  const { data, error, loading, refetch } = getGratitudeItems();

  return (
    <View>
      {index === 0 && (
        <GratitudeContent data={data} refetch={refetch} loading={loading} />
      )}
      {index === 1 && <GratitudeRecord data={data} />}
      {index === 2 && <PlanNotificationSetting planName="gratitude" />}
      {/* planName을 props로 전달 */}
    </View>
  );
};

export default GratitudeProvider;
