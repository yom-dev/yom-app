import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import createNewBiblePlan from "@/utils/BibleReading/createNewBiblePlan";
import { useGetUserId } from "@/hooks/useGetUserId";
import storePlanName from "@/shared/store/BibleReading/storePlanName";

interface CreateBiblePlanProps {
  onClose: () => void;
  refetch: () => void;
}

const CreateBiblePlan: React.FC<CreateBiblePlanProps> = ({
  onClose,
  refetch,
}) => {
  const [planName, setPlanName] = useState<string>(""); // 상태 타입 지정
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // 상태 타입을 string | null로 지정
  const { data: userId } = useGetUserId(); // 사용자 ID 가져오기

  const handleCreatePlanClick = async () => {
    if (!planName.trim()) {
      Alert.alert("Plan name cannot be empty.");
      return;
    }

    if (!userId) {
      setError("User ID not found.");
      Alert.alert("Error", "User ID not found. Please try again.");
      return;
    }

    setLoading(true);
    setError(null);

    const result = await createNewBiblePlan(planName, userId);

    setLoading(false);

    if (result.success) {
      setPlanName(""); // 입력값 초기화
      Alert.alert("Success", "Plan created successfully!");
      storePlanName(planName); // 입력값 저장
      onClose();
    } else {
      setError(result.error || "An unknown error occurred."); // 에러 메시지 설정
      Alert.alert("Error", result.error || "An unknown error occurred.");
    }
  };

  return (
    <View className="w-full h-full flex justify-center items-center">
      <KeyboardAvoidingView className="mb-[50px]">
        <TextInput
          className="w-[200px] h-[50px] border-b-[1px] border-yomGray"
          placeholder="Type your plan name"
          onChangeText={setPlanName}
          value={planName}
        />
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={handleCreatePlanClick} disabled={loading}>
        <View className="w-[130px] h-[35px] rounded-lg flex justify-center items-center bg-bibleBrown">
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="font-[WantedSB] text-[13px] text-yomWhite">
              Create Plan
            </Text>
          )}
        </View>
      </TouchableOpacity>

      {error && <Text className="mt-[20px] text-red-500">{error}</Text>}
    </View>
  );
};

export default CreateBiblePlan;
