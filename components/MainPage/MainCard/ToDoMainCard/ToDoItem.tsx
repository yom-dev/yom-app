import React from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";
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
          className="w-full h-[50px] rounded-lg px-3 py-2 flex-row justify-between items-center bg-yomWhite"
          style={{ opacity: isDone ? 1 : 0.75 }} // 조건부로 opacity 설정
        >
          <Image source={icons[validPlanName]} width={23} height={23} />
          <Text className="font-[WantedM] text-[14px] text-yomBlack">
            {text}
          </Text>
          <CheckBox isDone={true} />
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default ToDoItem;
