import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import BookModal from "./BookModal";

interface BookItemProps {
  title: string;
  inProgress?: boolean;
}

const BookItem: React.FC<BookItemProps> = ({ title, inProgress }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  return (
    <>
      {inProgress ? (
        <TouchableOpacity
          onPress={handleOpenModal}
          className="w-[80px] h-[50px] flex items-center justify-center bg-bibleBrown rounded-md"
        >
          <Text className="font-[WantedM] text-[16px]">{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={handleOpenModal}
          className="w-[80px] h-[50px] flex items-center justify-center bg-bibleIvory rounded-md"
        >
          <Text className="font-[WantedR] text-[16px]">{title}</Text>
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
