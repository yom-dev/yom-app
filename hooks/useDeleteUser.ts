import { useState } from "react";
import { Alert } from "react-native";
import { supabase } from "@/utils/supabase";
import { useGetUserId } from "./useGetUserId";

export const useDeleteUser = () => {
  const { data: id } = useGetUserId();

  const [isDeleting, setIsDeleting] = useState(false);

  const deleteUser = async () => {
    setIsDeleting(true); // 삭제 시작
    try {
      const { error } = await supabase
        .from("request_user_delete")
        .insert([{ user_id: id }]);

      if (error) {
        console.error("Error requesting user delete:", error.message);

        // 'duplicate key value'가 에러 메시지에 포함된 경우 사용자에게 이미 요청이 완료되었음을 알림
        if (error.message.includes("duplicate key value")) {
          Alert.alert(
            "Request Already Completed",
            "Your account deletion request has already been submitted."
          );
        } else {
          Alert.alert("Error", error.message);
        }
      } else {
        console.log("User delete requested successfully.");
        Alert.alert("Request completed", "User deletion request completed.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      Alert.alert(
        "Error",
        "An unexpected error occurred. Please try again later."
      );
    } finally {
      setIsDeleting(false); // 삭제 완료
    }
  };

  return { deleteUser, isDeleting };
};
