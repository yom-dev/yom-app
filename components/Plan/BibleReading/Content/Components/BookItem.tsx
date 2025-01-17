import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface BookItemProps {
  title: string;
  inProgress?: boolean;
}

const BookItem: React.FC<BookItemProps> = ({ title, inProgress }) => {
  return (
    <>
      {inProgress ? (
        <TouchableOpacity className="w-[80px] h-[50px] flex items-center justify-center bg-bibleBrown rounded-md">
          <Text className="font-[WantedM] text-[16px]">{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity className="w-[80px] h-[50px] flex items-center justify-center bg-bibleIvory rounded-md">
          <Text className="font-[WantedR] text-[16px]">{title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default BookItem;
