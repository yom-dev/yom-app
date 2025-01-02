import { View, Text, ActivityIndicator, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import OldTestment from "./Content/OldTestment";
import NewTestment from "./Content/NewTestment";
import PlanNotificationSetting from "@/components/Plan/Shared/PlanNotificationSetting";
import Stats from "./Stats/Stats";
import { TouchableOpacity } from "react-native-gesture-handler";
import getBibleReadingContent from "@/utils/BibleReading/getBibleReadingContent";
import { useOldTestamentStore } from "@/shared/store/BibleReading/useOldTestamentStore";
import { useNewTestamentStore } from "@/shared/store/BibleReading/useNewTestamentStore";
import StartBibleReadingTracker from "./Content/Components/StartBibleReadingTracker";

interface BibleReadingProviderProps {
  index: number;
}

const BibleReadingProvider = ({ index }: BibleReadingProviderProps) => {
  //서버로부터 데이터 받아오기
  const { data, error, loading, refetch } = getBibleReadingContent("Test1");

  //서버로부터 받아온 데이터를 store(zustand)에 저장하는 함수 지정.
  const setOldTestamentBooks = useOldTestamentStore(
    (state) => state.setOldTestamentBooks
  );
  const setNewTestamentBooks = useNewTestamentStore(
    (state) => state.setNewTestamentBooks
  );

  // data가 변경될 때마다, 구약 및 신약 책이 새로 저장 될 마다 store에 저장
  useEffect(() => {
    if (data?.oldTestament) {
      setOldTestamentBooks(data.oldTestament);
    }
    if (data?.newTestament) {
      setNewTestamentBooks(data.newTestament);
    }
    console.log(data);
  }, [data, setOldTestamentBooks, setNewTestamentBooks]);

  //loading 중일 때, 로딩 화면 출력
  if (loading) {
    return (
      <View className="w-full h-full flex-row justify-center items-center">
        <ActivityIndicator size={"large"} color={"#BC6619"} />
      </View>
    );
  }

  //아무런 데이터가 없을 때, 아이콘과 함께 안내 문구 출력
  if (data === undefined) {
    return <StartBibleReadingTracker />;
  }

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
