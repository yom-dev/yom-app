import {
  DarkTheme,
  DefaultTheme,
  Link,
  ThemeProvider,
  useNavigation,
} from "@react-navigation/native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "../global.css";
import { Text, View, AppState, AppStateStatus } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import ModalProvider from "@/shared/providers/modal-provider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Notifications from "expo-notifications";
import { Image } from "expo-image";
import NetInfo from "@react-native-community/netinfo";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [appState, setAppState] = useState(AppState.currentState);
  const [notification, setNotification] = useState<
    Notifications.Notification[]
  >([]);

  const [loaded] = useFonts({
    WantedM: require("../assets/fonts/WantedSans-Medium.otf"),
    WantedR: require("../assets/fonts/WantedSans-Regular.otf"),
    WantedSB: require("../assets/fonts/WantedSans-SemiBold.otf"),
    WantedB: require("../assets/fonts/WantedSans-Bold.otf"),
    WantedEB: require("../assets/fonts/WantedSans-ExtraBold.otf"),
  });

  async function fetchDeliveredNotifications() {
    const deliveredNotifications =
      await Notifications.getPresentedNotificationsAsync();
    setNotification(deliveredNotifications);
  }
  useEffect(() => {
    const fetchDeliveredNotifications = async () => {
      const deliveredNotifications =
        await Notifications.getPresentedNotificationsAsync();
      setNotification(deliveredNotifications);
    };

    const subscription = Notifications.addNotificationReceivedListener(
      fetchDeliveredNotifications
    );

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (appState.match(/inactive|background/) && nextAppState === "active") {
        fetchDeliveredNotifications();
      }
      setAppState(nextAppState);
    };

    const appStateListener = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      appStateListener.remove();
    };
  }, [appState]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      if (!state.isConnected) {
        router.replace("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      fetchDeliveredNotifications
    );
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    if (!loaded) {
      SplashScreen.preventAutoHideAsync();
    } else {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const handleNotificationClick = () => {
    setNotification([]); // 알림을 읽은 것으로 간주하여 배열을 빈 배열로 만듦
  };

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
                <Link
                  to="/notification"
                  key={notification.length}
                  onPress={handleNotificationClick}
                >
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
                  onPress={navigation.goBack}
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
