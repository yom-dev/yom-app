import VersionCheck from "react-native-version-check";
import { Alert, Linking, Platform } from "react-native";
import DeviceInfo from "react-native-device-info";

export const AppVersionCheck = async () => {
  try {
    const InstallerName = await DeviceInfo.getInstallerPackageName();

    // TestFlight 설치 시 업데이트 검사 건너뛰기
    if (InstallerName === "Testflight" || "Other") {
      console.log(
        "TestFlight/개발자 환경으로 설치됨. 버전 체크 건너뜀.",
        InstallerName
      );
      return;
    }

    const CurrentVersion = VersionCheck.getCurrentVersion();
    const LatestVersion = await VersionCheck.getLatestVersion();
    // const CurrentVersion = "1.0.1";

    console.log("현재 버전:", CurrentVersion, "최신 버전:", LatestVersion);

    const updateNeeded = await VersionCheck.needUpdate({
      currentVersion: CurrentVersion,
      latestVersion: LatestVersion,
    });

    if (updateNeeded.isNeeded) {
      Alert.alert(
        "🆕 Update Available",
        "A new version is ready with improvements and bug fixes. Update now for the best experience!",
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
  } catch (error) {
    console.error("버전 체크 중 오류 발생:", error);
  }
};
