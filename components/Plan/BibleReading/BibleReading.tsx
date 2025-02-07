import React, { useState } from "react";
import { View, Text } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import BibleReadingProvider from "@/components/Plan/BibleReading/BibleReadingProvider";
import useStoredPlanName from "@/utils/BibleReading/getStoredPlanName";
import ContentPageHeader from "@/components/Shared/Header/ContentPageHeader";

const BibleReading = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState("Main");
  const { planName, loading, error } = useStoredPlanName();
  const [refreshKey, setRefreshKey] = useState(0); // Key to force re-render

  const refreshPage = () => {
    setRefreshKey((prev) => prev + 1); // Update key to trigger re-mount
  };

  return (
    <View className="w-full h-full flex-row justify-center bg-white">
      <View className="w-[90%] bg-white h-full">
        <ContentPageHeader />

        <View className="w-full h-[4%] flex justify-end">
          <SegmentedControl
            values={["Old", "New", "Stats", "Settings"]}
            selectedIndex={selectedIndex}
            onChange={(event) => {
              setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
              setSelectedValue(event.nativeEvent.value);
            }}
          />
        </View>

        {loading ? (
          <View className="flex-1 justify-center items-center">
            <Text>Loading...</Text>
          </View>
        ) : (
          <View className="w-full h-[85%]">
            <BibleReadingProvider
              key={refreshKey} // Force re-render by changing key
              index={selectedIndex}
              planName={planName}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default BibleReading;
