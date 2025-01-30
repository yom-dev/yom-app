import {
  getTrackingPermissionsAsync,
  PermissionStatus,
  requestTrackingPermissionsAsync,
} from "expo-tracking-transparency";
import { MobileAds } from "react-native-google-mobile-ads";

const requestTrackingPermission = async () => {
  const { status } = await getTrackingPermissionsAsync();
  if (status === PermissionStatus.UNDETERMINED) {
    await requestTrackingPermissionsAsync();
  }

  const adapterStatuses = await MobileAds().initialize();
};

export default requestTrackingPermission;
