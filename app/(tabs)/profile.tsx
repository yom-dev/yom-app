import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import ProfileText from "@/components/ProfilePage/ProfileText";
import useGetProfile from "@/hooks/useGetProfile"; // Import your custom hook
import AvatarImagePicker from "@/components/ProfilePage/AvatarImagePicker";
import ProfileEditModal from "@/components/Shared/Modal/Profile/ProfileEditModal"; // ProfileEditModal 컴포넌트 임포트

export default function ProfilePage() {
  const { data, error, loading, refetch } = useGetProfile();
  const [isModalVisible, setModalVisible] = useState(false);

  // Handle loading state
  if (loading) {
    return (
      <View className="h-full w-full bg-yomWhite flex justify-center items-center">
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  // Handle error state
  if (error) {
    return (
      <View className="h-full w-full bg-yomWhite flex justify-center items-center">
        <Text>Error: {error}</Text>
      </View>
    );
  }

  // Assuming the profile array has only one profile object (adjust according to your data structure)
  const profile = data && data.length > 0 ? data[0] : null;

  // 프로필 업데이트 후 모달을 닫고 데이터를 다시 패칭하는 함수
  const handleProfileUpdate = () => {
    setModalVisible(false); // 모달을 닫고
    refetch(); // 데이터를 다시 패칭
  };

  return (
    <View className="h-full w-full bg-yomWhite flex items-center">
      <View className="bg-yomWhite w-[90%] flex h-full">
        <ScrollView
          className="w-full h-full"
          showsVerticalScrollIndicator={false}
        >
          <View className="h-fit flex-row items-end justify-between mt-[20px]">
            <Text className="text-[32px] text-yomBlack font-[WantedSB]">
              Profile
            </Text>

            <Link href="/(settings)/setting">
              <Ionicons name="settings-outline" size={22} color="black" />
            </Link>
          </View>

          {/* Profile Avatar */}
          <View className="w-full flex-row justify-center mt-[50px]">
            <AvatarImagePicker />
          </View>

          {/* Profile Information */}
          <View className="flex w-full h-fit mt-[50px]">
            {profile ? (
              <>
                <View className="w-full flex-row justify-end">
                  <Pressable
                    onPress={() => {
                      setModalVisible(true); // 모달 열기
                    }}
                  >
                    <Text className="text-yomRed text-[12px]">
                      edit profile
                    </Text>
                  </Pressable>
                </View>
                <View className="gap-[25px] flex w-full h-fit">
                  <ProfileText
                    title="Name"
                    content={profile.firstName + " " + profile.lastName}
                  />
                  <ProfileText title="Username" content={profile.userName} />
                  <ProfileText
                    title="Birth"
                    content={new Date(profile.birthDate).toLocaleDateString()}
                  />
                  {/* <ProfileText
                    title="Last Update"
                    content={new Date(profile.updatedAt).toLocaleDateString()}
                  /> */}
                </View>
              </>
            ) : (
              <Text>No profile found</Text>
            )}
          </View>

          <View className="w-full h-[50px]"></View>
          <View className="w-full h-[50px]"></View>
        </ScrollView>

        {/* ProfileEditModal 컴포넌트 추가 */}
        <ProfileEditModal
          visible={isModalVisible}
          onClose={() => setModalVisible(false)} // 모달 닫기
          onUpdateSuccess={handleProfileUpdate} // 업데이트 성공 시 처리
        />
      </View>
    </View>
  );
}
