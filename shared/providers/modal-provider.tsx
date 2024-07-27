import React from "react";
import GratitudeModal from "@/components/Modal/ContentsModal/GratitudeModal/GratitudeModal";
import { useModal } from "@/shared/store/use-modal-store";

const ModalProvider = () => {
  const { isOpen, onClose } = useModal();

  return <GratitudeModal visible={isOpen} onRequestClose={onClose} />;
};

export default ModalProvider;
