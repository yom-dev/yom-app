// BookModal.tsx
import React from "react";
import { Modal, View, Text, FlatList } from "react-native";
import ChapterItem from "./ChapterItem";
import { useBibleStore } from "./path/to/your/store"; // 스토어 위치에 맞게 경로를 수정해주세요

interface BookModalProps {
  isVisible: boolean;
  onClose: () => void;
  bookName: string;
}

const BookModal: React.FC<BookModalProps> = ({
  isVisible,
  onClose,
  bookName,
}) => {
  const { NewTestamentBooks, updateChapterStatus } = useBibleStore();
  const matchingBook = NewTestamentBooks.flatMap(
    (section) => section.books
  ).find((book) => book.bookName === bookName);

  return (
    <Modal
      visible={isVisible}
      presentationStyle="pageSheet"
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{bookName}</Text>
        <FlatList
          data={matchingBook?.chapters}
          renderItem={({ item }) => (
            <ChapterItem
              title={item.chapterNumber}
              finished={item.completed}
              onClick={() =>
                updateChapterStatus(
                  matchingBook.bookName,
                  item.chapterNumber,
                  !item.completed
                )
              }
            />
          )}
          keyExtractor={(item) => item.chapterNumber.toString()}
        />
      </View>
    </Modal>
  );
};

export default BookModal;
