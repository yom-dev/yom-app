import { KeyboardAvoidingView, View, Text, TextInput } from "react-native";
import React from "react";

const GratitudeItem = () => {
  return (
    <KeyboardAvoidingView
      className="flex"
      behavior="padding"
      // keyboardVerticalOffset={100}
    >
      <View className="w-full h-full flex justify-between ">
        <View className="w-full h-[55px]">
          {/* 텍스트 인풋 */}

          <TextInput
            className="w-full h-full border-yomGray border-[1px] rounded-3xl p-[15px] font-[WantedSB] text-[14px] flex
              "
            placeholder="Write here"
            // textAlignVertical="center"
            keyboardType="default"
            placeholderTextColor={"gray"}
          />
        </View>

        {/* 텍스트 인풋 */}

        <View className="w-full h-[55px]">
          <TextInput
            className="w-full h-full border-yomGray border-[1px] rounded-3xl p-[15px] font-[WantedSB] text-[14px]"
            placeholder="Write here"
            keyboardType="default"
            placeholderTextColor={"gray"}
          />
        </View>

        {/* 텍스트 인풋 */}

        <View className="w-full h-[55px]">
          <TextInput
            className="w-full h-full border-yomGray border-[1px] rounded-3xl p-[15px] font-[WantedSB] text-[14px]"
            placeholder="Write here"
            keyboardType="default"
            placeholderTextColor={"gray"}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default GratitudeItem;
