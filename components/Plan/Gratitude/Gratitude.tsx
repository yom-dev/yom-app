import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import GratitudeProvider from "./GratitudeProvider";
import ContentPage from "@/app/plan/plan/[contentPlanName]";
import ContentPageHeader from "@/components/Shared/Header/ContentPageHeader";

const Gratitude = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState("Main");

  return (
    <View className="w-full flex-row justify-center bg-white h-full">
      <View className="w-[90%] bg-white h-full">
        <ContentPageHeader color={"#000000"} />

        <SegmentedControl
          values={["Main", "Record", "Settings"]}
          selectedIndex={selectedIndex}
          onChange={(event) => {
            setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
            setSelectedValue(event.nativeEvent.value);
          }}
        />
        <GratitudeProvider index={selectedIndex} />
      </View>
    </View>
  );
};

export default Gratitude;
