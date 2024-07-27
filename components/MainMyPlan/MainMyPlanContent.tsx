import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import PlanCardMeditation from "@/components/PlanCard/PlanCardMeditation";
import PlanCardReading from "@/components/PlanCard/PlanCardReading";
import PlanCardVocab from "../PlanCard/PlanCardVocab";
import PlanCardWorkout from "../PlanCard/PlanCardWorkout";
const MainMyPlanContent = () => {
  const cards = [
    {
      key: "1",
      Component: PlanCardMeditation,
      startColor: "#9bd069",
      endColor: "#d0ad69",
      title: "명상",
      subTitle: "Coming Soon",
    },
    {
      key: "2",
      Component: PlanCardWorkout,
      startColor: "#979797",
      endColor: "#CAC9C9",
      title: "근력 운동",
      subTitle: "Coming Soon",
    },
    {
      key: "3",
      Component: PlanCardReading,
      startColor: "#615EE2",
      endColor: "#BA8DF3",
      title: "독서",
      subTitle: "Coming Soon",
    },
    {
      key: "4",
      Component: PlanCardVocab,
      startColor: "#EEA901",
      endColor: "#F0DDAD",
      title: "영어단어",
      subTitle: "Coming Soon",
    },
  ];
  return (
    <View className=" w-full h-full flex justify-center">
      <View className="w-full h-[170px]">
        <FlatList
          data={cards}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ marginRight: 10 }}>
              <item.Component
                size="medium"
                startColor={item.startColor}
                endColor={item.endColor}
                title={item.title}
                subTitle={item.subTitle}
              />
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
};

export default MainMyPlanContent;
