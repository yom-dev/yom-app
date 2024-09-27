import { Alert } from "react-native";
import { supabase } from "@/utils/supabase";
import { router } from "expo-router";

export const planDeleteAlert = (planName: string, userId: string | null) => {
  return Alert.alert(
    "Remove Plan",
    "Your data will not be restored. Are you sure you want to remove this plan?",
    [
      {
        text: "Cancel",
        style: "cancel", // 취소 버튼
      },
      {
        text: "OK", // 확인 버튼
        onPress: async () => {
          const { data, error } = await supabase
            .from("myPlans")
            .update({ [planName]: false }) // 예시로 수정한 부분
            .eq("id", userId);

          if (error) {
            console.error("Error updating data:", error);
          } else {
            console.log("Data updated successfully:", data);
            router.push("/(tabs)/plan");
          }
        },
      },
    ],
    { cancelable: true } // 백 버튼으로 닫을 수 있게 설정
  );
};
