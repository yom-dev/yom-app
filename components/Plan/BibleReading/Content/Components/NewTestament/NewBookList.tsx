import { View, Text, FlatList } from "react-native";
import NewBookItem from "./NewBookItem";
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

const NewBookList: React.FC<BookListProps> = ({ title, bookData }) => {
  return (
    <View className="w-full h-fit">
      <View className="mb-[12px]">
        <Text className="text-[22px] font-[WantedR] mb-[2px]">{title}</Text>
        <View className="h-[1px] bg-gray-200"></View>
      </View>

      <FlatList
        scrollEnabled={false}
        className="w-full "
        data={bookData}
        renderItem={({ item }) => (
          <View className="mb-[15px]">
            <NewBookItem
              title={item.bookName}
              abvTitle={item.abbreviation}
              inProgress={item.inProgress}
              finished={item.finished}
              bookData={bookData}
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

export default NewBookList;
