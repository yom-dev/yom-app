import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View, Text } from "react-native";

import { Collapsible } from "@/components/default/Collapsible";
import { ExternalLink } from "@/components/default/ExternalLink";
import ParallaxScrollView from "@/components/default/ParallaxScrollView";
import { ThemedText } from "@/components/default/ThemedText";
import { ThemedView } from "@/components/default/ThemedView";

export default function Plan() {
  return (
    <View className="bg-yomWhite w-full flex h-full px-[20px] py-[20px]">
      <Text className="text-[32px] text-black font-[WantedSB]">플랜</Text>
    </View>
  );
}
