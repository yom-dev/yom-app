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
import { isLoading } from "expo-font";

interface RewardedAdModalProps {
  visible: boolean;
  param1: number;
}

const RewardedAdModal: React.FC<RewardedAdModalProps> = ({
  visible,
  param1,
}) => {
  const { isLoaded, isClosed, load, show, reward, error } = useRewardedAd(
    AdMobID.rewardedAd
  );

  const { onClose } = useModal();
  const { updateYomCoin } = useUpdateYomCoin();
  const [AdLoading, setAdLoading] = useState(false);

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

  //에러가 발생했을 경우 에러
  useEffect(() => {
    if (error) {
      console.log("error:", error);
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
            <Text className="font-[WantedSB] text-[26px] mb-6">Horray!</Text>
            <View className="w-full flex items-center">
              <Image
                source={require("@/assets/images/icons/clapping-icon.png")}
                style={{ width: 80, height: 80, marginBottom: 12 }}
              ></Image>
              <Text className="font-[WantedSB] text-[12px] text-yomRed">
                Don't miss {param1} yom coin(s)!
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
              disabled={AdLoading}
              className={`w-[48%] h-full rounded-lg flex-row justify-center items-center ${
                AdLoading ? "bg-orange-300" : "bg-yomOrange"
              }`}
            >
              {AdLoading ? (
                <ActivityIndicator size="small" color="#ffffff" />
              ) : (
                <>
                  <Text className="font-[WantedR] text-[14px]">
                    Get Coins{"  "}
                  </Text>
                  <Image
                    source={require("@/assets/images/icons/coin-icon.png")}
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

export default RewardedAdModal;

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   Image,
//   ActivityIndicator,
// } from "react-native";
// import { useRewardedAd, TestIds } from "react-native-google-mobile-ads";
// import { useModal } from "@/shared/store/use-modal-store";
// import useUpdateYomCoin from "@/hooks/useUpdateYomCoin";
// import AdMobID from "@/constants/AdMobID";

// interface RewardedAdModalProps {
//   visible: boolean;
//   param1: number;
// }

// const RewardedAdModal: React.FC<RewardedAdModalProps> = ({
//   visible,
//   param1,
// }) => {
//   const { isLoaded, load, show, reward, error } = useRewardedAd(
//     AdMobID.rewardedAd || TestIds.REWARDED
//   );

//   const { onClose } = useModal();
//   const { updateYomCoin } = useUpdateYomCoin();
//   const [isLoading, setIsLoading] = useState(false);

//   // Load the ad when the modal is rendered
//   useEffect(() => {
//     if (visible) {
//       load();
//     }
//   }, [visible, load]);

//   // Handle reward logic when a reward is granted
//   useEffect(() => {
//     if (reward) {
//       updateYomCoin(param1);
//     }
//   }, [reward, param1, updateYomCoin]);

//   // Handle error
//   useEffect(() => {
//     if (error) {
//       console.error("Ad failed to load:", error);
//       setIsLoading(false);
//     }
//   }, [error]);

//   const handlePress = async () => {
//     if (isLoaded) {
//       show(); // Show the ad immediately if it is loaded
//     } else {
//       setIsLoading(true);
//       console.log("Waiting for the ad to load...");
//       // Wait until the ad is loaded
//       const interval = setInterval(() => {
//         if (isLoaded) {
//           clearInterval(interval);
//           setIsLoading(false);
//           show();
//         }
//       }, 500);
//     }
//   };

//   return (
//     <Modal animationType="fade" visible={visible} onRequestClose={onClose}>
//       <View className="flex-1 justify-center items-center bg-black/50">
//         <View className="w-[80%] h-[33%] p-4 bg-white rounded-lg">
//           <View className="w-full h-[75%] flex justify-center items-center py-2">
//             <Text className="font-[WantedSB] text-[26px] mb-6">Hooray!</Text>
//             <View className="w-full flex items-center">
//               <Image
//                 source={require("@/assets/images/icons/clapping-icon.png")}
//                 style={{ width: 80, height: 80, marginBottom: 12 }}
//               />
//               <Text className="font-[WantedSB] text-[12px] text-yomRed">
//                 Don't miss {param1} yom coin(s)!
//               </Text>
//             </View>
//           </View>

//           <View className="w-full h-[55px] flex-row justify-between items-center py-1">
//             {/* Close Button */}
//             <TouchableOpacity
//               onPress={() => {
//                 onClose();
//                 setIsLoading(false);
//               }}
//               className="w-[48%] h-full rounded-lg flex justify-center items-center bg-red-500"
//             >
//               <Text className="font-[WantedR] text-[14px]">Close</Text>
//             </TouchableOpacity>

//             {/* Get Coins Button */}
//             <TouchableOpacity
//               onPress={handlePress}
//               disabled={isLoading}
//               className={`w-[48%] h-full rounded-lg flex-row justify-center items-center ${
//                 isLoading ? "bg-gray-400" : "bg-yomOrange"
//               }`}
//             >
//               {isLoading ? (
//                 <ActivityIndicator size="small" color="#ffffff" />
//               ) : (
//                 <>
//                   <Text className="font-[WantedR] text-[14px]">
//                     Get Coins{"  "}
//                   </Text>
//                   <Image
//                     source={require("@/assets/images/icons/coin-icon.png")}
//                     style={{ width: 20, height: 20 }}
//                   />
//                 </>
//               )}
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default RewardedAdModal;
