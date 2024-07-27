import zustand, { create } from "zustand";
import { ModalType } from "@/shared/types/modal-type";

interface ModalState {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

export const useModal = create<ModalState>((set) => ({
  type: null,
  isOpen: false,
  onOpen: (type: ModalType) => set({ type, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
