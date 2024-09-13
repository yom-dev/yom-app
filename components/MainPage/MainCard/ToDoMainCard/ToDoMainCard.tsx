import React from "react";
import { View, Text, ImageBackground } from "react-native";
import ToDoItem from "./ToDoItem";

import { FlatList } from "react-native-gesture-handler";
import EmptyToDo from "./EmptyToDo";

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
    isDone: true,
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
    isDone: true,
  },
];

const ToDoMainCard: React.FC = () => {
  const sortedData = [...mockData].sort((a, b) => (a.isDone ? -1 : 1));

  const renderItem = ({ item }: { item: (typeof mockData)[0] }) => (
    <View className="my-[7px]">
      <ToDoItem
        planName={item.planName}
        text={item.text}
        isDone={item.isDone}
      />
    </View>
  );

  return (
    <View className="bg-yomBlack w-full border-none rounded-2xl overflow-hidden">
      <ImageBackground
        source={require("@/assets/images/background/main-card-background.png")}
        className="w-full h-full flex justify-center items-center"
        resizeMode="cover"
        style={{ borderRadius: 20 }}
      >
        <View className="w-[85%] h-[85%] flex justify-start">
          <View className="flex flex-column justify-between gap-[5px] h-[20%]">
            <Text className="text-yomWhite font-[WantedM] text-[16px]">
              Yom plans you added.
            </Text>
            <Text className="text-yomWhite font-[WantedSB] text-[32px]">
              My plan
            </Text>
          </View>

          <View className="w-full h-[80%] mt-5">
            <FlatList
              data={sortedData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={<EmptyToDo />}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ToDoMainCard;
