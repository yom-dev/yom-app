import { View, Text } from "react-native";
import React, { useEffect } from "react";
import OldTestment from "./Content/OldTestment";
import NewTestment from "./Content/NewTestment";
import PlanNotificationSetting from "@/components/Plan/Shared/PlanNotificationSetting";
import Stats from "./Stats/Stats";
import { TouchableOpacity } from "react-native-gesture-handler";
import getBibleReadingContent from "@/utils/BibleReading/getBibleReadingContent";
import { useOldTestamentStore } from "@/shared/store/BibleReading/useOldTestamentStore";
import { useNewTestamentStore } from "@/shared/store/BibleReading/useNewTestamentStore";

interface BibleReadingProviderProps {
  index: number;
}

const BibleReadingProvider = ({ index }: BibleReadingProviderProps) => {
  const { data, error, loading, refetch } = getBibleReadingContent("Test1");

  const setOldTestamentBooks = useOldTestamentStore(
    (state) => state.setOldTestamentBooks
  );
  const setNewTestamentBooks = useNewTestamentStore(
    (state) => state.setNewTestamentBooks
  );

  useEffect(() => {
    if (data?.oldTestament) {
      setOldTestamentBooks(data.oldTestament);
    }
    if (data?.newTestament) {
      setNewTestamentBooks(data.newTestament);
    }
    console.log(data);
  }, [data, setOldTestamentBooks, setNewTestamentBooks]);

  return (
    <View>
      {index === 3 ? null : (
        <View className="w-full mt-[25px] flex-row justify-between items-end">
          <View className="w-[85%] h-[30px]">
            <Text className="font-[WantedM] text-[25px]">
              2025 Bible Reading
            </Text>
          </View>
          <TouchableOpacity>
            <Text className="font-[WantedM] text-[11px] text-bibleBrown">
              change plan
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {index === 0 && (
        <OldTestment
          data={data?.oldTestament}
          loading={loading}
          refetch={refetch}
          error={error}
        />
      )}
      {index === 1 && (
        <NewTestment
          data={data?.newTestament}
          loading={loading}
          refetch={refetch}
          error={error}
        />
      )}
      {index === 2 && (
        <Stats data={data} loading={loading} refetch={refetch} error={error} />
      )}
      {index === 3 && <PlanNotificationSetting planName="bibleReading" />}
    </View>
  );
};

export default BibleReadingProvider;
