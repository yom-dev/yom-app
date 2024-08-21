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
import PlanCard from "@/components/PlanCard/PlanCard";

export default function Plan() {
  const cards = [
    {
      key: "1",
      planName: "meditation",
      title: "명상",
      subTitle: "Coming Soon",
    },
    {
      key: "2",
      planName: "workout",
      title: "근력 운동",
      subTitle: "Coming Soon",
    },
  ];
  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <View className="w-full h-full">
          <View className="h-fit flex flex-col justify-end mt-[20px]">
            <Text className="text-[32px] text-yomBlack font-[WantedSB]">
              My Plan
            </Text>
          </View>

          <View className="w-full  h-full mt-[30px]">
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
                  <PlanCard
                    size="small"
                    planName={item.planName}
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
