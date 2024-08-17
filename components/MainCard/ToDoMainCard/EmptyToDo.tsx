import { View, Text } from "react-native";
import React from "react";
import CustomButton from "@/components/Button/CustomButton";

const EmptyToDo = () => {
  return (
    <View className="h-[215%]">
      <View className="w-full h-[65%] flex justify-center items-center">
        <Text className="font-[WantedSB] text-[28px] text-yomWhite text-center">
          There is no plan today.
        </Text>
      </View>

      <View className="h-[35%] flex justify-end">
        <View className="h-[50px] w-full">
          <CustomButton
            title="Go to My Plan"
            titleSize={14}
            backgroundColor="yomWhite"
            activeBackgroundColor="yomLightGray"
            textColor="yomGreen"
            onPress={() => {
              console.log("작성하기 버튼 클릭");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default EmptyToDo;
