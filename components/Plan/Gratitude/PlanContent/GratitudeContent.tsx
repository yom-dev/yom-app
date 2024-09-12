import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import CustomButton from "@/components/Shared/Button/CustomButton";
import GratitudeItem from "./GratitudeItem";

import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const GratitudeContent = () => {
  return (
    <View className="w-full h-full flex-row justify-center">
      <View className="w-full">
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
              What are you grateful for today?
            </Text>
          </View>
          <View className="h-[220px] mt-[30px] flex">
            <GratitudeItem />
          </View>
        </KeyboardAwareScrollView>
        <View className="w-full h-[45px] mt-[35px] fixed bottom-20">
          <CustomButton
            title="Save"
            titleSize={18}
            backgroundColor="yomGreen"
            activeBackgroundColor="yomDarkGreen"
            textColor="yomWhite"
            onPress={() => {
              console.log("저장하기");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default GratitudeContent;
