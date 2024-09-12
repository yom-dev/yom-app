import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import GratitudeRecordItem from "./GratitudeRecordItem";
import GratitudeRecordMonthPicker from "./GratitudeRecordMonthPicker";

interface GratitudeRecordData {
  date: string;
  items: string[];
}

// GratitudeRecord 컴포넌트
const GratitudeRecord: React.FC = () => {
  // 감사 데이터 배열 정의
  const gratitudeData: GratitudeRecordData[] = [
    {
      date: "2024-01-01",
      items: [
        "allowing an opportunity to give thanks",
        "the support of my family",
        "having a fulfilling job",
      ],
    },
    {
      date: "2024-01-02",
      items: ["a good health", "the kindness of strangers", "a delicious meal"],
    },
  ];

  // State for month and year
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState(2024);

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
            data={gratitudeData}
            keyExtractor={(item) => item.date}
            renderItem={({ item }) => (
              <GratitudeRecordItem date={item.date} items={item.items} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 20 }}
          />
        </ImageBackground>
      </View>
    </View>
  );
};

export default GratitudeRecord;
