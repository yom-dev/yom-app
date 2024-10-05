import React from "react";
import { View, FlatList } from "react-native";
import NotificationCardWide from "@/components/notification/NotificationCardWide";

// Mock 데이터
const mockData = [
  {
    content: {
      data: { planName: "gratitude", notificationType: "Daily" },
      title: "Gratitude Reminder",
      body: "Have you thanked today?",
    },
    identifier: "8eb7d260-4a80-4e85-9c80-381a1e23f6be",
    trigger: {
      repeats: true,
      type: "calendar",
      class: "UNCalendarNotificationTrigger",
      dateComponents: {
        hour: 2,
        minute: 29,
      },
    },
  },
  {
    content: {
      data: { planName: "gratitude", notificationType: "Daily" },
      title: "Gratitude Reminder",
      body: "Have you thanked today?",
    },
    identifier: "b9c4696f-76ee-431f-b0e9-b6991096fba8",
    trigger: {
      repeats: true,
      type: "calendar",
      class: "UNCalendarNotificationTrigger",
      dateComponents: {
        hour: 2,
        minute: 33,
      },
    },
  },
];

const PlanNotificationSetting = () => {
  const renderItem = ({ item }: { item: any }) => {
    return (
      <NotificationCardWide
        identifier={item.identifier}
        hour={item.trigger.dateComponents.hour}
        minute={item.trigger.dateComponents.minute}
        notificationType={item.content.data.notificationType}
      />
    );
  };

  return (
    <View className="w-full h-[90%] mt-[30px]">
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.identifier}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />} // 간격 추가
      />
    </View>
  );
};

export default PlanNotificationSetting;
