// GratitudeContent.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import CustomButton from "@/components/Shared/Button/CustomButton";
import GratitudeItem from "./GratitudeItem";
import { supabase } from "@/utils/supabase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GratitudeContentType } from "@/shared/types/GratitudeContentType";
import { useGetUserId } from "@/hooks/useGetUserId";
import { useModal } from "@/shared/store/use-modal-store";

interface GratitudeContentProps {
  data: GratitudeContentType[] | null;
  refetch: () => void;
  loading: boolean;
}

const GratitudeContent: React.FC<GratitudeContentProps> = ({
  data,
  loading,
  refetch,
}) => {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");
  const [hasTodayEntry, setHasTodayEntry] = useState(false);

  //현재 날짜 및 시간 변수
  const currentTime = new Date();

  //유저 id
  const { data: id } = useGetUserId();

  //서버에 업로드 상태 저장
  const [gLoading, setGLoading] = useState(false);

  // 모달 오픈
  const { onOpen } = useModal();

  useEffect(() => {
    const now = new Date();
    const localDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    const todayEntry = data?.find((entry) => {
      if (entry !== null) {
        const entryDate = new Date(entry.createdAt);
        const entryLocalDate = new Date(
          entryDate.getFullYear(),
          entryDate.getMonth(),
          entryDate.getDate()
        );
        return entryLocalDate.getTime() === localDate.getTime(); // 로컬 날짜 기준 비교
      } else {
        return false; // entry가 null이면 false 반환하여 find가 계속 진행됨
      }
    });

    if (todayEntry) {
      setItem1(todayEntry.item1);
      setItem2(todayEntry.item2);
      setItem3(todayEntry.item3);
      setHasTodayEntry(true);
    }
  }, [data]);

  const handleSave = async () => {
    if (hasTodayEntry) {
      alert("You have already thanked today.");
      return;
    }

    setGLoading(true); // 저장 시작 시 로딩 상태 활성화
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      const { data, error } = await supabase
        .from("gratitude_content")
        .insert([{ user_id: id, createdAt: currentTime, item1, item2, item3 }]);

      if (error) {
        console.error("Supabase Error:", error);
        alert("Error saving data");
      } else if (data) {
        // alert("Data saved successfully");
        // refetch(); // 데이터 리로드
      }
    } catch (err) {
      console.error("Unexpected Error:", err);
      alert("An unexpected error occurred.");
    } finally {
      setGLoading(false); // 저장 작업 종료 후 로딩 상태 해제
      refetch();
      onOpen("RewardedAd", 5);
    }
  };

  if (loading) {
    return (
      <View className="w-full h-full flex-row justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View className="w-full h-full flex-row justify-center">
      <View className="w-full">
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          extraScrollHeight={80} // 키보드와 인풋 사이의 간격을 설정
          enableAutomaticScroll={true} // 자동 스크롤을 활성화
          keyboardOpeningTime={100}
        >
          <ScrollView>
            <View className="w-full h-[200px] mt-[60px] flex-1 justify-center items-center">
              <ImageBackground
                source={require("@/assets/images/icons/note-icon.png")}
                className="w-full h-full flex justify-center items-center"
                resizeMode="contain"
                style={{ borderRadius: 20 }}
              />
            </View>

            {!hasTodayEntry ? (
              <View className="mb-[30px]">
                <Text className="text-[16px] font-[WantedSB] mt-[55px]">
                  What are you grateful for today?
                </Text>
                <View className="h-[220px] mt-[30px] flex">
                  <GratitudeItem
                    item1={item1}
                    item2={item2}
                    item3={item3}
                    setItem1={setItem1}
                    setItem2={setItem2}
                    setItem3={setItem3}
                  />
                </View>
              </View>
            ) : (
              <View className="w-full h-fit">
                <Text className="text-[24px] font-[WantedSB] mt-[55px]">
                  Today, you thanked for
                </Text>
                <View className="mt-[30px] flex gap-6">
                  <Text className="text-[20px] font-[WantedM]">{item1}</Text>
                  <Text className="text-[20px] font-[WantedM]">{item2}</Text>
                  <Text className="text-[20px] font-[WantedM]">{item3}</Text>
                </View>
                <View className="h-[60px]"></View>
              </View>
            )}
          </ScrollView>
        </KeyboardAwareScrollView>
        {!hasTodayEntry && (
          <View className="w-full h-[50px] mt-[35px] fixed bottom-[18%]">
            <CustomButton
              title={gLoading ? "Loading" : "Save"}
              titleSize={18}
              backgroundColor="yomGreen"
              activeBackgroundColor="yomDarkGreen"
              textColor="yomWhite"
              onPress={
                gLoading
                  ? () => {}
                  : () => {
                      handleSave();
                    }
              }
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default GratitudeContent;
