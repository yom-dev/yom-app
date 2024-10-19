import { View, Text } from "react-native";
import React from "react";

const AboutUs = () => {
  return (
    <View className="bg-yomWhite w-full h-full flex justify-center items-center">
      <View className="w-[90%] h-full flex justify-center items-center">
        <Text className="font-[WantedSB] text-[24px] mb-[25px]">
          "Live your day to the fullest."
        </Text>
        <View className="w-full h-[150px] ">
          <Text className="font-[WantedR] text-[18px] text-justify">
            We are yom, a team of developers, designers, and creators who are
            passionate about creating a healthy and productive lifestyle. Our
            mission is to{" "}
            <Text className="font-[WantedSB] text-yomGreen">
              help our users to live out the given day to the fullest.
            </Text>{" "}
            Make each day count with yom.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AboutUs;
