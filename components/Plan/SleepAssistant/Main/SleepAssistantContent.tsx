import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import CustomButton from "@/components/Shared/Button/CustomButton";
import CircleButton from "@/components/Shared/Button/CircleButton";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";

const SleepAssistantContent = () => {
  return (
    <View className="pt-6 w-full h-full ">
      {/* Title */}
      <Text className="font-[WantedM] text-[32px] text-white  ">
        Sleep Assistant
      </Text>

      {/* Ambience */}
      <TouchableOpacity className="w-full h-fit flex items-center  absolute top-[12%]">
        <View className="w-[80%] aspect-square rounded-full ">
          <ImageBackground
            style={{ width: "100%", height: "100%" }}
            source={require("@/assets/images/Plan/SleepAssistant/pink-noise.png")}
          />
        </View>
        <Text className="font-[WantedR] text-[18px] text-white mt-8">
          Pink Noise
        </Text>
      </TouchableOpacity>

      {/* Timer */}
      <View className="w-full h-fit flex items-center absolute bottom-[25%]">
        <Text className="font-[WantedR] text-[32px] text-white">0:00:00</Text>
      </View>

      {/* Button */}
      <View className="w-full h-[50px] flex-row justify-between  absolute bottom-[4%]">
        {/* Sleep Button */}
        <View className="w-[84%]">
          <CustomButton
            title="Sleep"
            titleSize={18}
            backgroundColor="sleepDarkNavy"
            textColor="white"
            borderColor="sleepGray"
            onPress={() => {
              console.log("Hello");
            }}
            activeBackgroundColor="yomGreen"
          />
        </View>

        {/* Ambience Button */}
        <View className="w-[50px] aspect-square">
          <CircleButton
            backgroundColor="sleepDarkNavy"
            borderColor="sleepGray"
            onPress={() => {
              console.log("Hello");
            }}
          >
            <Ionicons name="volume-medium" size={22} color={"#FFFFFF"} />
          </CircleButton>
        </View>
      </View>
    </View>
  );
};

export default SleepAssistantContent;
