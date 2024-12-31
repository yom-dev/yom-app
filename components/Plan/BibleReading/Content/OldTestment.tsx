import { View, FlatList } from "react-native";
import React from "react";
import BookList from "./Components/BookList";
import { OldTestamentBooks } from "./Constants/OldTestmentBooks";
import {
  BibleReadingContentType,
  Testament,
} from "@/shared/types/BibleReadingContentType";
interface OldTestmentProps {
  data: Testament | undefined;
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
  const bookData = OldTestamentBooks;

  return (
    <View className="mt-[15px]">
      <FlatList
        data={bookData}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 18 }}>
            <BookList title={item.title} bookData={item.books} />
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
