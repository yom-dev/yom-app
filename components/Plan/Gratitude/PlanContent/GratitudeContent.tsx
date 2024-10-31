// GratitudeContent.tsx
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import CustomButton from "@/components/Shared/Button/CustomButton";
import GratitudeItem from "./GratitudeItem";
import { supabase } from "@/utils/Supabase/supabase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GratitudeContentType } from "@/shared/types/GratitudeContentType";
import { useGetUserId } from "@/hooks/useGetUserId";

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
  const currentTime = new Date();
  const { data: id } = useGetUserId();
  const todayDate = currentTime.toISOString().split("T")[0];

  useEffect(() => {
    const todayEntry = data?.find(
      (entry) =>
        entry &&
        new Date(entry.createdAt).toISOString().split("T")[0] === todayDate
    );

    if (todayEntry) {
      setItem1(todayEntry.item1);
      setItem2(todayEntry.item2);
      setItem3(todayEntry.item3);
      setHasTodayEntry(true);
    }
  }, [data, todayDate]);

  const handleSave = async () => {
    if (hasTodayEntry) {
      alert("You have already thanked today.");
      return;
    }

    const { data, error } = await supabase
      .from("gratitudeContent")
      .insert([{ id: id, createdAt: currentTime, item1, item2, item3 }]);

    if (error) {
      alert("Error saving data");
      console.error("Supabase Error:", error);
    } else {
      alert("Data saved successfully");
      refetch();
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
            <View className="w-full h-[220px]">
              <Text className="text-[24px] font-[WantedSB] mt-[55px]">
                Today, you thanked for
              </Text>
              <View className="mt-[30px] flex gap-6">
                <Text className="text-[20px] font-[WantedM]">{item1}</Text>

                <Text className="text-[20px] font-[WantedM]">{item2}</Text>
                <Text className="text-[20px] font-[WantedM]">{item3}</Text>
              </View>
            </View>
          )}
        </KeyboardAwareScrollView>
        {!hasTodayEntry && (
          <View className="w-full h-[45px] mt-[35px] fixed bottom-14">
            <CustomButton
              title="Save"
              titleSize={18}
              backgroundColor="yomGreen"
              activeBackgroundColor="yomDarkGreen"
              textColor="yomWhite"
              onPress={handleSave}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default GratitudeContent;
