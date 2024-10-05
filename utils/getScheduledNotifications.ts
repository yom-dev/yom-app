import { View, Text } from "react-native";
import React from "react";
import * as Notifications from "expo-notifications";

export async function getScheduleNotifications() {
  try {
    // Fetch all scheduled notifications
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();

    if (scheduledNotifications.length > 0) {
      // Output the scheduled notifications using console.log
      console.log(
        "Scheduled Notifications:",
        JSON.stringify(scheduledNotifications, null, 2)
      );
    } else {
      console.log("No scheduled notifications found.");
    }
  } catch (error) {
    console.log("Error fetching scheduled notifications: ", error);
  }
}
