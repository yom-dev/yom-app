import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  ModalProps,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { supabase } from "@/utils/supabase";
import SignInButton from "@/components/Shared/Button/SignInButton";
import { useGetUser } from "@/hooks/useGetUser";
import { useRouter } from "expo-router";

interface ProfileEditProps extends ModalProps {
  visible: boolean;
  onClose: () => void; // 모달을 닫는 함수
  onUpdateSuccess: () => void; // 업데이트 성공 시 호출되는 함수
}

const ProfileEditModal: React.FC<ProfileEditProps> = ({
  visible,
  onClose,
  onUpdateSuccess,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const { user } = useGetUser(); // 데이터 가져오기
  const router = useRouter();

  // DatePicker 변경 핸들러
  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setBirthDate(selectedDate); // 선택된 날짜를 상태에 저장
    }
  };

  // 프로필 저장 및 Supabase 업데이트
  const saveProfile = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .update({
        firstName,
        lastName,
        userName,
        birthDate: birthDate.toISOString().split("T")[0],
      })
      .eq("user_id", user?.id); // user ID 기준으로 업데이트

    if (error) {
      console.error("Error updating profile:", error);
      Alert.alert("Error", "Failed to update profile.");
    } else {
      Alert.alert("Profile saved successfully!");
      onUpdateSuccess(); // 프로필 업데이트 성공 시 호출
      router.push("/(tabs)/profile");
      onClose(); // 모달 닫기
    }
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      presentationStyle="pageSheet"
      animationType="slide"
    >
      <View className="bg-white h-full w-full flex items-center">
        <ScrollView className="w-[90%] h-full">
          <View className="flex items-center h-[15%] justify-end">
            <Text className="font-[WantedSB] text-[40px]">yom</Text>
          </View>

          <View className="flex h-fit gap-4 mt-[40px]">
            <Text className="font-[WantedM]">Basic Info</Text>

            <TextInput
              onChangeText={(text) => setFirstName(text)}
              value={firstName}
              placeholder="First Name"
              autoCapitalize={"words"}
              className="border border-yomGray h-[50px] rounded-2xl p-3 w-full font-[WantedR] text-[14px]"
            />

            <TextInput
              onChangeText={(text) => setLastName(text)}
              value={lastName}
              placeholder="Last Name"
              autoCapitalize={"words"}
              className="border border-yomGray h-[50px] rounded-2xl p-3 w-full font-[WantedR] text-[14px]"
            />

            <TextInput
              onChangeText={(text) => setUserName(text)}
              value={userName}
              placeholder="Username"
              autoCapitalize={"words"}
              className="border border-yomGray h-[50px] rounded-2xl p-3 w-full font-[WantedR] text-[14px]"
            />

            <Text className="font-[WantedM]">Date of Birth</Text>
            <View className="w-full h-[180px] ">
              <DateTimePicker
                mode="date"
                display="spinner"
                value={birthDate}
                onChange={handleDateChange}
                style={{ flex: 1 }}
              />
            </View>
            <View className="w-full h-[46px]  rounded-3xl mt-[10px]">
              <SignInButton
                title="Save Profile"
                titleSize={14}
                backgroundColor="yomWhite"
                textColor="yomBlack"
                activeBackgroundColor="yomGreen"
                onPress={saveProfile}
              />
            </View>

            <View className="h-[50px]"></View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ProfileEditModal;
