import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { useModal } from "@/shared/store/use-modal-store";
import useYomCoinStore from "@/shared/store/yomCoinStore";
import { supabase } from "@/utils/supabase";
import { useGetUserId } from "@/hooks/useGetUserId";
import useUpdateYomCoin from "@/hooks/useUpdateYomCoin";
import { router } from "expo-router";

interface PlanPurchaseModalProps {
  visible: boolean;
  price: number | undefined;
  infoPlanName: string | string[];
  onClose: () => void;
}

const PlanPurchaseModal: React.FC<PlanPurchaseModalProps> = ({
  visible,
  price,
  infoPlanName,
  onClose,
}) => {
  const { yomCoin, setYomCoin } = useYomCoinStore();
  const { data: userId } = useGetUserId();
  const { updateYomCoin } = useUpdateYomCoin();

  const handlePurchase = async () => {
    if (price !== undefined && price > yomCoin) {
      Alert.alert("Oops! Looks like you need more coins for this plan.");
    } else if (price === undefined) {
      Alert.alert("There error occurred. Please try again.");
    } else {
      const { data, error } = await supabase
        .from("my_plans")
        .update({ [infoPlanName as string]: true })
        .eq("user_id", userId);

      updateYomCoin(-price);

      if (error) {
        console.error("Error updating data:", error);
      } else {
        console.log("Data updated successfully:", data);
        // Alert.alert("Plan Added!");
        router.replace("/(tabs)/plan");
      }
    }
  };

  return (
    <Modal animationType="fade" visible={visible} onRequestClose={onClose}>
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-[80%] h-[33%] p-4 bg-white rounded-lg">
          <View className="w-full h-[75%] flex justify-center items-center py-2">
            <Text className="font-[WantedSB] text-[26px] mb-6">Purchase</Text>
            <View className="w-full flex items-center">
              <Image
                source={require("@/assets/images/icons/purchase-icon.png")}
                style={{ width: 80, height: 80, marginBottom: 12 }}
              ></Image>
              <Text className="font-[WantedSB] text-[12px] text-yomGray text-center">
                Adding this plan will cost {price} coins.{"\n"} Ready to
                proceed?
              </Text>
            </View>
          </View>

          <View className="w-full h-[55px] flex-row justify-between items-center py-1">
            <TouchableOpacity
              onPress={handlePurchase}
              className={
                "w-[48%] h-full rounded-lg flex-row justify-center items-center bg-yomGreen"
              }
            >
              <Text className="font-[WantedM] text-[14px] text-white">
                Purchase
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onClose();
              }}
              className="w-[48%] h-full rounded-lg flex justify-center items-center bg-red-500"
            >
              <Text className="font-[WantedM] text-[14px] text-white">
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PlanPurchaseModal;
