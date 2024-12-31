import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import BookModal from "./BookModal";

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

interface BookItemProps {
  abvTitle: string;
  title: string;
  inProgress?: boolean;
  finished?: boolean;
  bookData?: Book[];
}

const BookItem: React.FC<BookItemProps> = ({
  abvTitle,
  title,
  inProgress,
  finished,
  bookData,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  // 타이틀이 일치하는 책 데이터 찾기
  const matchingBook = bookData?.find((book) => book.bookName === title);

  return (
    <>
      <TouchableOpacity
        onPress={handleOpenModal}
        className="w-[80px] h-[50px] flex items-center justify-center bg-bibleIvory rounded-md"
      >
        <Text className="font-[WantedR] text-[16px]">{abvTitle}</Text>
      </TouchableOpacity>
      {matchingBook && (
        <BookModal
          isVisible={modalVisible}
          onClose={handleCloseModal}
          title={title}
          bookData={matchingBook}
        />
      )}
    </>
  );
};

export default BookItem;
