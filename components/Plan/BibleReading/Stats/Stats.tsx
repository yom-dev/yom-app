import { View, Text, ScrollView } from "react-native";
import React from "react";
import { BibleReadingContentType } from "@/shared/types/BibleReadingContentType";
import MainCircleProgress from "./MainCircleProgress";
import TestamentProgressComponent from "./TestamentProgressComponent";

import { AnimatedCircularProgress } from "react-native-circular-progress";

interface StatsProps {
  data: BibleReadingContentType | null;
  loading: boolean;
  refetch: () => void;
  error: string | null;
}

const Stats: React.FC<StatsProps> = ({ data, loading, refetch, error }) => {
  return (
    <ScrollView className="w-full h-full flex ">
      <View className="mt-[50px]">
        <MainCircleProgress />
      </View>

      <View className="mt-[30px]">
        <TestamentProgressComponent
          title="New Testament"
          fill={50}
          percentage={50}
        />
      </View>

      <View className="mt-[30px]">
        <TestamentProgressComponent
          title="Old Testament"
          fill={60}
          percentage={60}
        />
      </View>
    </ScrollView>
  );
};

export default Stats;
