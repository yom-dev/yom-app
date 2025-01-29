import { request, PERMISSIONS } from "react-native-permissions";
import { Platform } from "react-native";

const requestTrackingPermission = async () => {
  if (Platform.OS === "ios") {
    const result = await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
    console.log("Tracking permission:", result);
  }
};

export default requestTrackingPermission;

import { request, PERMISSIONS } from "react-native-permissions";
import { Platform } from "react-native";

const requestTrackingPermission = async () => {
  if (Platform.OS === "ios") {
    const result = await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
    console.log("Tracking permission:", result);
  }
};

export default requestTrackingPermission;
