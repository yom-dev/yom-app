import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import BiblePlanItem from "./BiblePlanItem";
import getBiblePlanNames from "@/utils/BibleReading/getBiblePlanNames";

const MyBiblePlans = () => {
  const { data, loading, error } = getBiblePlanNames();

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
          <BiblePlanItem title={item.planName} startDate={item.created_at} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />} // 간격 10px
      />
    </View>
  );
};

export default MyBiblePlans;
