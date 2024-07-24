import { View, Text, ScrollView } from "react-native";
import React from "react";
import ParallaxScrollView from "../default/ParallaxScrollView";
import PlanCard from "../PlanCard/PlanCard";

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
            <PlanCard
              size="medium"
              startColor="#9bd069"
              endColor="#d0ad69"
              title="Meditation"
              subTitle="Coming Soon"
              icon="tree"
              iconWidth={109}
              iconHeight={109}
            />
          </View>
          <View className="mr-[10px]">
            <PlanCard
              size="medium"
              startColor="#979797"
              endColor="#CAC9C9"
              title="Workout"
              subTitle="Coming Soon"
              icon="book"
              iconWidth={109}
              iconHeight={109}
            />
          </View>

          <View className="mr-[10px]">
            <PlanCard
              size="medium"
              startColor="#615EE2"
              endColor="#BA8DF3"
              title="Meditation"
              subTitle="Coming Soon"
              icon="@/assets/images/tree-icon.png"
              iconWidth={109}
              iconHeight={109}
            />
          </View>

          <View className="mr-[10px]">
            <PlanCard
              size="medium"
              startColor="#9bd069"
              endColor="#d0ad69"
              title="Meditation"
              subTitle="Coming Soon"
              icon="@/assets/images/tree-icon.png"
              iconWidth={109}
              iconHeight={109}
            />
          </View>
          <View className="mr-[10px]">
            <PlanCard
              size="medium"
              startColor="#979797"
              endColor="#CAC9C9"
              title="Workout"
              subTitle="Coming Soon"
              icon="@/assets/images/tree-icon.png"
              iconWidth={109}
              iconHeight={109}
            />
          </View>

          <View className="mr-[10px]">
            <PlanCard
              size="medium"
              startColor="#615EE2"
              endColor="#BA8DF3"
              title="Meditation"
              subTitle="Coming Soon"
              icon="@/assets/images/tree-icon.png"
              iconWidth={109}
              iconHeight={109}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MainMyPlanContent;
