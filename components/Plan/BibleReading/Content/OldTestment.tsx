import { View, FlatList, Alert } from "react-native";
import React from "react";
import OldBookList from "@/components/Plan/BibleReading/Content/Components/OldTestament/OldBookList";
import { OldTestamentBooks } from "./Constants/OldTestmentBooks";
import { Section } from "@/shared/types/BibleReadingContentType";
import { useBibleStore } from "@/shared/store/useBibleStore";
import { useOldTestamentStore } from "@/shared/store/BibleReading/useOldTestamentStore";
import CustomButton from "@/components/Shared/Button/CustomButton";
import updateNewTestamentReading from "@/utils/BibleReading/updateNewTestamentReading";
import updateOldTestamentReading from "@/utils/BibleReading/updateOldTestamentReading";

interface OldTestmentProps {
  data: Section[] | undefined;
  loading: boolean;
  refetch: () => void;
  error: string | null;
  planName: string;
}

const OldTestment: React.FC<OldTestmentProps> = ({
  data,
  loading,
  refetch,
  error,
  planName,
}) => {
  const bookData = useOldTestamentStore((state) => state.OldTestamentBooks);

  const { newData, newLoading, newError, newRefetch } =
    updateNewTestamentReading(planName);

  const { oldData, oldLoading, oldError, oldRefetch } =
    updateOldTestamentReading(planName);

  const handleButtonClick = async () => {
    const isNewSuccess = await newRefetch();
    const isOldSuccess = await oldRefetch();

    if (isNewSuccess && isOldSuccess) {
      // 둘 다 성공하면 성공 메시지 표시
      Alert.alert("Success", "Reading saved successfully.");
    } else {
      // 둘 중 하나라도 실패하면 에러 메시지 표시
      Alert.alert(
        "Error",
        "An error occurred while saving reading. Please try again."
      );
    }
  };

  return (
    <View className="mt-[15px] ">
      <FlatList
        data={bookData}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 18 }}>
            <OldBookList title={item.title} bookData={item.books} />
          </View>
        )}
        keyExtractor={(item) => item.title}
        ListFooterComponent={<View className="w-full h-[230px]" />}
        showsVerticalScrollIndicator={false}
      />
      <View className="w-full h-[42px] absolute top-[65%]">
        <CustomButton
          title="Save Reading"
          titleSize={16}
          backgroundColor={"bibleBrown"}
          activeBackgroundColor={"bibleBrown"}
          textColor={"yomWhite"}
          onPress={() => {
            handleButtonClick();
          }}
        />
      </View>
    </View>
  );
};

export default OldTestment;
