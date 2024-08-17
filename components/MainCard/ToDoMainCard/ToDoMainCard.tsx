import React from "react";
import { View, Text, ImageBackground, FlatList } from "react-native";
import { useModal } from "@/shared/store/use-modal-store";
import ToDoItem from "./ToDoItem";
import { icons } from "@/constants/Icons";

type PlanName = keyof typeof icons;

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
  {
    id: "4",
    planName: "workout",
    text: "Workout",
    isDone: false,
  },
  {
    id: "5",
    planName: "workout",
    text: "Workout",
    isDone: false,
  },
  {
    id: "6",
    planName: "meditation",
    text: "Meditation",
    isDone: false,
  },
  {
    id: "7",
    planName: "reading",
    text: "Reading",
    isDone: false,
  },
];

const ToDoMainCard: React.FC = () => {
  // Sort the data so that items with isDone: true come first
  const sortedData = [...mockData].sort((a, b) => {
    if (a.isDone === b.isDone) return 0;
    return a.isDone ? -1 : 1;
  });

  const renderItem = ({ item }: { item: (typeof mockData)[0] }) => (
    <ToDoItem planName={item.planName} text={item.text} isDone={item.isDone} />
  );

  return (
    <View className="bg-yomBlack w-full h-full border-none rounded-2xl overflow-hidden">
      {/*배경화면 설정*/}
      <ImageBackground
        source={require("@/assets/images/main-card-background.png")}
        className="w-full h-full flex justify-center items-center"
        resizeMode="cover"
        style={{ borderRadius: 20 }}
      >
        {/* 카드 제목 & 부제목 */}
        <View className="w-[85%] h-[85%] flex justify-start">
          <View className="flex flex-column justify-between gap-[5px] h-[20%]">
            <Text className="text-yomWhite font-[WantedM] text-[16px]">
              Today's yom plan just for you.
            </Text>
            <Text className="text-yomWhite font-[WantedSB] text-[32px]">
              To-Do
            </Text>
          </View>

          {/* 메인카드 컨텐츠 */}
          <View className="w-full h-[80%] flex justify-center items-center pt-5">
            <FlatList
              data={sortedData} // Use sorted data
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ gap: 12 }}
              showsVerticalScrollIndicator={false}
            />
          </View>

          {/* 작성하기 버튼 */}
          {/* <View className="h-[20%] flex justify-end">
            <View className="h-[50px] w-full">
              <CustomButton
                title="작성하기"
                titleSize={14}
                backgroundColor="yomWhite"
                activeBackgroundColor="yomLightGray"
                textColor="yomGreen"
                onPress={() => onOpen("gratitude")}
              />
            </View>
          </View> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default ToDoMainCard;
