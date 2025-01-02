import { View, FlatList } from "react-native";
import React from "react";
import OldBookList from "@/components/Plan/BibleReading/Content/Components/OldTestament/OldBookList";
import { OldTestamentBooks } from "./Constants/OldTestmentBooks";
import { Section } from "@/shared/types/BibleReadingContentType";
import { useBibleStore } from "@/shared/store/useBibleStore";
import { useOldTestamentStore } from "@/shared/store/BibleReading/useOldTestamentStore";
import CustomButton from "@/components/Shared/Button/CustomButton";

interface OldTestmentProps {
  data: Section[] | undefined;
  loading: boolean;
  refetch: () => void;
  error: string | null;
}

const OldTestment: React.FC<OldTestmentProps> = ({
  data,
  loading,
  refetch,
  error,
}) => {
  const bookData = useOldTestamentStore((state) => state.OldTestamentBooks);

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
      <View className="w-full h-[40px] absolute top-[73%]">
        <CustomButton
          title="Save Reading"
          titleSize={16}
          backgroundColor={"bibleBrown"}
          activeBackgroundColor={"bibleBrown"}
          textColor={"yomWhite"}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default OldTestment;
