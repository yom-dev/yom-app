import { View, Text, ActivityIndicator, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import OldTestment from "./Content/OldTestment";
import NewTestment from "./Content/NewTestment";
import PlanNotificationSetting from "@/components/Plan/Shared/PlanNotificationSetting";
import Stats from "./Stats/Stats";
import { TouchableOpacity } from "react-native-gesture-handler";
import getBibleReadingContent from "@/utils/BibleReading/getBibleReadingContent";
import { useOldTestamentStore } from "@/shared/store/BibleReading/useOldTestamentStore";
import { useNewTestamentStore } from "@/shared/store/BibleReading/useNewTestamentStore";
import StartBibleReadingTracker from "./Content/Components/StartBibleReadingTracker";
import CreatePlanModal from "./Content/Components/CreateBiblePlan/CreatePlanModal";

interface BibleReadingProviderProps {
  index: number;
  planName: string;
}

const BibleReadingProvider = ({
  index,
  planName,
}: BibleReadingProviderProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false); // Modal visibility state

  const { data, error, loading, refetch } = getBibleReadingContent(planName);

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
    // console.log(data);
  }, [data, setOldTestamentBooks, setNewTestamentBooks, refetch]);

  //loading 중일 때, 로딩 화면 출력
  if (loading) {
    return (
      <View className="w-full h-[50%] flex-row justify-center items-center ">
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
        <View className="w-full  flex-row justify-between items-end  h-[7%]">
          <View className="w-[85%] h-[30px]">
            <Text className="font-[WantedM] text-[25px]">{data?.planName}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text className="font-[WantedM] text-[11px] text-bibleBrown">
              change plan
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {index === 0 && (
        <View className="h-[93%]">
          <OldTestment
            data={data?.oldTestament}
            loading={loading}
            refetch={refetch}
            error={error}
            planName={planName}
          />
        </View>
      )}
      {index === 1 && (
        <View className="h-[93%]">
          <NewTestment
            data={data?.newTestament}
            loading={loading}
            refetch={refetch}
            error={error}
            planName={planName}
          />
        </View>
      )}
      {index === 2 && (
        <View className="h-[93%]">
          <Stats
            data={data}
            loading={loading}
            refetch={refetch}
            error={error}
          />
        </View>
      )}
      {index === 3 && <PlanNotificationSetting planName="bibleReading" />}

      <CreatePlanModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
      />
    </View>
  );
};

export default BibleReadingProvider;
