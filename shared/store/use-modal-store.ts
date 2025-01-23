import zustand, { create } from "zustand";
import { ModalType } from "@/shared/types/modal-type";

interface ModalState {
  type: ModalType | null;
  isOpen: boolean;
  param1: number; // param1 추가
  onOpen: (type: ModalType, param1: number) => void;
  onClose: () => void;
}

export const useModal = create<ModalState>((set) => ({
  type: null,
  isOpen: false,
  param1: 1, // 초기값 설정
  onOpen: (type: ModalType, param1: number) =>
    set({ type, isOpen: true, param1 }), // param1을 상태에 저장
  onClose: () => set({ isOpen: false, param1: 1 }), // 모달 닫힐 때 param1 초기화
}));
