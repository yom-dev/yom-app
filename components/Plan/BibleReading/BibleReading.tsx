import { View, Text } from "react-native";
import React, { useState } from "react";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import BibleReadingProvider from "@/components/Plan/BibleReading/BibleReadingProvider";
const BibleReading = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState("Main");

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
        <BibleReadingProvider index={selectedIndex} />
      </View>
    </View>
  );
};

export default BibleReading;
