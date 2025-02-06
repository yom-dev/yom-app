import React, { useEffect, useState } from "react";
import { View, FlatList, Modal, Text, Alert } from "react-native";
import NotificationCardWide from "@/components/Notification/NotificationCardWide";
import { getScheduleNotifications } from "@/utils/Notifications/getScheduledNotifications";
import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import CustomButton from "@/components/Shared/Button/CustomButton";
import { useGetUserId } from "@/hooks/useGetUserId";
import AddNotificationModal from "@/components/Shared/Modal/Notification/AddNotificationModal";
import useLocalNotifications from "@/hooks/useLocalNotification";

interface PlanNotificationSettingProps {
  planName: string;
  darkMode?: boolean;
}

const PlanNotificationSetting = ({
  planName,
  darkMode,
}: PlanNotificationSettingProps) => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [update, setUpdate] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const { data: userId } = useGetUserId();
  const { cancelScheduledNotificationById } = useLocalNotifications();

  const handleDelete = async () => {
    Alert.alert(
      "Remove Plan",
      "Your data will not be restored. Are you sure you want to remove this plan?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            const { data, error } = await supabase
              .from("my_plans")
              .update({ [planName]: false })
              .eq("user_id", userId);
            const scheduledNotifications = await getScheduleNotifications(
              planName
            );
            console.log(scheduledNotifications);
            for (const notification of scheduledNotifications) {
              await cancelScheduledNotificationById(notification.identifier);
            }
            if (error) {
              Alert.alert(
                "Error occurred during deleting plan. Please try again."
              );
              console.error("Error updating data:", error);
            } else {
              console.log("Data updated successfully:", data);
              router.push("/(tabs)/plan");
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleAddNotification = () => {
    setModalVisible(true); // Add Notification 버튼 클릭 시 모달 띄움
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      const result = await getScheduleNotifications(planName);
      setNotifications(result);
    };
    fetchNotifications();
  }, [update]);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <NotificationCardWide
        identifier={item.identifier}
        hour={item.trigger.dateComponents.hour}
        minute={item.trigger.dateComponents.minute}
        notificationType={item.content.data.notificationType}
        onUpdate={() => setUpdate(update + 1)} // 알림 삭제 시 update 값 증가
      />
    );
  };

  return (
    <View className="w-full h-full mt-[30px]">
      <View className="flex-1 bg-red">
        <FlatList
          data={notifications} // 알림 데이터를 상태에서 가져옴
          renderItem={renderItem}
          keyExtractor={(item) => item.identifier}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          ListFooterComponent={() => <View style={{ height: 100 }} />}
          ListHeaderComponent={() => (
            <View className="w-fit h-fit mb-[10px] ">
              {darkMode ? (
                <Text className="font-[WantedSB] text-white text-[28px]">
                  Notification
                </Text>
              ) : (
                <Text className="font-[WantedSB] text-[28px]">
                  Notification
                </Text>
              )}
            </View>
          )}
          ListEmptyComponent={() => (
            <View className="h-[70px] flex justify-center items-center border-[1px] border-gray-500 rounded-2xl">
              <Text className="font-[WantedR] text-[20px] text-gray-500">
                No notifications set
              </Text>
            </View>
          )}
        />
      </View>

      <View className="w-full h-[45px] absolute top-[70%] flex flex-row justify-between">
        <View className="w-[48%] h-[45px] flex-row justify-center">
          <CustomButton
            title="Add Notification"
            titleSize={16}
            backgroundColor="yomGreen"
            activeBackgroundColor="yomDarkGreen"
            textColor="yomWhite"
            onPress={handleAddNotification} // 모달을 띄우는 핸들러
          />
        </View>
        <View className="w-[48%]">
          <CustomButton
            title="Remove Plan"
            titleSize={16}
            backgroundColor="yomRed"
            activeBackgroundColor="yomWhite"
            textColor="yomWhite"
            onPress={() => {
              handleDelete();
            }}
          />
        </View>
      </View>

      {/* 모달 컴포넌트 */}
      <AddNotificationModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onUpdate={() => setUpdate(update + 1)} // 모달 닫기 핸들러
        planName={planName}
      />
    </View>
  );
};

export default PlanNotificationSetting;
