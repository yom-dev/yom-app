import React from "react";
import { View, Text, Modal, ModalProps, ImageBackground } from "react-native";
import ModalHeader from "@/components/Shared/Modal/ModalHeader";
import CustomButton from "@/components/Shared/Button/CustomButton";
import GratitudeModalContent from "@/components/Shared/Modal/GratitudeModal/GratitudeModalContent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useModal } from "@/shared/store/use-modal-store";

interface GratitudeModalProps extends ModalProps {
  visible: boolean;
}

const GratitudeModal: React.FC<GratitudeModalProps> = ({ visible }) => {
  const { onClose } = useModal();

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      presentationStyle="pageSheet"
      animationType="slide"
    >
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <View style={{ width: "90%", flex: 1 }}>
          <ModalHeader title={"하루감사"} onRequestClose={onClose} />
          <KeyboardAwareScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            extraScrollHeight={30}
            keyboardOpeningTime={100}
          >
            <View className="w-full h-[200px] mt-[60px]">
              <ImageBackground
                source={require("@/assets/images/icons/note-icon.png")}
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
              <GratitudeModalContent />
            </View>
          </KeyboardAwareScrollView>
          <View className="w-full h-[50px] mt-[35px] fixed bottom-10">
            <CustomButton
              title="저장하기"
              titleSize={18}
              backgroundColor="yomGreen"
              activeBackgroundColor="yomDarkGreen"
              textColor="yomWhite"
              onPress={() => {
                onClose();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GratitudeModal;
