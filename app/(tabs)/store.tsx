import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import StoreCard from "@/components/StorePage/StoreCard/StoreCard";
import useGetStoreItems from "@/hooks/useGetStoreItems"; // Import the custom hook

export default function Plan() {
  const { storeItems, loading, error } = useGetStoreItems(); // Use the custom hook

  if (loading) {
    return (
      <View className="h-full w-full flex justify-center items-center bg-yomWhite">
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View className="h-full w-full flex justify-center items-center bg-yomWhite">
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <View className="w-full h-full">
          <View className="w-full h-full mt-[20px]">
            <FlatList
              data={storeItems} // Using data from the hook
              numColumns={2}
              className="w-full h-fit"
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{
                justifyContent: "space-between",
                marginBottom: 20,
              }}
              ListFooterComponent={<View className="w-full h-[5px]"></View>}
              ListHeaderComponent={
                <View className="h-fit flex flex-col justify-end mb-[30px]">
                  <Text className="text-[32px] text-yomBlack font-[WantedSB]">
                    Store
                  </Text>
                </View>
              }
              renderItem={({ item }) => (
                <View className="w-[45%]">
                  <StoreCard
                    title={item.title}
                    description={item.subTitle}
                    planName={item.planName}
                    isActive={item.isActive}
                  />
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>

          <View className="w-full h-[50px]"></View>
        </View>
      </View>
    </View>
  );
}
