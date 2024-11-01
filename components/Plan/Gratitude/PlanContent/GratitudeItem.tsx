import { KeyboardAvoidingView, View, TextInput } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface GratitudeItemProps {
  item1: string;
  item2: string;
  item3: string;
  setItem1: (text: string) => void;
  setItem2: (text: string) => void;
  setItem3: (text: string) => void;
}

const GratitudeItem = ({
  item1,
  item2,
  item3,
  setItem1,
  setItem2,
  setItem3,
}: GratitudeItemProps) => {
  return (
    <View className="w-full h-full flex justify-between">
      <View className="w-full h-[55px]">
        {/* 텍스트 인풋 */}

        <TextInput
          className="w-full h-full border-yomGray border-[1px] rounded-3xl p-[15px] font-[WantedSB] text-[14px] flex"
          placeholder="Write here"
          keyboardType="default"
          placeholderTextColor={"gray"}
          value={item1}
          onChangeText={setItem1}
        />
      </View>

      {/* 텍스트 인풋 */}
      <View className="w-full h-[55px]">
        <TextInput
          className="w-full h-full border-yomGray border-[1px] rounded-3xl p-[15px] font-[WantedSB] text-[14px]"
          placeholder="Write here"
          keyboardType="default"
          placeholderTextColor={"gray"}
          value={item2}
          onChangeText={setItem2}
        />
      </View>

      {/* 텍스트 인풋 */}
      <View className="w-full h-[55px]">
        <TextInput
          className="w-full h-full border-yomGray border-[1px] rounded-3xl p-[15px] font-[WantedSB] text-[14px]"
          placeholder="Write here"
          keyboardType="default"
          placeholderTextColor={"gray"}
          value={item3}
          onChangeText={setItem3}
        />
      </View>
    </View>
  );
};

export default GratitudeItem;
