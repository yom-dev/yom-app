import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const CreateBiblePlan = () => {
  return (
    <View className="w-full h-full  flex justify-center items-center">
      <KeyboardAvoidingView className="mb-[50px]">
        <TextInput
          className="w-[200px] h-[50px] border-b-[1px] border-yomGray "
          placeholder="Type your plan name"
        />
      </KeyboardAvoidingView>

      <TouchableOpacity>
        <View className="w-[130px] h-[35px] rounded-lg bg-bibleBrown flex justify-center items-center">
          <Text className="font-[WantedSB] text-[13px] text-yomWhite">
            Create Plan
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreateBiblePlan;
