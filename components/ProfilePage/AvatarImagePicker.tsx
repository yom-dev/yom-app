import { useState, useEffect } from "react";
import { Image, View, TouchableOpacity, ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { supabase } from "@/utils/Supabase/supabase";
import { useGetUser } from "@/hooks/useGetUser"; // 커스텀 훅을 가져옵니다.

export default function AvatarImagePicker() {
  const { user, loading: userLoading, error } = useGetUser(); // 커스텀 훅을 사용하여 유저 정보 가져오기
  const [image, setImage] = useState<string | null>(null); // 프로필 이미지 URL 저장
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 관리

  // 유저의 avatarUrl 가져오기
  useEffect(() => {
    const fetchAvatarUrl = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("avatarUrl")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching avatar URL:", error);
        } else if (data) {
          setImage(data.avatarUrl);
        }
      } catch (error) {
        console.error("Unexpected error occurred", error);
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    if (!userLoading) {
      fetchAvatarUrl(); // 유저 정보가 있을 때만 avatarUrl 가져옴
    }
  }, [user, userLoading]);

  // 이미지 선택 및 경로 업데이트 함수
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && user) {
        const selectedImageUri = result.assets[0].uri;
        setImage(selectedImageUri); // 선택한 이미지를 상태에 저장
        console.log("Selected Image URI:", selectedImageUri);

        // Supabase profiles 테이블에 avatarUrl로 경로를 업데이트
        const { error } = await supabase
          .from("profiles")
          .update({ avatarUrl: selectedImageUri }) // 이미지 경로를 바로 업데이트
          .eq("id", user.id);

        if (error) {
          console.error("Error updating avatar URL:", error);
        } else {
          console.log("Avatar URL updated successfully!");
        }
      }
    } catch (error) {
      console.error("Error selecting image", error);
    }
  };

  if (userLoading || loading) {
    return (
      <View className="w-[160px] h-[160px] rounded-full bg-yomGray justify-center items-center">
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  return (
    <View className="w-[160px] h-[160px] rounded-full bg-yomGray justify-center items-center">
      {image ? (
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={{ uri: image }}
            style={{
              width: 160,
              height: 160,
              borderRadius: 80,
              borderWidth: 0.2,
              borderColor: "gray",
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={pickImage}>
          <Ionicons name="camera-outline" size={40} color={"#FFFFFF"} />
        </TouchableOpacity>
      )}
    </View>
  );
}
