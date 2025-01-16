import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { planGradation } from "@/constants/planGradation";
import { Ionicons } from "@expo/vector-icons";
import { icons } from "@/constants/Icons";
import storePlanName from "@/shared/store/BibleReading/storePlanName";
import { useRouter } from "expo-router";
import deleteBiblePlan from "@/utils/BibleReading/deleteBiblePlan";
import { useGetUserId } from "@/hooks/useGetUserId";

const BiblePlanItem = ({
  title,
  startDate,
  onClose,
  onRefresh,
}: {
  title: string;
  startDate: Date;
  onClose: () => void;
  onRefresh: () => void;
}) => {
  const icon = icons.bibleReading;
  const startColor = planGradation.bibleReading.startColor;
  const endColor = planGradation.bibleReading.endColor;
  const startDateString = new Date(startDate).toISOString().split("T")[0];
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { data: user_id } = useGetUserId();

  const onPressItem = () => {
    storePlanName(title);
    onClose();
    router.replace("/plan/plan/bibleReading");
  };

  const onPressDelete = async () => {
    Alert.alert("Delete Plan", "Are you sure you want to delete this plan?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: async () => {
          setLoading(true);
          const result = await deleteBiblePlan(title, user_id);
          setLoading(false);

          if (result.success) {
            // Alert.alert("Success", "Plan deleted successfully.");
            // onClose(); // 부모 컴포넌트에서 리렌더링 트리거 가능
            onRefresh(); // 부모 컴포넌트에서 리렌더링 트리거 가능
          } else {
            Alert.alert("Error", result.error || "Failed to delete plan.");
          }
        },
      },
    ]);
  };

  return (
    <View className="w-full h-[65px]">
      <TouchableOpacity className="w-full h-[60px]" onPress={onPressItem}>
        <LinearGradient
          colors={[startColor, endColor]}
          start={[1, 0]}
          end={[0, 1]}
          style={{ height: "100%", width: "100%", borderRadius: 10 }}
        >
          <View className="w-full h-full p-3 flex-row justify-between items-center">
            <View className="w-[15%] h-full flex justify-center items-start">
              <ImageBackground
                source={icon}
                className="w-[80%] h-[80%] flex justify-center items-center"
                resizeMode="contain"
              />
            </View>
            <View className="w-[70%] h-full flex justify-center items-center">
              <Text className="font-[WantedSB] text-[14px] text-white">
                {title}
              </Text>
            </View>
            <View className="w-[15%] h-full flex justify-center items-end">
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <TouchableOpacity onPress={onPressDelete}>
                  <Ionicons name="trash-outline" size={18} color="white" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <View className="w-full flex-row justify-end mt-[3px]">
        <Text className="text-[8px] text-yomGray">
          Start Date: {startDateString}
        </Text>
      </View>
    </View>
  );
};

export default BiblePlanItem;
