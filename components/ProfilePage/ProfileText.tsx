import { View, Text } from "react-native";
import React from "react";

const ProfileText = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <View className="w-full h-[50px]  border-b-[1px] border-yomBlack">
      <View className="h-full flex justify-between pb-[5px]">
        <Text className="font-[WantedR] text-[14px] text-yomBlack">
          {title}
        </Text>
        <Text className="font-[WantedM] text-[18px] text-yomBlack">
          {content}
        </Text>
      </View>
    </View>
  );
};

export default ProfileText;
