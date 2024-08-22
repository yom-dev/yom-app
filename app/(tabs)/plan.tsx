import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  ScrollView,
  FlatList,
} from "react-native";

import PlanCardWide from "@/components/PlanCard/PlanCardWide";

export default function Plan() {
  const cards = [
    {
      key: "1",
      planName: "meditation",
      title: "Meditation",
      subTitle: "Coming Soon",
    },
    {
      key: "2",
      planName: "reading",
      title: "Reading",
      subTitle: "Coming Soon",
    },
    {
      key: "3",
      planName: "vocab",
      title: "Vocabulary",
      subTitle: "Coming Soon",
    },
  ];
  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <View className="w-full h-full">
          <View className="w-full  h-full mt-[20px]">
            <FlatList
              data={cards}
              numColumns={1}
              className="w-full h-fit"
              renderItem={({ item }) => (
                <View className="mb-[10px]">
                  <PlanCardWide
                    planName={item.planName}
                    title={item.title}
                    subTitle={item.subTitle}
                  />
                </View>
              )}
              keyExtractor={(item) => item.key}
              ListHeaderComponent={
                <View className="h-fit flex flex-col justify-end mb-[30px]">
                  <Text className="text-[32px] text-yomBlack font-[WantedSB]">
                    My Plan
                  </Text>
                </View>
              }
            />
          </View>

          <View className="w-full h-[50px]"></View>
        </View>
      </View>
    </View>
  );
}
