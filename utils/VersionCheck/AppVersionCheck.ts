import VersionCheck from "react-native-version-check";
import { Alert, Linking, Platform } from "react-native";

export const AppVersionCheck = async () => {
  let CurrentVersion = VersionCheck.getCurrentVersion();
  let LatestVersion = await VersionCheck.getLatestVersion();

  //   let LatestVersion = "1.0.0";

  VersionCheck.needUpdate({
    currentVersion: CurrentVersion,
    latestVersion: LatestVersion,
  }).then((res: any) => {
    console.log(CurrentVersion, LatestVersion);
    if (CurrentVersion !== LatestVersion) {
      Alert.alert(
        "Update Required",
        "A new version is available. Please update to continue using the app.",
        [
          {
            text: "Go to Store",
            onPress: () => {
              const url =
                Platform.OS === "android"
                  ? "https://play.google.com/store/apps/details?id=com.example.app"
                  : "https://apps.apple.com/kr/app/yom-app/id6737324672";
              Linking.openURL(url);
            },
          },
        ]
      );
    }
  });
};
