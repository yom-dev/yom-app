import {
  DarkTheme,
  DefaultTheme,
  Link,
  ThemeProvider,
  useNavigation, // Import useNavigation
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

import { useColorScheme } from "@/hooks/useColorScheme";
import ModalProvider from "@/shared/providers/modal-provider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    WantedM: require("../assets/fonts/WantedSans-Medium.otf"),
    WantedR: require("../assets/fonts/WantedSans-Regular.otf"),
    WantedSB: require("../assets/fonts/WantedSans-SemiBold.otf"),
    WantedB: require("../assets/fonts/WantedSans-Bold.otf"),
    WantedEB: require("../assets/fonts/WantedSans-ExtraBold.otf"),
  });

  const navigation = useNavigation(); // Use the useNavigation hook

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
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color={"#000000"}
                  />
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
                return <View className="bg-yomWhite w-full h-full" />;
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
