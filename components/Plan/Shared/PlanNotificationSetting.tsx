import React, { useEffect, useState } from "react";
import { View, FlatList, Modal } from "react-native";
import NotificationCardWide from "@/components/notification/NotificationCardWide";
import { getScheduleNotifications } from "@/utils/getScheduledNotifications";
import CustomButton from "@/components/Shared/Button/CustomButton";
import { planDeleteAlert } from "@/utils/Alert/planDeleteAlert";
import { useGetUserId } from "@/hooks/useGetUserId";
import AddNotificationModal from "@/components/Shared/Modal/Notification/AddNotificationModal";

interface PlanNotificationSettingProps {
  planName: string;
}

const PlanNotificationSetting = ({
  planName,
}: PlanNotificationSettingProps) => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [update, setUpdate] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const { data: userId } = useGetUserId();

  const handleDelete = async () => {
    planDeleteAlert(planName, userId);
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
      <View className="h-[90%] bg-red">
        <FlatList
          data={notifications} // 알림 데이터를 상태에서 가져옴
          renderItem={renderItem}
          keyExtractor={(item) => item.identifier}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          ListFooterComponent={() => <View style={{ height: 100 }} />}
        />
      </View>

      <View className="w-full h-[45px] fixed bottom-[80] flex flex-row justify-between">
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
            onPress={handleDelete}
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
