import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import {
  useRewardedAd,
  useInterstitialAd,
  TestIds,
} from "react-native-google-mobile-ads";
import useUpdateYomCoin from "@/hooks/useUpdateYomCoin";
import AdMobID from "@/constants/AdMobID";
import { useModal } from "@/shared/store/use-modal-store"; // useModal 훅 import

const info = () => {
  const { onOpen } = useModal();

  return (
    <View className="bg-yomWhite w-full h-full flex justify-center items-center">
      <View className="w-[90%] h-full flex justify-center items-center">
        <Text className="font-[WantedSB] text-[24px] mb-[25px]">Info</Text>
        <Text className="font-[WantedR] text-[18px]">Version 1.0.0</Text>
        <TouchableOpacity
          onPress={() => {
            onOpen("RewardedAd", 5);
          }} // Call handleDeleteAccount on press
          className="h-[50px] flex justify-center w-[90%]"
        >
          <Text className="text-yomRed font-semibold">ad trigger </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default info;
