import { View, Text, ScrollView } from "react-native";
import React from "react";
import { BibleReadingContentType } from "@/shared/types/BibleReadingContentType";
import MainCircleProgress from "./MainCircleProgress";
import TestamentProgressComponent from "./TestamentProgressComponent";
import { useNewTestamentStore } from "@/shared/store/BibleReading/useNewTestamentStore";
import { useOldTestamentStore } from "@/shared/store/BibleReading/useOldTestamentStore";
import countChaptersRead from "@/utils/BibleReading/countChaptersRead";
import countBooksRead from "@/utils/BibleReading/countBooksRead";

interface StatsProps {
  data: BibleReadingContentType | null;
  loading: boolean;
  refetch: () => void;
  error: string | null;
}

const Stats: React.FC<StatsProps> = ({ data, loading, refetch, error }) => {
  const startDate = data?.created_at
    ? new Date(data.created_at).toLocaleDateString("en-US")
    : null;

  const startDateString = startDate || "";

  const newBookData = useNewTestamentStore((state) => state.NewTestamentBooks);
  const oldBookData = useOldTestamentStore((state) => state.OldTestamentBooks);

  const newTestamentStats = countChaptersRead(newBookData);
  const oldTestamentStats = countChaptersRead(oldBookData);

  const newTestamentBooksRead = countBooksRead(newBookData);
  const oldTestamentBooksRead = countBooksRead(oldBookData);

  const wholeBiblePercentage = Number(
    (
      ((newTestamentStats.completedChapters +
        oldTestamentStats.completedChapters) /
        1189) *
      100
    ).toFixed(0)
  );

  return (
    <ScrollView className="w-full h-full flex ">
      <View className="mt-[50px]">
        <MainCircleProgress
          startDate={startDateString}
          fill={wholeBiblePercentage}
        />
      </View>

      <View className="mt-[30px]">
        <TestamentProgressComponent
          title="Old Testament"
          fill={oldTestamentStats.completionPercentage}
          percentage={oldTestamentStats.completionPercentage}
          chapterCount={oldTestamentStats.completedChapters}
          bookCount={oldTestamentBooksRead.completedBooks}
          totalBooks={39}
          totalChapters={929}
        />
      </View>

      <View className="mt-[30px]">
        <TestamentProgressComponent
          title="New Testament"
          fill={newTestamentStats.completionPercentage}
          percentage={newTestamentStats.completionPercentage}
          chapterCount={newTestamentStats.completedChapters}
          totalChapters={260}
          bookCount={newTestamentBooksRead.completedBooks}
          totalBooks={27}
        />
      </View>
    </ScrollView>
  );
};

export default Stats;
