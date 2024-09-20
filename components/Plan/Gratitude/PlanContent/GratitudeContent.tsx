// GratitudeContent.tsx
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import CustomButton from "@/components/Shared/Button/CustomButton";
import GratitudeItem from "./GratitudeItem";
import { supabase } from "@/utils/supabase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GratitudeContentType } from "@/shared/types/GratitudeContentType";
import { useGetUserId } from "@/hooks/useGetUserId";

interface GratitudeContentProps {
  data: GratitudeContentType[] | null;
  refetch: () => void;
}

const GratitudeContent = ({ data, refetch }: GratitudeContentProps) => {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");
  const [hasTodayEntry, setHasTodayEntry] = useState(false);
  const currentTime = new Date();
  const { data: id } = useGetUserId();

  // 날짜 형식을 'YYYY-MM-DD'로 변환하는 함수
  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  // 현재 날짜를 'YYYY-MM-DD' 형식으로 포맷팅
  const todayDate = formatDate(currentTime);

  useEffect(() => {
    // 받아온 데이터 중에서 오늘 날짜에 해당하는 데이터가 있는지 확인
    const todayEntry = data?.find(
      (entry) => entry && formatDate(new Date(entry.createdAt)) === todayDate
    );

    // 오늘 데이터가 있으면 해당 내용을 입력 필드에 설정
    if (todayEntry) {
      setItem1(todayEntry.item1);
      setItem2(todayEntry.item2);
      setItem3(todayEntry.item3);
      setHasTodayEntry(true); // 오늘 데이터가 있음을 표시
    }
  }, [data, todayDate]);

  const handleSave = async () => {
    if (hasTodayEntry) {
      alert("You have already thanked today.");
      return;
    }

    const { data, error } = await supabase
      .from("gratitudeContent")
      .insert([{ id: id, createdAt: currentTime, item1, item2, item3 }])
      .select();

    if (error) {
      alert("Error saving data");
      console.log("Supabase Error:", error);
    }
    if (data) {
      alert("Data saved successfully");
      refetch(); // 데이터 업로드 후 데이터 다시 가져오기
    }
  };

  return (
    <View className="w-full h-full flex-row justify-center">
      <View className="w-full">
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          extraScrollHeight={30}
          keyboardOpeningTime={100}
        >
          <View className="w-full h-[200px] mt-[60px] flex-1 justify-center items-center">
            <ImageBackground
              source={require("@/assets/images/icons/note-icon.png")}
              className="w-full h-full flex justify-center items-center"
              resizeMode="contain"
              style={{ borderRadius: 20 }}
            />
          </View>
          <View>
            <Text className="text-[16px] font-[WantedSB] mt-[55px]">
              What are you grateful for today?
            </Text>
          </View>
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
        </KeyboardAwareScrollView>
        <View className="w-full h-[45px] mt-[35px] fixed bottom-20">
          <CustomButton
            title={hasTodayEntry ? "You've thanked today." : "Save"}
            titleSize={18}
            backgroundColor="yomGreen"
            activeBackgroundColor="yomDarkGreen"
            textColor="yomWhite"
            onPress={handleSave}
          />
        </View>
      </View>
    </View>
  );
};

export default GratitudeContent;
