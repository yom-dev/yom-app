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
import PlanCardMeditation from "@/components/PlanCard/PlanCardMeditation";
import PlanCardReading from "@/components/PlanCard/PlanCardReading";
import PlanCardVocab from "@/components/PlanCard/PlanCardVocab";
import PlanCardWorkout from "@/components/PlanCard/PlanCardWorkout";
import PlanCardGratitude from "@/components/PlanCard/PlanCardGratitude";

export default function Plan() {
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
    {
      key: "5",
      Component: PlanCardGratitude,
      startColor: "#13201B",
      endColor: "#2B8364",
      title: "하루감사",
      subTitle: "Coming Soon",
    },
    {
      key: "5",
      Component: PlanCardGratitude,
      startColor: "#13201B",
      endColor: "#2B8364",
      title: "하루감사",
      subTitle: "Coming Soon",
    },
    {
      key: "5",
      Component: PlanCardGratitude,
      startColor: "#13201B",
      endColor: "#2B8364",
      title: "하루감사",
      subTitle: "Coming Soon",
    },
    {
      key: "5",
      Component: PlanCardGratitude,
      startColor: "#13201B",
      endColor: "#2B8364",
      title: "하루감사",
      subTitle: "Coming Soon",
    },
  ];
  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <View className="w-full h-full">
          <View className="h-fit flex flex-col justify-end mt-[20px]">
            <Text className="text-[32px] text-yomBlack font-[WantedSB]">
              플랜
            </Text>
          </View>

          <View className="h-fit flex flex-col justify-end mt-[20px]">
            <Text className="text-[24px] text-yomBlack font-[WantedSB]">
              내 플랜
            </Text>
          </View>
          <View className="w-full h-full">
            <FlatList
              data={cards}
              numColumns={3}
              className="w-full h-fit "
              columnWrapperStyle={{
                justifyContent: "space-between",
                marginBottom: 20,
              }}
              renderItem={({ item }) => (
                <View>
                  <item.Component
                    size="small"
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

          <View className="w-full h-[50px]"></View>
        </View>
      </View>
    </View>
  );
}
