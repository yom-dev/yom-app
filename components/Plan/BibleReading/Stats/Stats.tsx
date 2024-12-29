import { View, Text } from "react-native";
import React from "react";
import { BibleReadingContentType } from "@/shared/types/BibleReadingContentType";
interface StatsProps {
  data: BibleReadingContentType[] | null;
  loading: boolean;
  refetch: () => void;
  error: string | null;
}

const Stats: React.FC<StatsProps> = ({ data, loading, refetch, error }) => {
  return (
    <View>
      <Text>Stats</Text>
    </View>
  );
};

export default Stats;
