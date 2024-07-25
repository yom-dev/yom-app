import { View, Text, TextInput } from "react-native";
import React from "react";

const ModalContent = () => {
  return (
    <View className="w-full h-full flex justify-between ">
      <View className="w-full h-[60px]">
        <TextInput
          className="w-full h-full border-yomGray border-[1px] rounded-3xl p-[15px] font-[WantedSB] text-[14px]"
          placeholder="감사한 일을 적어주세요"
          keyboardType="default"
        />
      </View>

      <View className="w-full h-[60px]">
        <TextInput
          className="w-full h-full border-yomGray border-[1px] rounded-3xl p-[15px] font-[WantedSB] text-[14px]"
          placeholder="감사한 일을 적어주세요"
          keyboardType="default"
        />
      </View>
      <View className="w-full h-[60px]">
        <TextInput
          className="w-full h-full border-yomGray border-[1px] rounded-3xl p-[15px] font-[WantedSB] text-[14px]"
          placeholder="감사한 일을 적어주세요"
          keyboardType="default"
        />
      </View>
    </View>
  );
};

export default ModalContent;
