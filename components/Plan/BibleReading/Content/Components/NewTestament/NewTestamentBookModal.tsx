import React, { useState, useReducer, useEffect } from "react";
import { View, Text, Modal, FlatList, Pressable } from "react-native";
import ChapterItem from "../ChapterItem";
import { useNewTestamentStore } from "@/shared/store/BibleReading/useNewTestamentStore";

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

interface NewTestamentModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  bookData?: Book[];
}

const NewTestamentBookModal: React.FC<NewTestamentModalProps> = ({
  isVisible,
  onClose,
  title,
  bookData,
}) => {
  // 초기 챕터 데이터
  const matchingBook = bookData?.find((book) => book.bookName === title);
  const zustandBookData = useNewTestamentStore(
    (state) => state.NewTestamentBooks
  );
  const updateChapter = useNewTestamentStore(
    (state) => state.updateChapterStatus
  );

  const handleOnClick = (data: Chapter) => {
    console.log("clicked");
    // data.completed = !data.completed;
    // console.log(data);
  };

  if (!matchingBook) {
    return (
      <Modal
        visible={isVisible}
        presentationStyle="pageSheet"
        animationType="slide"
        onRequestClose={onClose}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Book not found.</Text>
        </View>
      </Modal>
    );
  }

  return (
    <Modal
      visible={isVisible}
      presentationStyle="pageSheet"
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="w-full h-full flex items-center">
        <View className="w-[90%] h-full">
          <View className="w-full h-[70px] flex justify-center">
            <View className="w-full h-[30px] flex-row justify-between items-center ">
              <View className="w-[50px] bg-red-600"></View>
              <Text className="font-[WantedM] text-[20px]">{title}</Text>
              <Pressable
                onPress={onClose}
                className="w-[50px] h-full justify-center "
              >
                <Text className="font-[WantedR] text-[15px] text-blue-500">
                  Done
                </Text>
              </Pressable>
            </View>
          </View>
          <View className="w-full h-full">
            <FlatList
              scrollEnabled={true}
              data={matchingBook?.chapters}
              renderItem={({ item }) => {
                return (
                  <View className="mb-[15px]">
                    <ChapterItem
                      title={item.chapterNumber}
                      finished={item.completed}
                      onClick={() =>
                        updateChapter(
                          matchingBook.bookName,
                          item.chapterNumber,
                          !item.completed
                        )
                      }
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

export default NewTestamentBookModal;
