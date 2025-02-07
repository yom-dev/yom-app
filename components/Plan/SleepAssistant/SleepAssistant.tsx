import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import SleepAssistantProvider from "./SleepAssistantProvider";
import ContentPage from "@/app/plan/plan/[contentPlanName]";
import ContentPageHeader from "@/components/Shared/Header/ContentPageHeader";
import { LinearGradient } from "expo-linear-gradient";

const SleepAssistant = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState("Main");

  return (
    <LinearGradient colors={["#361E63", "#142E6F"]} start={[1, 0]} end={[0, 1]}>
      <View className="w-full flex-row justify-center bg-tranparent h-full">
        <View className="w-[90%] bg-tranparent h-full">
          <ContentPageHeader arrowColor={"#FFFFFF"} />

          <View className="w-full h-[4%] flex justify-end">
            <SegmentedControl
              values={["Main", "Stat", "Setting"]}
              selectedIndex={selectedIndex}
              onChange={(event) => {
                setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                setSelectedValue(event.nativeEvent.value);
              }}
              backgroundColor="#68647F"
              tintColor="#1E1744"
              activeFontStyle={{ color: "#FFFFFF" }}
              fontStyle={{ color: "#D9D9D9" }}
            />
          </View>
          <View className="w-full h-[85%] ">
            <SleepAssistantProvider index={selectedIndex} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SleepAssistant;
