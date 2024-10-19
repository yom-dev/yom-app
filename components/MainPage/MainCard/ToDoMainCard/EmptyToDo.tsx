import { View, Text } from "react-native";
import React from "react";
import CustomButton from "@/components/Shared/Button/CustomButton";
import { useRouter } from "expo-router";

const EmptyToDo = () => {
  const router = useRouter();
  return (
    <View className="h-full ">
      <View className="w-full h-[60%] flex justify-center items-center">
        <Text className="font-[WantedSB] text-[28px] text-yomWhite text-center">
          Start by adding {"\n"}your very first plan.
        </Text>
      </View>

      <View className="h-[38%] flex justify-center">
        <View className="h-[50px] w-full">
          <CustomButton
            title="Go to Plan Store"
            titleSize={14}
            backgroundColor="yomWhite"
            activeBackgroundColor="yomLightGray"
            textColor="yomGreen"
            onPress={() => {
              router.push("/(tabs)/store");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default EmptyToDo;
