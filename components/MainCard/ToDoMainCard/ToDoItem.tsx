import React from "react";
import { View, Text, Image } from "react-native";
import { Link } from "expo-router"; // Import Link from expo-router
import { icons } from "@/constants/Icons";
import CheckBox from "./CheckBox";
import { TouchableOpacity } from "react-native-gesture-handler";

type PlanName = keyof typeof icons;

const ToDoItem = ({
  planName,
  text,
  isDone,
}: {
  planName: string;
  text: string;
  isDone: boolean;
}) => {
  // Convert the planName string into a valid key for the icons object
  const validPlanName = planName as PlanName;

  return (
    <Link href={`/plan/plan/${planName}`}>
      <TouchableOpacity>
        <View
          className="w-full h-[45px] rounded-lg px-3 py-2 flex-row justify-between items-center bg-yomWhite"
          style={{ opacity: isDone ? 1 : 0.75 }} // 조건부로 opacity 설정
        >
          <Image source={icons[validPlanName]} className="w-[20px] h-[20px]" />
          <Text className="font-[WantedM] text-[14px] text-yomBlack">
            {text}
          </Text>
          <CheckBox isDone={isDone} />
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default ToDoItem;
