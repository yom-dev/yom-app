// GratitudeRecord.tsx
import { View, Text, FlatList } from "react-native";
import React, { useState, useMemo } from "react";
import { ImageBackground } from "react-native";
import GratitudeRecordItem from "./GratitudeRecordItem";
import GratitudeRecordMonthPicker from "./GratitudeRecordMonthPicker";
import { GratitudeContentType } from "@/shared/types/GratitudeContentType";

type GratitudeRecordData = {
  date: string;
  items: string[];
};

interface GratitudeRecordProps {
  data: GratitudeContentType[] | null;
}

const formatDate = (date: Date) => date.toISOString().split("T")[0];

const GratitudeRecord = ({ data }: GratitudeRecordProps) => {
  // Set the initial month to the current month
  const [month, setMonth] = useState(
    new Date().toLocaleString("en-US", { month: "long" })
  );
  const [year, setYear] = useState(new Date().getFullYear());

  // Process the received data into GratitudeRecordData format
  const gratitudeData: GratitudeRecordData[] = useMemo(() => {
    if (!data) return [];
    return data
      .filter((entry) => entry !== null && entry !== undefined) // Check for null or undefined entries
      .map((entry) => ({
        date: formatDate(new Date(entry.createdAt)),
        items: [entry.item1, entry.item2, entry.item3].filter(Boolean), // Remove empty strings
      }));
  }, [data]);

  // Filter the data according to the selected month and year
  const filteredData = useMemo(() => {
    return gratitudeData.filter((entry) => {
      const entryDate = new Date(entry.date);
      return (
        entryDate.getFullYear() === year &&
        entryDate.toLocaleString("en-US", { month: "long" }) === month
      );
    });
  }, [gratitudeData, month, year]);

  return (
    <View className="w-full h-[90%] mt-[30px]">
      <View className="w-full h-full rounded-xl overflow-hidden">
        <ImageBackground
          source={require("@/assets/images/background/main-card-background.png")}
          className="w-full h-full flex justify-start items-start px-[20px] py-[20px]"
          resizeMode="cover"
        >
          <View className="flex flex-column justify-between h-[7%]  w-full">
            <GratitudeRecordMonthPicker
              month={month}
              year={year}
              setMonth={setMonth}
              setYear={setYear}
            />
          </View>
          <FlatList
            className="w-full h-[93%] mt-[10px]"
            data={filteredData}
            keyExtractor={(item) => item.date}
            renderItem={({ item }) => (
              <GratitudeRecordItem date={item.date} items={item.items} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 20 }}
            horizontal={false} // Disable horizontal scrolling
            ListEmptyComponent={
              <View className="w-full h-full flex-1 flex items-center justify-center mt-[0px]">
                <Text className="text-yomWhite text-[24px] font-[WantedSB]">
                  No gratitude in {month}
                </Text>
              </View>
            }
          />
        </ImageBackground>
      </View>
    </View>
  );
};

export default GratitudeRecord;
