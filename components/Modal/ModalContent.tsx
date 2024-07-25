import { View, Text, TextInput } from "react-native";
import React from "react";

const ModalContent = () => {
  return (
    <View className="w-full h-full bg-slate-50">
      <TextInput
        className="w-full"
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
};

export default ModalContent;
