import React from "react";
import GratitudeModal from "@/components/Modal/GratitudeModal/GratitudeModal";
import GratitudeInfoModal from "@/components/Modal/GratitudeModal/GratitudeInfoModal";
import GratitudeEditModal from "@/components/Modal/GratitudeModal/GratitudeEditModal";
import { useModal } from "@/shared/store/use-modal-store";

const ModalProvider = () => {
  const { type, isOpen, onClose } = useModal();

  return (
    <>
      {type === "gratitude" && (
        <GratitudeModal visible={isOpen} onRequestClose={onClose} />
      )}
      {type === "gratitude-info" && (
        <GratitudeInfoModal visible={isOpen} onRequestClose={onClose} />
      )}
      {type === "gratitude-edit" && (
        <GratitudeEditModal visible={isOpen} onRequestClose={onClose} />
      )}
    </>
  );
};

export default ModalProvider;
