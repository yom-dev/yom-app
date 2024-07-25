import { View, Text, ScrollView } from "react-native";
import React from "react";
import PlanCardMeditation from "@/components/PlanCard/PlanCardMeditation";
import PlanCardReading from "@/components/PlanCard/PlanCardReading";
import PlanCardVocab from "../PlanCard/PlanCardVocab";
import PlanCardWorkout from "../PlanCard/PlanCardWorkout";
const MainMyPlanContent = () => {
  return (
    <View className=" w-full h-full flex justify-center">
      <View className="w-full h-[170px]">
        <ScrollView
          className="w-full"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View className="mr-[10px]">
            <PlanCardMeditation
              size="medium"
              startColor="#9bd069"
              endColor="#d0ad69"
              title="Meditation"
              subTitle="Coming Soon"
            />
          </View>
          <View className="mr-[10px]">
            <PlanCardWorkout
              size="medium"
              startColor="#979797"
              endColor="#CAC9C9"
              title="Workout"
              subTitle="Coming Soon"
            />
          </View>

          <View className="mr-[10px]">
            <PlanCardReading
              size="medium"
              startColor="#615EE2"
              endColor="#BA8DF3"
              title="Reading"
              subTitle="Coming Soon"
            />
          </View>

          <View className="mr-[10px]">
            <PlanCardVocab
              size="medium"
              startColor="#EEA901"
              endColor="#F0DDAD"
              title="Vocab"
              subTitle="Coming Soon"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MainMyPlanContent;
