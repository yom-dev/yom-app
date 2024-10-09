import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Alert,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

import PlanCardWide from "@/components/Shared/PlanCard/PlanCardWide";
import useGetMyPlans from "@/hooks/useGetMyPlans";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Plan() {
  const router = useRouter();
  const { trueKeys, loading, error } = useGetMyPlans();

  if (error) {
    Alert.alert("Error", error);
  }

  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <View className="w-full h-full">
          <View className="w-full h-full mt-[20px]">
            {loading && (
              <View className="h-full w-full flex justify-center items-center bg-yomWhite">
                <FlatList
                  data={trueKeys}
                  numColumns={1}
                  className="w-full h-fit"
                  renderItem={({ item }) => (
                    <View>
                      <View className="w-full h-[80px] rounded-xl bg-gray-200 mb-[30px]"></View>
                      <View className="w-full h-[80px] rounded-xl bg-gray-200 mb-[30px]"></View>
                      <View className="w-full h-[80px] rounded-xl bg-gray-200 mb-[30px]"></View>
                    </View>
                  )}
                  keyExtractor={(item) => item.key}
                  ListHeaderComponent={
                    <View className="h-fit flex flex-col justify-end mb-[30px]">
                      <Text className="text-[32px] text-yomBlack font-[WantedSB]">
                        My Plan
                      </Text>
                    </View>
                  }
                />
              </View>
            )}

            <FlatList
              data={trueKeys}
              numColumns={1}
              className="w-full h-fit"
              renderItem={({ item }) => (
                <View className="mb-[10px]">
                  <PlanCardWide planName={item.planName} />
                </View>
              )}
              keyExtractor={(item) => item.key}
              ListHeaderComponent={
                <View className="h-fit flex flex-col justify-end mb-[30px]">
                  <Text className="text-[32px] text-yomBlack font-[WantedSB]">
                    My Plan
                  </Text>
                </View>
              }
              ListEmptyComponent={
                <View className="w-full h-[80px] rounded-xl border-gray-400 border-[0.5px] mb-[30px] flex justify-center items-center">
                  <TouchableOpacity
                    className="w-full h-full"
                    onPress={() => {
                      router.push("/(tabs)/store");
                    }}
                  >
                    <Text className="font-[WantedM] text-[24px]">Add Plan</Text>
                  </TouchableOpacity>
                </View>
              }
            />
          </View>

          <View className="w-full h-[50px]"></View>
        </View>
      </View>
    </View>
  );
}
