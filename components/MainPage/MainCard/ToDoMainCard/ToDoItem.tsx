import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router"; // Import Link from expo-router
import { icons } from "@/constants/Icons";
import CheckBox from "./CheckBox";
import { TouchableOpacity } from "react-native-gesture-handler";
import useGetPlanInfo from "@/hooks/useGetPlanInfo";

type PlanName = keyof typeof icons;

const ToDoItem = ({
  planName,
  isDone,
}: {
  planName: string;
  isDone: boolean;
}) => {
  // Convert the planName string into a valid key for the icons object
  const validPlanName = planName as PlanName;
  const { data: infoData, loading, error } = useGetPlanInfo(`${planName}`);

  if (loading) {
    return (
      <View
        className="w-full h-[50px] rounded-lg px-3 py-2 flex-row justify-between items-center bg-yomWhite"
        style={{ opacity: isDone ? 1 : 0.75 }} // 조건부로 opacity 설정
      >
        <Image source={icons[validPlanName]} width={25} height={23} />
        <ActivityIndicator />
        <CheckBox isDone={true} />
      </View>
    );
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  // If infoData is null, return an empty fragment or handle it appropriately
  if (!infoData) {
    return <Text>No data found</Text>;
  }

  return (
    <Link href={`/plan/plan/${planName}`}>
      <TouchableOpacity>
        <View
          className="w-full h-[50px] rounded-lg px-3 py-2 flex-row justify-between items-center bg-yomWhite"
          style={{ opacity: isDone ? 1 : 0.75 }} // 조건부로 opacity 설정
        >
          <View className="w-[23px] h-[23px] ">
            <ImageBackground
              source={icons[validPlanName]}
              className="w-full h-full flex justify-center items-center"
              resizeMode="contain"
            />
          </View>

          <Text className="font-[WantedM] text-[14px] text-yomBlack">
            {infoData.title}
          </Text>
          <CheckBox isDone={true} />
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default ToDoItem;
