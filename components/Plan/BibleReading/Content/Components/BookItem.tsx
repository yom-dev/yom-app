import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import BookModal from "./BookModal";

interface BookItemProps {
  abvTitle: string;
  title: string;
  inProgress?: boolean;
  finished?: boolean;
}

const BookItem: React.FC<BookItemProps> = ({
  abvTitle,
  inProgress,
  finished,
  title,
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
          <Text className="font-[WantedM] text-[16px]">{abvTitle}</Text>
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
      <BookModal
        isVisible={modalVisible}
        onClose={handleCloseModal}
        title={title}
      />
    </>
  );
};

export default BookItem;
