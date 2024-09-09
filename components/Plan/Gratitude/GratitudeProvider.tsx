import { View } from "react-native";
import React from "react";
import GratitudeContent from "./PlanContent/GratitudeContent";
import GratitudeRecord from "./PlanRecord/GratitudeRecord";
import GratitudeSetting from "./PlanSetting/GratitudeSetting";

interface GratitudeProviderProps {
  index: number;
}

const GratitudeProvider = ({ index }: GratitudeProviderProps) => {
  return (
    <View>
      {index === 0 && <GratitudeContent />}
      {index === 1 && <GratitudeRecord />}
      {index === 2 && <GratitudeSetting />}
    </View>
  );
};

export default GratitudeProvider;
