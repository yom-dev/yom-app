import {
  View,
  Text,
  Modal,
  ModalProps,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import ModalHeader from "@/components/Modal/ModalHeader";
import CustomButton from "@/components/Button/CustomButton";
import ModalContent from "./ModalContent";

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
      <View className="h-full w-full bg-yomWhite flex items-center">
        <View className="bg-yomWhite w-[90%] flex h-full">
          <ModalHeader onRequestClose={onRequestClose} />

          <ScrollView
            className="w-full h-full"
            showsVerticalScrollIndicator={false}
          >
            <View className="w-full h-[200px] mt-[60px]">
              <ImageBackground
                source={require("@/assets/images/note-icon.png")}
                className="w-full h-full flex justify-center items-center"
                resizeMode="contain"
                style={{ borderRadius: 20 }} // ImageBackground에 직접 borderRadius 추가
              />
            </View>
            <View className="">
              <ModalContent />
            </View>
            <View className="w-full h-[50px]">
              <CustomButton
                title="저장하기"
                titleSize={18}
                backgroundColor="yomGreen"
                activeBackgroundColor="yomDarkGreen"
                textColor="yomWhite"
                onPress={onRequestClose}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default GratitudeModal;
