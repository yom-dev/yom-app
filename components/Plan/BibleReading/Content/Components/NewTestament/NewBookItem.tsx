import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import NewTestamentBookModal from "./NewTestamentBookModal";

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

const NewBookItem: React.FC<BookItemProps> = ({
  abvTitle,
  title,
  inProgress,
  finished,
  bookData,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  return (
    <>
      {finished ? (
        <TouchableOpacity
          onPress={handleOpenModal}
          className="w-[80px] h-[50px] flex items-center justify-center bg-bibleBrown rounded-md"
        >
          <Text className="font-[WantedR] text-[16px]">{abvTitle}</Text>
        </TouchableOpacity>
      ) : inProgress ? (
        <TouchableOpacity
          onPress={handleOpenModal}
          className="w-[80px] h-[50px] flex items-center justify-center bg-bibleLightBrown rounded-md"
        >
          <Text className="font-[WantedR] text-[16px]">{abvTitle}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={handleOpenModal}
          className="w-[80px] h-[50px] flex items-center justify-center bg-bibleIvory rounded-md"
        >
          <Text className="font-[WantedR] text-[16px]">{abvTitle}</Text>
        </TouchableOpacity>
      )}

      <NewTestamentBookModal
        isVisible={modalVisible}
        onClose={handleCloseModal}
        title={title}
        bookData={bookData}
      />
    </>
  );
};

export default NewBookItem;
