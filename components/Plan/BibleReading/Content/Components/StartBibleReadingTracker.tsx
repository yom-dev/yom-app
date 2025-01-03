import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import CreatePlanModal from "./CreateBiblePlan/CreatePlanModal";
import { icons } from "@/constants/Icons";

const StartBibleReadingTracker: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false); // Modal visibility state
  const icon = icons.bibleReading;

  return (
    <View className="w-full h-full flex-col justify-start items-center">
      <View className="mt-[45px] mb-[40px]">
        <Text className="font-[WantedSB] text-[22px]">
          Bible Reading Tracker
        </Text>
      </View>

      {/* TouchableOpacity to trigger modal */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View className="w-[250px] h-[250px] bg-bibleLightBrown rounded-full border-[3px] border-bibleIvory">
          <ImageBackground
            source={icon}
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

      {/* CreatePlanModal with visibility control */}
      <CreatePlanModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default StartBibleReadingTracker;
