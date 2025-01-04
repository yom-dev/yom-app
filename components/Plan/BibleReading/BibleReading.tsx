import { View, Text } from "react-native";
import React, { useState } from "react";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import BibleReadingProvider from "@/components/Plan/BibleReading/BibleReadingProvider";
import useStoredPlanName from "@/utils/BibleReading/getStoredPlanName";

const BibleReading = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState("Main");
  const { planName, loading, error } = useStoredPlanName();

  return (
    <View className="w-full flex-row justify-center bg-white h-full">
      <View className="w-[90%] bg-white h-full">
        <SegmentedControl
          values={["Old", "New", "Stats", "Settings"]}
          selectedIndex={selectedIndex}
          onChange={(event) => {
            setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
            setSelectedValue(event.nativeEvent.value);
          }}
        />

        {loading ? (
          <View className="flex-1 justify-center items-center">
            <Text>Loading...</Text>
          </View>
        ) : (
          <BibleReadingProvider index={selectedIndex} planName={planName} />
        )}
      </View>
    </View>
  );
};

export default BibleReading;
