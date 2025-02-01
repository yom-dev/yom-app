import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  useNavigation,
} from "@react-navigation/native";
import { AppVersionCheck } from "@/utils/VersionCheck/AppVersionCheck";
import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { useFonts } from "expo-font";
import { Stack, Link } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "../global.css";
import { Text, View, AppState } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import ModalProvider from "@/shared/providers/modal-provider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";
import HeaderRight from "@/components/Shared/Header/HeaderRight";
import requestTrackingPermission from "@/utils/Permission/requestTrackingPermission";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false, // Disable strict mode
  });

  const [isConnected, setIsConnected] = useState<boolean | null>(true);
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [appState, setAppState] = useState(AppState.currentState);

  const [loaded] = useFonts({
    WantedM: require("../assets/fonts/WantedSans-Medium.otf"),
    WantedR: require("../assets/fonts/WantedSans-Regular.otf"),
    WantedSB: require("../assets/fonts/WantedSans-SemiBold.otf"),
    WantedB: require("../assets/fonts/WantedSans-Bold.otf"),
    WantedEB: require("../assets/fonts/WantedSans-ExtraBold.otf"),
  });

  useEffect(() => {
    console.log("Version Check", AppVersionCheck);
    AppVersionCheck();
    requestTrackingPermission();
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

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView>
        <ModalProvider />
        <Stack screenOptions={{ gestureEnabled: true }}>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
              headerShadowVisible: false,
              headerTitle: "",

              headerLeft: () => (
                <Text className="font-[WantedM] text-[20px] text-yomBlack">
                  yom
                </Text>
              ),
              headerRight: () => <HeaderRight />,

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
