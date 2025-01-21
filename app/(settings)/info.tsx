import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import {
  useRewardedAd,
  useInterstitialAd,
  TestIds,
} from "react-native-google-mobile-ads";
import useUpdateYomCoin from "@/hooks/useUpdateYomCoin";

const info = () => {
  const { isLoaded, isClosed, load, show, reward } = useRewardedAd(
    "ca-app-pub-7270360511167481/3075511081"
  );

  const { updateYomCoin, loading, error } = useUpdateYomCoin();

  //loads the ad advertisement right away.

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (isClosed) {
      console.log(isClosed);
      load();
    }
  }, [isClosed]);

  useEffect(() => {
    if (reward) {
      updateYomCoin(100);
    }
  }, [reward]);

  const handlePress = () => {
    if (isLoaded) {
      show();
      // load();
    } else {
      // No advert ready to show yet
      console.log("No ads ready to show yet");
    }
  };

  return (
    <View className="bg-yomWhite w-full h-full flex justify-center items-center">
      <View className="w-[90%] h-full flex justify-center items-center">
        <Text className="font-[WantedSB] text-[24px] mb-[25px]">Info</Text>
        <Text className="font-[WantedR] text-[18px]">Version 1.0.0</Text>
        <TouchableOpacity
          onPress={() => {
            handlePress();
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
