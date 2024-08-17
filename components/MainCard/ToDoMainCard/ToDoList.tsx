import { View, Text } from "react-native";
import React from "react";

const ToDoList = () => {
  return (
    <View className="w-full h-[80%] pt-5 flex-1 ">
      <FlatList
        data={sortedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
        ListEmptyComponent={
          <View className="h-full">
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
        }
      />
    </View>
  );
};

export default ToDoList;
