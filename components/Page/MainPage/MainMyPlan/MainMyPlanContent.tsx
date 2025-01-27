import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import PlanCard from "@/components/Shared/PlanCard/PlanCard";
const MainMyPlanContent = () => {
  const cards = [
    {
      key: "1",
      startColor: "#9bd069",
      endColor: "#d0ad69",
      title: "Meditation",
      planName: "meditation",
      subTitle: "Coming Soon",
    },
    {
      key: "2",
      startColor: "#979797",
      endColor: "#CAC9C9",
      title: "Workout",
      planName: "workout",
      subTitle: "Coming Soon",
    },
    {
      key: "3",
      startColor: "#615EE2",
      endColor: "#BA8DF3",
      title: "Reading",
      planName: "bibleReadin",
      subTitle: "Coming Soon",
    },
    {
      key: "4",
      startColor: "#EEA901",
      endColor: "#F0DDAD",
      title: "Vocab",
      planName: "vocab",
      subTitle: "Coming Soon",
    },
    {
      key: "5",
      startColor: "#13201B",
      endColor: "#2B8364",
      title: "Gratitude",
      subTitle: "Coming Soon",
      planName: "gratitude",
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
              <PlanCard
                size="medium"
                planName={item.planName}
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
