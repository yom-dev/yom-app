import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/Navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="signin"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default _layout;
