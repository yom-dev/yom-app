import { View, FlatList } from "react-native";
import React from "react";
import BookList from "./Components/BookList";
import { OldTestmentBooks } from "./Constants/OldTestmentBooks";
import {
  BibleReadingContentType,
  Testament,
} from "@/shared/types/BibleReadingContentType";
interface OldTestmentProps {
  data: Testament;
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
  const bookData = OldTestmentBooks;

  return (
    <View className="mt-[15px]">
      <FlatList
        data={bookData}
        renderItem={({ item }) => (
          <View className="mb-[18px]">
            <BookList title={item.title} bookData={item.books} />
          </View>
        )}
        keyExtractor={(item) => item.title}
        ListFooterComponent={<View className="w-full h-[180px]" />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default OldTestment;
