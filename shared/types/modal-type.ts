export type ModalType = "RewardedAd" | "RewardedAdCap" | "Greetings";

export interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}
