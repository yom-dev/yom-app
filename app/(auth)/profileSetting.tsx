import React, { useState } from "react";
import { Alert, View, Text, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { Link } from "expo-router";
import SignInButton from "@/components/Button/SignInButton";
import { router } from "expo-router";

const ProfileSetting = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [loading, setLoading] = useState(false);

  const saveProfile = () => {
    // 여기에 프로필 저장 로직 추가
    console.log("Profile Saved:", {
      firstName,
      lastName,
      birthYear,
      birthMonth,
      birthDay,
    });
    Alert.alert("Profile saved successfully!");
    router.replace("/(tabs)/home");
  };

  return (
    <View className="bg-white h-full w-full flex items-center">
      <View className="w-[90%] h-full">
        <View className="flex items-center h-[20%] justify-end">
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

          <Text className="font-[WantedM]">Date of birth</Text>
          <View className="flex flex-row gap-1 justify-between">
            <TextInput
              onChangeText={(text) => setBirthYear(text)}
              value={birthYear}
              placeholder="Year"
              keyboardType="numeric"
              maxLength={4}
              className="border border-yomGray h-[50px] rounded-2xl p-3 w-[31%] font-[WantedR] text-[14px]"
            />

            <TextInput
              onChangeText={(text) => setBirthMonth(text)}
              value={birthMonth}
              placeholder="Month"
              keyboardType="numeric"
              maxLength={2}
              className="border border-yomGray h-[50px] rounded-2xl p-3 w-[31%] font-[WantedR] text-[14px]"
            />

            <TextInput
              onChangeText={(text) => setBirthDay(text)}
              value={birthDay}
              placeholder="Day"
              keyboardType="numeric"
              maxLength={2}
              className="border border-yomGray h-[50px] rounded-2xl p-3 w-[31%] font-[WantedR] text-[14px]"
            />
          </View>
        </View>

        <View className="w-full h-[46px] border-yomGray border-[0.5px] rounded-3xl mt-[25px]">
          <SignInButton
            title="Save Profile"
            titleSize={14}
            backgroundColor="yomWhite"
            textColor="yomBlack"
            activeBackgroundColor="yomGreen"
            onPress={saveProfile}
          />
        </View>

        <View className="w-full flex-row justify-center mt-[40px]">
          <Text className="text-yomGray mr-1 font-[WantedM]">
            Want to sign out?
          </Text>
          <Link href="/(auth)/signin">
            <Text className="text-yomGray font-[WantedM] underline">
              Sign out
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default ProfileSetting;
