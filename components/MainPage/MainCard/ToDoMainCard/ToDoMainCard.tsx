import React from "react";
import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import ToDoItem from "./ToDoItem";
import { FlatList } from "react-native-gesture-handler";
import EmptyToDo from "./EmptyToDo";
import useGetMyPlans from "@/hooks/useGetMyPlans";

const ToDoMainCard: React.FC = () => {
  const { trueKeys, loading, error } = useGetMyPlans();

  const renderItem = ({
    item,
  }: {
    item: { key: string; planName: string };
  }) => (
    <View className="my-[7px]">
      <ToDoItem planName={item.planName} isDone={true} />
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
              Check your yom plans.
            </Text>
            <Text className="text-yomWhite font-[WantedSB] text-[32px]">
              My plans
            </Text>
          </View>

          <View className="w-full h-[80%] mt-5">
            {loading ? (
              <ActivityIndicator />
            ) : trueKeys && trueKeys.length === 0 ? (
              <EmptyToDo />
            ) : (
              <FlatList
                data={trueKeys}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                showsVerticalScrollIndicator={false}
              />
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ToDoMainCard;
