import React from "react";
import { View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface TimeInputProps {
  onChange: (event: any, selectedDate: Date | undefined) => void;
  value: Date;
  title: string;
}

const TimeInput: React.FC<TimeInputProps> = ({ onChange, value, title }) => {
  return (
    <View className="w-full flex items-center justify-between gap-[20px]">
      <Text className="text-[24px] font-[WantedM]">{title}</Text>

      <DateTimePicker
        mode="time"
        display="spinner"
        value={value}
        onChange={onChange}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default TimeInput;
