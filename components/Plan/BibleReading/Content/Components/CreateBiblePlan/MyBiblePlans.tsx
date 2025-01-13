import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import BiblePlanItem from "./BiblePlanItem";
import getBiblePlanNames from "@/utils/BibleReading/getBiblePlanNames";

interface MyBiblePlansProps {
  onClose: () => void;
}

const MyBiblePlans: React.FC<MyBiblePlansProps> = ({ onClose }) => {
  const { data, loading, error, refetch } = getBiblePlanNames();
  const [refreshKey, setRefreshKey] = useState(0); // 키 상태 관리

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1); // 상태 업데이트로 강제 재렌더링
  };

  if (loading) {
    return (
      <View className="w-full h-full py-6 flex justify-center items-center">
        <ActivityIndicator size={"small"} color={"#BC6619"} />
      </View>
    );
  }

  if (error) {
    return (
      <View className="w-full h-full py-6 flex justify-center items-center">
        <Text>Error occurred: please try again.</Text>
      </View>
    );
  }

  return (
    <View className="w-full h-full py-6 ">
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <BiblePlanItem
            title={item.planName}
            startDate={item.created_at}
            onClose={() => {
              onClose();
            }}
            onRefresh={refetch} // 자식에서 호출 가능
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />} // 간격 10px
      />
    </View>
  );
};

export default MyBiblePlans;
