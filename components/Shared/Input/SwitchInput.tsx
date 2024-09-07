import { View, Text, Switch } from "react-native";
import React from "react";

const SwitchInput = ({
  value,
  onValueChange,
}: {
  value: boolean;
  onValueChange: () => void;
}) => {
  return (
    <View className="w-full h-fit flex items-center justify-between gap-[30px]">
      <Text className="text-[24px] font-[WantedM]"> 알림 </Text>
      <Switch
        className="ml-[10px]"
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};

export default SwitchInput;
