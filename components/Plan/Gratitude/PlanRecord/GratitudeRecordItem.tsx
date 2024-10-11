import React from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";

// GratitudeRecordItem의 props 타입 정의
interface GratitudeRecordItemProps {
  date: string;
  items: string[];
}

// GratitudeRecordItem 컴포넌트 생성
const GratitudeRecordItem: React.FC<GratitudeRecordItemProps> = ({
  date,
  items,
}) => {
  return (
    <View className="gap-[20px] mt-[20px]">
      <Text className="font-[WantedB] text-[22px] text-white">{date}</Text>
      <View className="gap-[15px] ml-3">
        {items.map((item, index) => (
          <View key={index} className="w-full h-fit flex-row">
            <Text className="font-[WantedM] text-[16px] text-white">
              {index + 1}.
            </Text>
            <Text className="font-[WantedM] text-[16px] ml-[5px] text-white">
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default GratitudeRecordItem;
