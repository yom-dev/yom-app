import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/Navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
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
          title: "홈",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"home"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="plan"
        options={{
          title: "내 플랜",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"search"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="record"
        options={{
          title: "기록",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"book"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: "스토어",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"shopping-cart"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "프로필",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"user"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
