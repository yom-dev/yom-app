// GratitudeProvider.tsx
import { View } from "react-native";
import React, { useEffect } from "react";
import GratitudeContent from "./PlanContent/GratitudeContent";
import GratitudeRecord from "./PlanRecord/GratitudeRecord";
import GratitudeSetting from "./PlanSetting/GratitudeSetting";
import getGratitudeItems from "@/utils/Gratitude/getGratitudeItems";

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
      {index === 2 && <GratitudeSetting />}
    </View>
  );
};

export default GratitudeProvider;
