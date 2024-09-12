import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

// Define the props interface
interface GratitudeRecordMonthPickerProps {
  month: string;
  year: number;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}

const GratitudeRecordMonthPicker: React.FC<GratitudeRecordMonthPickerProps> = ({
  month,
  year,
  setMonth,
  setYear,
}) => {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handlePreviousMonth = () => {
    const currentIndex = monthList.indexOf(month);
    if (currentIndex === 0) {
      // If it's January, switch to December and decrement the year
      setMonth(monthList[11]);
      setYear((prevYear) => prevYear - 1);
    } else {
      // Otherwise, just move to the previous month
      setMonth(monthList[currentIndex - 1]);
    }
  };

  const handleNextMonth = () => {
    const currentIndex = monthList.indexOf(month);
    if (currentIndex === 11) {
      // If it's December, switch to January and increment the year
      setMonth(monthList[0]);
      setYear((prevYear) => prevYear + 1);
    } else {
      // Otherwise, just move to the next month
      setMonth(monthList[currentIndex + 1]);
    }
  };

  return (
    <View className=" h-full flex-row justify-between items-center">
      <AntDesign
        name="left"
        size={20}
        color={"#ffffff"}
        onPress={handlePreviousMonth}
      />
      <Text className="text-yomWhite font-[WantedM] text-[16px]">
        {year} {month}
      </Text>
      <AntDesign
        name="right"
        size={20}
        color={"#ffffff"}
        onPress={handleNextMonth}
      />
    </View>
  );
};

export default GratitudeRecordMonthPicker;
