import React from "react";
import GratitudeModal from "@/components/Shared/Modal/GratitudeModal/GratitudeModal";
import GratitudeInfoModal from "@/components/Shared/Modal/GratitudeModal/GratitudeInfoModal";
import GratitudeEditModal from "@/components/Shared/Modal/GratitudeModal/GratitudeEditModal";
import ProfileEditModal from "@/components/Shared/Modal/ProfileEditModal";
import { useModal } from "@/shared/store/use-modal-store";

const ModalProvider = () => {
  const { type, isOpen, onClose } = useModal();

  return (
    <>
      {type === "profileEdit" && (
        <ProfileEditModal visible={isOpen} onRequestClose={onClose} />
      )}
    </>
  );
};

export default ModalProvider;
