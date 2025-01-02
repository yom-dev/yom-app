import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { icons } from "@/constants/Icons";

import React from "react";

const StartBibleReadingTracker = () => {
  const icon = icons.bibleReading;

  return (
    <View className="w-full h-full flex-col justify-start items-center ">
      <View className=" mt-[45px] mb-[40px]">
        <Text className="font-[WantedSB] text-[22px]">
          Bible Reading Tracker
        </Text>
      </View>
      <TouchableOpacity>
        <View className="w-[250px] h-[250px] bg-bibleLightBrown rounded-full border-[3px] border-bibleIvory">
          <ImageBackground
            source={icon} // Apply the icon from icons object
            className="w-full h-full flex justify-center items-center"
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      <View className="mt-[40px]">
        <Text className="font-[WantedSB] text-[16px] text-center text-bibleBrown">
          Click the icon to create/choose {"\n"}your bible reading tracker.
        </Text>
      </View>
    </View>
  );
};

export default StartBibleReadingTracker;
