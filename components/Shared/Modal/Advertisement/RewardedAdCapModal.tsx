import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  useRewardedAd,
  //   useInterstitialAd,
  TestIds,
} from "react-native-google-mobile-ads";
import useUpdateYomCoin from "@/hooks/useUpdateYomCoin";
import AdMobID from "@/constants/AdMobID";
import { useModal } from "@/shared/store/use-modal-store";

interface RewardedAdModalProps {
  visible: boolean;
  param1: number;
}

const RewardedAdCapModal: React.FC<RewardedAdModalProps> = ({
  visible,
  param1,
}) => {
  const { isLoaded, isClosed, load, show, reward, error } = useRewardedAd(
    AdMobID.rewardedAdCap
  );

  const { onClose } = useModal();
  const { updateYomCoin } = useUpdateYomCoin();
  const [AdLoading, setAdLoading] = useState(false);
  const [capReached, setCapReached] = useState(false);
  const [errorMSG, setErrorMSG] = useState("");
  const [adError, setAdError] = useState(false);

  //   //모달이 보이면 광고를 로드한다.
  //   useEffect(() => {
  //     if (visible) {
  //       load();
  //       console.log("Ad loading triggered");
  //     }
  //   }, [visible, load]);

  //광고가 닫혔을 경우에 동작
  useEffect(() => {
    if (isClosed) {
      onClose();

      //   load();
    }
  }, [isClosed]);

  useEffect(() => {
    setAdError(false);
    setCapReached(false);
  }, [visible]);

  //에러가 발생했을 경우 에러
  useEffect(() => {
    if (error) {
      if (error.message && error.message.includes("Frequency cap reached")) {
        // Frequency cap reached 처리
        setCapReached(true);
        setAdError(true);
        setErrorMSG("You have reached the hourly limit of ads.");
        setAdLoading(false);
      } else {
        // 기타 에러 처리
        console.log("error:", error);
        setAdLoading(false);
        setAdError(true);
        setErrorMSG("Failed to load an Ad. Please try again.");
      }
    }
  }, [error]);

  //리워드가 주어졌을 경우 동작.
  useEffect(() => {
    if (reward) {
      updateYomCoin(param1);
    }
  }, [reward]);

  // 광고 로드 여부에 따라 로딩 상태 업데이트
  useEffect(() => {
    if (isLoaded) {
      setAdLoading(false); // 광고 로드 완료 시 로딩 상태 해제
      show();
    }
  }, [isLoaded]);

  const handlePress = () => {
    setAdLoading(true);
    load();
  };

  return (
    <Modal animationType="fade" visible={visible} onRequestClose={onClose}>
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-[80%] h-[33%] p-4 bg-white rounded-lg">
          <View className="w-full h-[75%] flex justify-center items-center py-2">
            <Text className="font-[WantedSB] text-[26px] mb-6">
              {adError ? "I'm sorry." : "Horray!"}
            </Text>
            <View className="w-full flex items-center">
              <Image
                source={
                  adError
                    ? require("@/assets/images/icons/sad-icon.png")
                    : require("@/assets/images/icons/clapping-icon.png")
                }
                style={{ width: 80, height: 80, marginBottom: 12 }}
              ></Image>
              <Text className="font-[WantedSB] text-[12px] text-yomRed">
                {adError ? errorMSG : `Don't miss ${param1} yom coin(s)!`}
              </Text>
            </View>
          </View>

          <View className="w-full h-[55px] flex-row justify-between items-center py-1">
            <TouchableOpacity
              onPress={() => {
                onClose();
                setAdLoading(false);
              }}
              className="w-[48%] h-full rounded-lg flex justify-center items-center bg-red-500"
            >
              <Text className="font-[WantedR] text-[14px]">Close</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={AdLoading ? undefined : handlePress}
              disabled={AdLoading || capReached}
              className={`w-[48%] h-full rounded-lg flex-row justify-center items-center ${
                AdLoading ? "bg-orange-300" : "bg-yomOrange"
              }`}
            >
              {AdLoading ? (
                <ActivityIndicator size="small" color="#ffffff" />
              ) : (
                <>
                  <Text className="font-[WantedR] text-[14px]">
                    {adError ? `Oops!${"  "}` : `Get Coins${"  "}`}
                  </Text>
                  <Image
                    source={
                      adError
                        ? require("@/assets/images/icons/warning-icon-2.png")
                        : require("@/assets/images/icons/coin-icon.png")
                    }
                    style={{ width: 20, height: 20 }}
                  />
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RewardedAdCapModal;
