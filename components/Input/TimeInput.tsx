import React from "react";
import { View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface TimeInputProps {
  onChange: (event: any, selectedDate: Date | undefined) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({ onChange }) => {
  return (
    <View className="w-full flex items-center justify-between gap-[20px]">
      <Text className="text-[24px] font-[WantedM]"> 시간 설정 </Text>

      <DateTimePicker
        mode="time"
        display="spinner"
        value={new Date()}
        onChange={onChange}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default TimeInput;
