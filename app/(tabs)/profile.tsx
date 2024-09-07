import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import MainCard from "@/components/MainPage/MainCard/GratitudeMainCard/GratitudeMainCard";
import MainCarousel from "@/components/Shared/Carousel/MainCarousel";
import ProfileText from "@/components/ProfilePage/ProfileText";
import CustomButton from "@/components/Shared/Button/CustomButton";
import { supabase } from "@/utils/supabase";
import { Alert } from "react-native";
import * as Application from "expo-application";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
export default function profile() {
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
          <View className="w-full flex-row justify-center mt-[50px]">
            <View className="w-[150px] h-[150px] bg-yomGray rounded-full"></View>
          </View>

          <View className="flex w-full h-fit gap-[25px] mt-[50px]">
            <ProfileText title="이름" content="임상훈" />
            <ProfileText title="닉네임" content="29" />
            <ProfileText title="이메일" content="sanghoonim@hanyang.ac.kr" />
            <ProfileText title="생년월일" content="2000.02.29" />
          </View>

          <View className="w-full h-[50px]"></View>
          <View className="w-full h-[50px]"></View>
        </ScrollView>
      </View>
    </View>
  );
}
