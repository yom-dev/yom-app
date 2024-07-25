import { KeyboardAvoidingView, View, Text, TextInput } from "react-native";
import React from "react";

const ModalContent = () => {
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <View className="w-full h-full flex justify-between ">
        <View className="w-full h-[60px]">
          <TextInput
            className="w-full h-full border-yomGray border-[1px] rounded-3xl p-[15px] font-[WantedSB] text-[14px]"
            placeholder="이곳에 적어주세요"
            keyboardType="default"
            placeholderTextColor={"gray"}
          />
        </View>

        <View className="w-full h-[60px]">
          <TextInput
            className="w-full h-full border-yomGray border-[1px] rounded-3xl p-[15px] font-[WantedSB] text-[14px]"
            placeholder="이곳에 적어주세요"
            keyboardType="default"
            placeholderTextColor={"gray"}
          />
        </View>
        <View className="w-full h-[60px]">
          <TextInput
            className="w-full h-full border-yomGray border-[1px] rounded-3xl p-[15px] font-[WantedSB] text-[14px]"
            placeholder="이곳에 적어주세요"
            keyboardType="default"
            placeholderTextColor={"gray"}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ModalContent;
