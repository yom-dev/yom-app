import React from "react";
import { View, Text, ImageBackground, FlatList } from "react-native";
import ToDoItem from "./ToDoItem";
import { icons } from "@/constants/Icons";

const mockData: Array<{
  id: string;
  planName: string;
  text: string;
  isDone: boolean;
}> = [
  {
    id: "1",
    planName: "gratitude",
    text: "Gratitude",
    isDone: false,
  },
  {
    id: "2",
    planName: "meditation",
    text: "Meditation",
    isDone: true,
  },
  {
    id: "3",
    planName: "workout",
    text: "Workout",
    isDone: false,
  },
  // ... 나머지 데이터 생략
];

const ToDoMainCard: React.FC = () => {
  const sortedData = [...mockData].sort((a, b) => (a.isDone ? -1 : 1));

  const renderItem = ({ item }: { item: (typeof mockData)[0] }) => (
    <View className="mb-[12px]">
      <ToDoItem
        planName={item.planName}
        text={item.text}
        isDone={item.isDone}
      />
    </View>
  );

  return (
    <View className="bg-yomBlack w-full flex-1 border-none rounded-2xl overflow-hidden">
      <ImageBackground
        source={require("@/assets/images/main-card-background.png")}
        className="w-full h-full flex justify-center items-center"
        resizeMode="cover"
        style={{ borderRadius: 20 }}
      >
        <View className="w-[85%] h-[85%] flex justify-start">
          <View className="flex flex-column justify-between gap-[5px] h-[20%]">
            <Text className="text-yomWhite font-[WantedM] text-[16px]">
              Today's yom plan just for you.
            </Text>
            <Text className="text-yomWhite font-[WantedSB] text-[32px]">
              To-Do
            </Text>
          </View>

          <View className="w-full flex-1 pt-5">
            <FlatList
              data={sortedData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ gap: 12 }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ToDoMainCard;
