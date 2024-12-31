import React, { useState } from "react";
import { View, Text, Modal, FlatList } from "react-native";
import ChapterItem from "./ChapterItem";

interface Book {
  bookName: string;
  chapters: Chapter[];
  finished: boolean;
  inProgress: boolean;
  abbreviation: string;
}
interface Chapter {
  chapterNumber: number;
  completed: boolean;
}

interface BookModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  bookData: Book;
}

interface ChapterMap {
  [key: string]: boolean;
}

const BookModal: React.FC<BookModalProps> = ({
  isVisible,
  onClose,
  title,
  bookData,
}) => {
  // 초기 챕터 데이터

  return (
    <Modal
      visible={isVisible}
      presentationStyle="pageSheet"
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="w-full h-full flex items-center">
        <View className="w-[90%] h-full">
          <View className="flex w-full h-[70px] justify-center items-center">
            <Text className="font-[WantedM] text-[18px]">{title}</Text>
          </View>
          <View className="w-full h-full">
            <FlatList
              scrollEnabled={true}
              data={bookData.chapters}
              renderItem={({ item }) => {
                return (
                  <View className="mb-[15px]">
                    <ChapterItem
                      title={item.chapterNumber}
                      finished={item.completed}
                      onClick={() => {}}
                    />
                  </View>
                );
              }}
              // keyExtractor={(item, index) => Object.keys(item)[0]}
              numColumns={4}
              columnWrapperStyle={{ justifyContent: "space-around" }}
              ListFooterComponent={
                <View style={{ width: "100%", height: 100 }} />
              }
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BookModal;
