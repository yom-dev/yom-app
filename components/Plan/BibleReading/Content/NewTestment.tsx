import { View, FlatList } from "react-native";
import React, { useEffect } from "react";
import BookList from "./Components/BookList";
import { NewTestmentBooks } from "./Constants/NewTestmentBooks";
import {
  BibleReadingContentType,
  Testament,
} from "@/shared/types/BibleReadingContentType";

interface NewTestmentProps {
  data: Testament | undefined;
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
  const bookData = NewTestmentBooks;
  useEffect(() => {
    console.log(data);
  }, []);

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

export default NewTestment;
