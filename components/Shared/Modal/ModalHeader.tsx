import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const ModalHeader = ({
  onRequestClose,
  title,
}: {
  onRequestClose: () => void;
  title: string;
}) => {
  return (
    <View className="w-full flex-row justify-center items-center mt-[30px]">
      <View className="w-[33%]" />
      <View className=" w-[33%] flex-row justify-center">
        <Text className="text-[24px] font-[WantedB] ">{title}</Text>
      </View>
      <View className="w-[33%] flex-row justify-end items-center">
        <Pressable onPress={onRequestClose}>
          <Ionicons name="close-circle-sharp" size={32} color="#B3B3B3" />
        </Pressable>
      </View>
    </View>
  );
};

export default ModalHeader;
