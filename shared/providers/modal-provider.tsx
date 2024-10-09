import React from "react";
import ProfileEditModal from "@/components/Shared/Modal/Profile/ProfileEditModal";
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
