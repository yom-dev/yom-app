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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
      <View className="h-full w-full bg-white flex items-center">
        <View className="bg-white w-[90%] flex h-full">
          <ModalHeader onRequestClose={onRequestClose} />

          <KeyboardAwareScrollView
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

            <View>
              <Text className="text-[16px] font-[WantedSB] mt-[55px]">
                오늘 하루 감사한 일은 어떤 것들이 있었나요?
              </Text>
            </View>
            <View className="h-[220px] mt-[30px] flex">
              <ModalContent />
            </View>
            <View className="w-full h-[50px] mt-[35px]">
              <CustomButton
                title="저장하기"
                titleSize={18}
                backgroundColor="yomGreen"
                activeBackgroundColor="yomDarkGreen"
                textColor="yomWhite"
                onPress={onRequestClose}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default GratitudeModal;
