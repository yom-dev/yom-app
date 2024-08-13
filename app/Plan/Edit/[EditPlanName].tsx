import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import GratitudeEdit from "./editContent/GratitudeEdit";

const EditPage = () => {
  const { editPlanName } = useLocalSearchParams();
  return (
    <View className="w-full h-full bg-yomWhite flex-row justify-center">
      <View className="w-[90%] flex justify-center">
        <GratitudeEdit />
      </View>
    </View>
  );
};

export default EditPage;
