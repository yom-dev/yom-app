import { View, FlatList } from "react-native";
import React from "react";
import OldBookList from "@/components/Plan/BibleReading/Content/Components/OldTestament/OldBookList";
import { OldTestamentBooks } from "./Constants/OldTestmentBooks";
import { Section } from "@/shared/types/BibleReadingContentType";
import { useBibleStore } from "@/shared/store/useBibleStore";
import { useOldTestamentStore } from "@/shared/store/BibleReading/useOldTestamentStore";

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
    <View className="mt-[15px]">
      <FlatList
        data={bookData}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 18 }}>
            <OldBookList title={item.title} bookData={item.books} />
          </View>
        )}
        keyExtractor={(item) => item.title}
        ListFooterComponent={<View style={{ width: "100%", height: 180 }} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default OldTestment;
