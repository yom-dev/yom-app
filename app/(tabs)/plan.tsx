import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View, Text } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Plan() {
  return (
    <View className="bg-yomWhite w-full flex h-full px-[20px] py-[20px]">
      <Text className="text-[32px] text-black font-[WantedSB]">플랜</Text>
    </View>
  );
}
