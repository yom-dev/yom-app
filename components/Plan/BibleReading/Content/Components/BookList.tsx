import { View, Text, FlatList } from "react-native";
import BookItem from "./BookItem";
import React, { useState } from "react";

interface Chapter {
  chapterNumber: number;
  completed: boolean;
}

interface Book {
  bookName: string;
  chapters: Chapter[];
  finished: boolean;
  inProgress: boolean;
  abbreviation: string;
}

interface BookListProps {
  title: string;
  bookData: Book[];
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
            <BookItem
              title={item.bookName}
              abvTitle={item.abbreviation}
              inProgress={item.inProgress}
              finished={item.finished}
            />
          </View>
        )}
        keyExtractor={(item) => item.bookName}
        numColumns={4} // 각 행에 2개의 아이템 렌더링
        columnWrapperStyle={{
          justifyContent: "space-between",
        }} // 아이템 정렬
      />
    </View>
  );
};

export default BookList;
