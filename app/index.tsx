import { useState, useEffect } from "react";
import { View, Alert, Text, Pressable } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { getSession } from "@/utils/Auth/getSession"; // named import
import { onAuthStateChange } from "@/utils/Auth/onAuthStateChange"; // named import

export default function App() {
  const [retry, setRetry] = useState(0);
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  const checkNetworkStatus = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      const state = await NetInfo.fetch();

      if (state.isConnected) {
        setIsConnected(true);
        getSession(); // 제대로 함수 호출
        onAuthStateChange(); // 제대로 함수 호출
      } else {
        setIsConnected(false);
        showRetryAlert();
      }
    } catch (error) {
      console.error("Error checking network status:", error);
      showRetryAlert();
    }
  };

  const showRetryAlert = () => {
    Alert.alert("Network Error", "Please check your internet connection.");
  };

  useEffect(() => {
    console.log("Retry attempt: ", retry);
    checkNetworkStatus();
  }, [retry]);

  return (
    <View className="bg-white flex justify-center items-center h-full w-full">
      <Text className="font-[WantedSB] text-[60px]">yom</Text>
      {isConnected === null ? (
        <Text className="w-[90%] font-[WantedM] text-yomGreen text-[18px] absolute top-20 text-center">
          Loggin in....
        </Text>
      ) : isConnected ? (
        <></>
      ) : (
        <>
          <Text className="w-[90%] font-[WantedSB] text-yomRed text-[16px] absolute top-20 text-center">
            Please reaccess the app after connecting to network.
          </Text>

          <View className="w-[85%] h-[50px] border-yomRed bg-yomRed rounded-full border-[2px] flex justify-center items-center absolute bottom-10">
            <Text className="font-[WantedB] text-white text-[16px]">
              Device not connected to network.
            </Text>
          </View>
        </>
      )}
    </View>
  );
}
