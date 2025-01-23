import React from "react";
import { useModal } from "@/shared/store/use-modal-store";
import { RewardedAd } from "react-native-google-mobile-ads";
import RewardedAdModal from "@/components/Shared/Modal/Advertisement/RewardedAdModal";

const ModalProvider = () => {
  const { type, isOpen, onClose, param1 } = useModal();

  return (
    <>
      {type === "RewardedAd" && (
        <RewardedAdModal visible={isOpen} param1={param1} />
      )}
    </>
  );
};

export default ModalProvider;
