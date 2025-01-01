import React, { useState, useReducer, useEffect } from "react";
import { View, Text, Modal, FlatList } from "react-native";
import ChapterItem from "./ChapterItem";
import { useBibleStore } from "@/shared/store/useBibleStore";

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
  bookData?: Book[];
}

const BookModal: React.FC<BookModalProps> = ({
  isVisible,
  onClose,
  title,
  bookData,
}) => {
  const initialState = bookData;
  // 초기 챕터 데이터
  const matchingBook = bookData?.find((book) => book.bookName === title);
  const zustandBookData = useBibleStore((state) => state.NewTestamentBooks);
  const updateChapter = useBibleStore((state) => state.updateChapterStatus);

  const handleOnClick = (data: Chapter) => {
    console.log("clicked");
    // data.completed = !data.completed;
    // console.log(data);
  };

  const [stateBook, setStateBook] = useState(initialState);

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
          <View className="flex w-full h-[70px] justify-center items-center">
            <Text className="font-[WantedM] text-[18px]">{title}</Text>
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

export default BookModal;
