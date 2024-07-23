import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import CustomHeader from "@/components/CustomHeader";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

import { useColorScheme } from "@/hooks/useColorScheme";

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
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            headerShadowVisible: false,

            headerTitle: "",

            headerLeft: () => (
              <Text className="font-[WantedM] text-[20px]"> yom</Text>
            ),
            headerRight: () => (
              <Ionicons
                name="notifications-outline"
                size={24}
                color={"#000000"}
              />
            ),
            headerStyle: {
              backgroundColor: Colors.light.background,
            },
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
