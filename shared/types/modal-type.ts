export type ModalType = "gratitude" | "gratitude-info" | "gratitude-edit";

export interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}
