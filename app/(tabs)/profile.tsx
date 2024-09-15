import React from "react";
import { View, Text, ScrollView, ActivityIndicator, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import ProfileText from "@/components/ProfilePage/ProfileText";
import useGetProfile from "@/hooks/useGetProfile"; // Import your custom hook
import AvatarImagePicker from "@/components/ProfilePage/AvatarImagePicker";

export default function ProfilePage() {
  const { profiles, error, loading } = useGetProfile(); // Use the hook to fetch profile data

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
  const profile = profiles && profiles.length > 0 ? profiles[0] : null;

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
            {/* <View className="w-[150px] h-[150px] bg-yomGray rounded-full"></View> */}
            <AvatarImagePicker />
            {/* Replace with profile avatar */}
            {/* <Image
              source={{ uri: profile?.avatarUrl }}
              style={{ width: 150, height: 150, borderRadius: 75 }}
            /> */}
          </View>

          {/* Profile Information */}
          <View className="flex w-full h-fit gap-[25px] mt-[50px]">
            {profile ? (
              <>
                <ProfileText
                  title="Name"
                  content={profile.firstName + " " + profile.lastName}
                />
                <ProfileText title="Username" content={profile.username} />
                <ProfileText
                  title="Birth"
                  content={new Date(profile.birthday).toLocaleDateString()}
                />

                <ProfileText
                  title="Last Update"
                  content={new Date(profile.updatedAt).toLocaleDateString()}
                />
              </>
            ) : (
              <Text>No profile found</Text>
            )}
          </View>

          <View className="w-full h-[50px]"></View>
          <View className="w-full h-[50px]"></View>
        </ScrollView>
      </View>
    </View>
  );
}
