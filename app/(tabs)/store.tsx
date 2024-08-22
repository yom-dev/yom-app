import MainCarousel from "@/components/Carousel/MainCarousel";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  ScrollView,
  FlatList,
} from "react-native";

import StoreCard from "@/components/StoreCard/StoreCard";

export default function Plan() {
  const cards = [
    {
      key: "1",
      planName: "meditation",
      startColor: "#9bd069",
      endColor: "#d0ad69",
      title: "Meditation",
      subTitle: "Excercise for Healthier Mind",
      isActive: true,
    },

    {
      key: "2",
      planName: "vocab",
      startColor: "#eea901",
      endColor: "#f0ddad",
      title: "Vocabulary",
      subTitle: "Coming Soon",
      isActive: false,
    },
    {
      key: "3",
      startColor: "#615EE2",
      endColor: "#BA8DF3",
      title: "Reading",
      subTitle: "Coming Soon",
      isActive: false,
      planName: "reading",
    },
    {
      key: "4",
      startColor: "#979797",
      endColor: "#CAC9C9",
      title: "Workout",
      subTitle: "Coming Soon",
      planName: "workout",
      isActive: false,
    },
    {
      key: "4",
      startColor: "#BC6C25",
      endColor: "#F3DFC1",
      title: "Bible Reading",
      subTitle: "Coming Soon",
      planName: "bible",
      isActive: false,
    },
  ];
  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <View className="w-full h-full">
          <View className="w-full h-full mt-[20px]">
            <FlatList
              data={cards}
              numColumns={2}
              className="w-full h-fit "
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{
                justifyContent: "space-between",

                marginBottom: 20,
              }}
              ListFooterComponent={<View className="w-full h-[5px]"></View>}
              ListHeaderComponent={
                <View className="h-fit flex flex-col justify-end mb-[30px]">
                  <Text className="text-[32px] text-yomBlack font-[WantedSB]">
                    Store
                  </Text>
                </View>
              }
              renderItem={({ item }) => (
                <View className="w-[45%]">
                  <StoreCard
                    startColor={item.startColor}
                    endColor={item.endColor}
                    title={item.title}
                    description={item.subTitle}
                    planName={item.planName}
                    isActive={item.isActive}
                  />
                </View>
              )}
              keyExtractor={(item) => item.key}
            />
          </View>

          <View className="w-full h-[50px]"></View>
        </View>
      </View>
    </View>
  );
}
