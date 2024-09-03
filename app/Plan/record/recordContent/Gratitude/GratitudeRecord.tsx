import { View, Text, FlatList } from "react-native";
import React from "react";
import { ImageBackground, ScrollView } from "react-native";
import GratitudeRecordItem from "./GratitudeRecordItem";

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
    // 추가적인 데이터들을 여기 넣을 수 있습니다.
  ];

  return (
    <View className="w-full h-full">
      <ImageBackground
        source={require("@/assets/images/main-card-background.png")}
        className="w-full h-full flex justify-start items-start px-[20px] py-[20px]"
        resizeMode="cover"
      >
        <View className="flex flex-column justify-between h-[15%]">
          <Text className="text-yomWhite font-[WantedM] text-[16px]">
            Joseph,
          </Text>
          <Text className="text-yomWhite font-[WantedSB] text-[32px]">
            You thanked for....
          </Text>
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
  );
};

export default GratitudeRecord;
