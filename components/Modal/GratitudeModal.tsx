import { View, Text, Modal, ModalProps, Pressable } from "react-native";
import React from "react";

interface GratitudeModalProps extends ModalProps {
  visible: boolean;
  onRequestClose: () => void;
}

const GratitudeModal: React.FC<GratitudeModalProps> = ({
  visible,
  onRequestClose,
}) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      presentationStyle="pageSheet"
      animationType="slide"
    >
      <View className="w-full h-full justify-center items-center">
        <Pressable onPress={onRequestClose}>
          <Text>Thank you!</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default GratitudeModal;
