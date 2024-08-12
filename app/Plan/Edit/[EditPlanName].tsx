import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const EditPage = () => {
  const { editPlanName } = useLocalSearchParams();
  return (
    <View>
      <Text>{editPlanName}</Text>
    </View>
  );
};

export default EditPage;
