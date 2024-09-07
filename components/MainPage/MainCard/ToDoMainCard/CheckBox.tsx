import { View, Text } from "react-native";
import React from "react";

const CheckBox = ({ isDone }: { isDone: boolean }) => {
  return isDone ? (
    <View className="w-[14px] h-[14px] border-yomGray border-[0.5px] rounded-full bg-[#9bd069]" />
  ) : (
    <View className="w-[14px] h-[14px] border-yomGray border-[0.5px] rounded-full" />
  );
};

export default CheckBox;
