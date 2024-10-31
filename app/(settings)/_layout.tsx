import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/Shared/Navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="setting"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="about-us"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="info"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="contact"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="contributers"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default _layout;
