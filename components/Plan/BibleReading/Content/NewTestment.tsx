import { View, FlatList } from "react-native";
import React, { useEffect } from "react";
import NewBookList from "@/components/Plan/BibleReading/Content/Components/NewTestament/NewBookList";
import { NewTestmentBooks } from "./Constants/NewTestmentBooks";
import { Section } from "@/shared/types/BibleReadingContentType";
import { useNewTestamentStore } from "@/shared/store/BibleReading/useNewTestamentStore";

interface NewTestmentProps {
  data: Section[] | undefined;
  loading: boolean;
  refetch: () => void;
  error: string | null;
}

const NewTestment: React.FC<NewTestmentProps> = ({
  data,
  loading,
  refetch,
  error,
}) => {
  const bookData = useNewTestamentStore((state) => state.NewTestamentBooks);

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
        ListFooterComponent={<View style={{ width: "100%", height: 180 }} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NewTestment;
