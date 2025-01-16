import { View, FlatList, Alert } from "react-native";
import React, { useEffect } from "react";
import NewBookList from "@/components/Plan/BibleReading/Content/Components/NewTestament/NewBookList";
import { NewTestmentBooks } from "./Constants/NewTestmentBooks";
import { Section } from "@/shared/types/BibleReadingContentType";
import { useNewTestamentStore } from "@/shared/store/BibleReading/useNewTestamentStore";
import CustomButton from "@/components/Shared/Button/CustomButton";
import updateNewTestamentReading from "@/utils/BibleReading/updateNewTestamentReading";
import updateOldTestamentReading from "@/utils/BibleReading/updateOldTestamentReading";

interface NewTestmentProps {
  data: Section[] | undefined;
  loading: boolean;
  refetch: () => void;
  error: string | null;
  planName: string;
}

const NewTestment: React.FC<NewTestmentProps> = ({ planName }) => {
  const bookData = useNewTestamentStore((state) => state.NewTestamentBooks);

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
    <View className="mt-[15px]">
      <FlatList
        data={bookData}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 18 }}>
            <NewBookList title={item.title} bookData={item.books} />
          </View>
        )}
        keyExtractor={(item) => item.title}
        ListFooterComponent={<View className="w-full h-[350px]" />}
        showsVerticalScrollIndicator={false}
      />

      <View className="w-full h-[42px] absolute top-[65%]">
        <CustomButton
          title={newLoading ? "Loading..." : "Save Reading"}
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

export default NewTestment;
