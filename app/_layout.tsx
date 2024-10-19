import {
  DarkTheme,
  DefaultTheme,
  Link,
  ThemeProvider,
  useNavigation, // Import useNavigation
} from "@react-navigation/native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme";
import ModalProvider from "@/shared/providers/modal-provider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Notifications from "expo-notifications"; // 타입 임포트 및 별칭 사용
import { Image } from "expo-image";
import NetInfo from "@react-native-community/netinfo"; // 네트워크 연결 상태를 확인하기 위한 라이브러리

// 앱이 시작할 때 스플래시 스크린을 숨김
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);
  // navigation 객체를 가져오는 hook을 사용
  const navigation = useNavigation();

  // useColorScheme hook을 사용하여 colorScheme을 가져옴
  const colorScheme = useColorScheme();

  const router = useRouter(); // router 객체를 가져오는 hook을 사용

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected); // 연결 상태 업데이트
      if (!state.isConnected) {
        router.replace("/"); // 네트워크 연결 끊김 시 특정 페이지로 이동
      }
    });

    return () => {
      unsubscribe(); // 컴포넌트 언마운트 시 이벤트 리스너 정리
    };
  }, [navigation]);

  // notifications 상태를 저장할 상태를 만들고 초기값을 빈 배열로 설정
  const [notification, setNotification] = useState<
    Notifications.Notification[]
  >([]);

  // 폰트를 로드하는 useFonts hook을 사용
  const [loaded] = useFonts({
    WantedM: require("../assets/fonts/WantedSans-Medium.otf"),
    WantedR: require("../assets/fonts/WantedSans-Regular.otf"),
    WantedSB: require("../assets/fonts/WantedSans-SemiBold.otf"),
    WantedB: require("../assets/fonts/WantedSans-Bold.otf"),
    WantedEB: require("../assets/fonts/WantedSans-ExtraBold.otf"),
  });

  // 알림을 가져오는 함수
  async function fetchDeliveredNotifications() {
    const deliveredNotifications =
      await Notifications.getPresentedNotificationsAsync();
    setNotification(deliveredNotifications);
  }

  // 컴포넌트가 마운트되면 알림을 가져오는 함수를 실행
  useEffect(() => {
    fetchDeliveredNotifications();
  });

  // 폰트 로딩이 완료되면 스플래시 스크린을 숨김
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView>
        <ModalProvider />
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: true,
              headerShadowVisible: false,
              headerTitle: "",
              headerLeft: () => (
                <Text className="font-[WantedM] text-[20px] text-yomBlack">
                  yom
                </Text>
              ),
              headerRight: () => (
                <Link to="/notification">
                  {notification.length > 0 ? (
                    <Image
                      source={require("@/assets/images/icons/notification-unread-icon.png")}
                      style={{ width: 24, height: 24 }}
                    />
                  ) : (
                    <Image
                      source={require("@/assets/images/icons/notification-icon.png")}
                      style={{ width: 24, height: 24 }}
                    />
                  )}
                </Link>
              ),
              headerStyle: {
                backgroundColor: Colors.light.background,
              },
            }}
          />

          <Stack.Screen
            name="(auth)"
            options={{
              headerShown: false,
              headerShadowVisible: false,
              headerTitle: "",
              headerBackground() {
                return <View className="bg-white w-full h-full" />;
              },
              headerLeft: () => (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={"#000000"}
                  onPress={navigation.goBack} // Update to use navigation.goBack
                />
              ),
            }}
          />
          <Stack.Screen name="+not-found" />
          <Stack.Screen
            name="notification"
            options={{
              headerShown: true,
              headerShadowVisible: false,
              headerTitle: "",
              headerBackground() {
                return <View className="bg-white w-full h-full" />;
              },
              headerLeft: () => (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={"#000000"}
                  onPress={navigation.goBack} // Update to use navigation.goBack
                />
              ),
            }}
          />

          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="session"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="plan/info/[infoPlanName]" // 특정 경로를 지정
            options={{
              headerShown: true,
              headerShadowVisible: false,
              headerTitle: "",
              headerBackground() {
                return <View className="bg-yomWhite w-full h-full" />;
              },
              headerLeft: () => (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={"#000000"}
                  onPress={navigation.goBack}
                />
              ),
            }}
          />

          <Stack.Screen
            name="plan/plan/[contentPlanName]" // 특정 경로를 지정
            options={{
              headerShown: true,
              headerShadowVisible: false,
              headerTitle: "",
              headerBackground() {
                return <View className="bg-white w-full h-full" />;
              },
              headerLeft: () => (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={"#000000"}
                  onPress={navigation.goBack}
                />
              ),
            }}
          />
          <Stack.Screen
            name="(settings)" // 특정 경로를 지정
            options={{
              headerShown: true,
              headerShadowVisible: false,
              headerTitle: "",
              headerBackground() {
                return <View className="bg-yomWhite w-full h-full" />;
              },
              headerLeft: () => (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={"#000000"}
                  onPress={navigation.goBack}
                />
              ),
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
