import { View, Text, FlatList } from "react-native";
import BookItem from "./BookItem";
import React from "react";

interface BookListProps {
  title: string;
  bookData: string[];
}

const BookList: React.FC<BookListProps> = ({ title, bookData }) => {
  return (
    <View className="w-full h-fit">
      <Text className="text-[22px] font-[WantedR] mb-[12px]">{title}</Text>
      <FlatList
        scrollEnabled={false}
        className="w-full "
        data={bookData}
        renderItem={({ item }) => (
          <View className="mb-[15px]">
            <BookItem title={item} inProgress={false} />
          </View>
        )}
        keyExtractor={(item) => item}
        numColumns={4} // 각 행에 2개의 아이템 렌더링
        columnWrapperStyle={{
          justifyContent: "space-between",
        }} // 아이템 정렬
      />
    </View>
  );
};

export default BookList;
