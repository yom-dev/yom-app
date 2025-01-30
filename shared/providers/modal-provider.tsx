import React from "react";
import { useModal } from "@/shared/store/use-modal-store";
import { RewardedAd } from "react-native-google-mobile-ads";
import RewardedAdModal from "@/components/Shared/Modal/Advertisement/RewardedAdModal";
import RewardedAdCapModal from "@/components/Shared/Modal/Advertisement/RewardedAdCapModal";
import GreetingsModal from "@/components/Shared/Modal/Greetings/GreetingsModal";

const ModalProvider = () => {
  const { type, isOpen, onClose, param1 } = useModal();

  return (
    <>
      {type === "RewardedAd" && (
        <RewardedAdModal visible={isOpen} param1={param1} />
      )}

      {type === "RewardedAdCap" && (
        <RewardedAdCapModal visible={isOpen} param1={param1} />
      )}

      {type === "Greetings" && (
        <GreetingsModal visible={isOpen} param1={param1} />
      )}
    </>
  );
};

export default ModalProvider;
