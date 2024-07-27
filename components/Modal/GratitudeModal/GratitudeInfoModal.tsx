import React from "react";
import { View, Text, Modal, ModalProps, ImageBackground } from "react-native";
import ModalHeader from "@/components/Modal/ModalHeader";
import CustomButton from "@/components/Button/CustomButton";
import GratitudeModalContent from "@/components/Modal/GratitudeModal/GratitudeModalContent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useModal } from "@/shared/store/use-modal-store";
import InfoModalContent from "../InfoModalContent";

interface GratitudeModalProps extends ModalProps {
  visible: boolean;
}

const GratitudeInfoModal: React.FC<GratitudeModalProps> = ({ visible }) => {
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
                source={require("@/assets/images/note-icon.png")}
                className="w-full h-full flex justify-center items-center"
                resizeMode="contain"
                style={{ borderRadius: 20 }} // ImageBackground에 직접 borderRadius 추가
              />
            </View>

            <View>
              {/* <Text className="text-[24px] font-[WantedSB] mt-[55px]">
                감사함의 중요성
              </Text> */}
            </View>
            <View className="h-fit w-[85%] mt-[30px] flex items-center">
              <InfoModalContent
                text={
                  "매일 세 가지 감사한 일을 적는 습관은 긍정적인 정서를 증진하고, 삶에 대한 만족도를 높이는 효과적인 방법입니다. 이러한 실천은 긍정 심리학에서 자주 언급되며, 일상 속 작은 것들에 대한 감사의 마음을 인식하게 함으로써 우리의 정신적 건강에 긍정적인 영향을 미칩니다. 감사 일기를 작성하는 행위는 스트레스를 줄이고, 우울한 감정을 완화시키며, 전반적인 행복감을 증가시킬 수 있습니다. 또한, 감사를 통해 현재의 순간에 더 집중하게 되고, 인생에서 중요한 것들이 무엇인지에 대한 인식을 높이게 되어, 더 풍요로운 삶을 영위할 수 있는 기반을 마련하게 됩니다. 이와 같이 매일 세 가지 감사함을 기록하는 습관은 간단하지만 강력한 변화를 가져오는 도구로서, 일상의 소중함을 일깨우고 자기 자신과의 관계를 개선하는 데 큰 도움이 됩니다."
                }
              />
            </View>
            <View className="w-full h-[50px] mt-[35px]">
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
          </KeyboardAwareScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default GratitudeInfoModal;
