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
      startColor: "#EEA901",
      endColor: "#F0DDAD",
      title: "Workout",
      subTitle: "Coming Soon",
      planName: "workout",
      isActive: false,
    },
  ];
  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <View className="w-full h-full">
          <View className="h-fit flex flex-col justify-end mt-[20px]">
            <Text className="text-[32px] text-yomBlack font-[WantedSB]">
              Store
            </Text>
          </View>

          <View className="w-full h-full mt-[30px]">
            <FlatList
              data={cards}
              numColumns={2}
              className="w-full h-fit "
              columnWrapperStyle={{
                justifyContent: "space-between",
                marginBottom: 20,
              }}
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
