import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/Shared/Navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.light.background,
          },
          tabBarActiveTintColor: Colors.light.tabGreen,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              // <TabBarIcon name={"home"} color={color} />
              <Ionicons name="home" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="plan"
          options={{
            title: "My Plan",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={"book"} color={color} />
            ),
          }}
        />
        {/* <Tabs.Screen
        name="record"
        options={{
          title: "Record",
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={"book"} color={color} />
            <Ionicons name="stats-chart-sharp" size={20} color={color} />
          ),
        }}
      /> */}
        <Tabs.Screen
          name="store"
          options={{
            title: "Store",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={"shopping-cart"} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={"user"} color={color} />
            ),
          }}
        />
      </Tabs>
      {/* <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      /> */}
    </>
  );
}
