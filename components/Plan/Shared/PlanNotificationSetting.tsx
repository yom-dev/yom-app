import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import NotificationCardWide from "@/components/notification/NotificationCardWide";
import { getScheduleNotifications } from "@/utils/getScheduledNotifications";

interface PlanNotificationSettingProps {
  planName: string;
}

const PlanNotificationSetting = ({
  planName,
}: PlanNotificationSettingProps) => {
  // notifications 상태 선언
  const [notifications, setNotifications] = useState<any[]>([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    const fetchNotifications = async () => {
      const result = await getScheduleNotifications();
      setNotifications(result);
    };

    fetchNotifications();
  }, [update]); // update 값이 변경될 때마다 알림 목록을 다시 불러옴

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
    <View className="w-full h-[90%] mt-[30px]">
      <FlatList
        data={notifications} // 알림 데이터를 상태에서 가져옴
        renderItem={renderItem}
        keyExtractor={(item) => item.identifier}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </View>
  );
};

export default PlanNotificationSetting;
