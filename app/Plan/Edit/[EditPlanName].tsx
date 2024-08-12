import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const EditPage = () => {
  const { planName } = useLocalSearchParams();
  return (
    <View>
      <Text>{planName}</Text>
    </View>
  );
};

export default EditPage;
