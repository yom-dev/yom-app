import { View, Text, ScrollView } from "react-native";

export default function record() {
  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <ScrollView
          className="w-full h-full"
          showsVerticalScrollIndicator={false}
        >
          <View className="h-fit flex flex-col justify-end mt-[20px]">
            <Text className="text-[32px] text-yomBlack font-[WantedSB]">
              기록
            </Text>
          </View>

          <View className="w-full h-[50px]"></View>
        </ScrollView>
      </View>
    </View>
  );
}
