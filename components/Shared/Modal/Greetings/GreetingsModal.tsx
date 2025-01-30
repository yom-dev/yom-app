import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useModal } from "@/shared/store/use-modal-store";

interface GreetingsModalProps {
  visible: boolean;
  param1: number;
}

const GreetingsModal: React.FC<GreetingsModalProps> = ({ visible, param1 }) => {
  const { onClose } = useModal();
  return (
    <Modal animationType="fade" visible={visible} onRequestClose={onClose}>
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-[80%] h-[50%] p-4 bg-white rounded-lg flex items-center justify-between">
          <Text className="font-[WantedSB] text-[24px]">Welcome to yom!</Text>
          {/* <Image
            source={require("@/assets/images/icons/clapping-icon.png")}
            style={{ width: 100, height: 100, marginBottom: 12 }}
          /> */}
          <View className="w-[94%] h-[65%] ">
            <ScrollView>
              <Text className="font-[WantedM] text-[15px] text-justify">
                Hello there! We’re so happy you’ve joined us! {"\n"}
                {"\n"}
                <Text className="text-yomGreen font-[WantedSB">"yom"</Text> is
                an app designed to help you manage your daily routine with
                various content.
                {"\n"}
                {"\n"}
                Our
                <Text className="text-yomRed font-[WantedSB]"> mission</Text> is
                to assist our users live their day to the fullest. For more
                information please visit our website.
                {"\n"}
                {"\n"}
                As a welcome gift, we are giving you
                <Text className="text-yomOrange font-[WantedSB]">
                  {" "}
                  200
                </Text>{" "}
                coins so you can purchase content within our app.
                {"\n"}
                {"\n"}
                Visit our
                <Text className="text-yomGreen font-[WantedSB]">
                  {" "}
                  store page{" "}
                </Text>
                to start your exciting journey with yom!
              </Text>
            </ScrollView>
          </View>

          <TouchableOpacity
            className="w-full h-[45px] bg-yomGreen rounded-lg flex justify-center items-center"
            onPress={() => {
              onClose();
            }}
          >
            <Text className="font-[WantedM] text-[16px] text-justify text-white">
              Start yom
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GreetingsModal;
