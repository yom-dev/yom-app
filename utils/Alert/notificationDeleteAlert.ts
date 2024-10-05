import { Alert } from "react-native";

export const notificationDeleteAlert = (
  id: string,
  onConfirm: () => void // 알림 삭제 후 실행할 콜백 함수
) => {
  Alert.alert(
    "Delete Notification",
    "Are you sure you want to delete this notification?",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: onConfirm, // 확인 버튼 클릭 시 알림 삭제 콜백 호출
      },
    ],
    { cancelable: true }
  );
};
