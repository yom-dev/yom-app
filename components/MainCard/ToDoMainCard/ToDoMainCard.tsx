import React from "react";
import { View, Text, ImageBackground } from "react-native";
import ToDoItem from "./ToDoItem";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "@/components/Button/CustomButton";
import { FlatList } from "react-native-gesture-handler";

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
    planName: "workout",
    text: "Workout",
    isDone: false,
  },
  // {
  //   id: "7",
  //   planName: "workout",
  //   text: "Workout",
  //   isDone: false,
  // },
  // {
  //   id: "8",
  //   planName: "workout",
  //   text: "Workout",
  //   isDone: false,
  // },
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

          <View className="w-full h-[80%] mt-5 flex-1 ">
            <FlatList
              data={sortedData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <View className="h-full">
                  <View className="w-full h-[65%] flex justify-center items-center">
                    <Text className="font-[WantedSB] text-[28px] text-yomWhite text-center">
                      There is no plan today.
                    </Text>
                  </View>

                  <View className="h-[35%] flex justify-end">
                    <View className="h-[50px] w-full">
                      <CustomButton
                        title="Go to My Plan"
                        titleSize={14}
                        backgroundColor="yomWhite"
                        activeBackgroundColor="yomLightGray"
                        textColor="yomGreen"
                        onPress={() => {
                          console.log("작성하기 버튼 클릭");
                        }}
                      />
                    </View>
                  </View>
                </View>
              }
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ToDoMainCard;
