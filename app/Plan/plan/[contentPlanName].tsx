import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Gratitude from "@/components/Plan/Gratitude/Gratitude";
import BibleReading from "@/components/Plan/BibleReading/BibleReading"; // BibleReading 컴포넌트 경로 확인 필요
import SleepAssistant from "@/components/Plan/SleepAssistant/SleepAssistant";
const ContentPage = () => {
  const { contentPlanName } = useLocalSearchParams();

  return (
    <View>
      {contentPlanName === "gratitude" ? (
        <Gratitude />
      ) : contentPlanName === "bibleReading" ? (
        <BibleReading />
      ) : contentPlanName === "sleepAssistant" ? (
        <SleepAssistant />
      ) : null}
    </View>
  );
};

export default ContentPage;
