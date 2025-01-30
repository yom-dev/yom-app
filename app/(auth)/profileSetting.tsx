import React, { useState } from "react";
import { Alert, View, Text, TextInput } from "react-native";
import { router } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import { supabase } from "@/utils/supabase"; // Supabase 설정을 불러옵니다.
import SignInButton from "@/components/Shared/Button/SignInButton";
import { useGetUser } from "@/hooks/useGetUser";
import { ScrollView } from "react-native-gesture-handler";
import { useModal } from "@/shared/store/use-modal-store";

const ProfileSetting = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const { user, loading, error } = useGetUser();
  const { onOpen } = useModal();

  // DatePicker 변경 핸들러
  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setBirthDate(selectedDate); // 선택된 날짜를 상태에 저장
    }
  };

  // 프로필 저장 및 Supabase 업데이트
  const saveProfile = async () => {
    // Supabase 프로필 업데이트
    const { data, error } = await supabase
      .from("profiles") // 테이블 이름
      .update({
        firstName,
        lastName,
        userName,
        birthDate: birthDate.toISOString().split("T")[0], // Date 객체를 YYYY-MM-DD 형식으로 변환
      })
      .eq("user_id", user.id); // 업데이트할 row 식별 (여기서는 userName을 기준으로 업데이트)

    if (error) {
      console.error("Error updating profile:", error);
      Alert.alert("Error", "Failed to update profile.");
    } else {
      console.log("Profile updated successfully:", data);
      // Alert.alert("Success", "Profile saved successfully!");
      router.replace("/(tabs)/home"); // 성공 시 홈으로 이동
      onOpen("Greetings", 1);
    }
  };

  return (
    <View className="bg-white h-full w-full flex items-center justify-center">
      <ScrollView className="w-[90%] h-full ">
        <View className="flex items-center h-[10%] justify-end mt-[70px]">
          <Text className="font-[WantedSB] text-[40px]">yom</Text>
        </View>

        <View className="flex h-full gap-4 mt-[40px]">
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
              mode="date" // 날짜 선택 모드
              display="spinner"
              value={birthDate}
              onChange={handleDateChange} // 날짜 변경 핸들러
              style={{ flex: 1 }}
            />
          </View>
          <View className="w-full h-[46px]  rounded-3xl mt-[7px]">
            <SignInButton
              title="Save Profile"
              titleSize={14}
              backgroundColor="yomWhite"
              textColor="yomBlack"
              activeBackgroundColor="yomGreen"
              onPress={saveProfile}
            />
          </View>

          <View className="h-[80px]"></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileSetting;
