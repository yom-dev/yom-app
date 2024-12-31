import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

interface ChapterItemProps {
  title: number;
  finished?: boolean;
  onClick: () => void;
}

const ChapterItem: React.FC<ChapterItemProps> = ({
  title,
  finished,
  onClick,
}) => {
  return (
    <>
      {finished ? (
        <TouchableOpacity
          onPress={onClick}
          className="w-[70px] h-[50px] flex items-center justify-center bg-bibleBrown rounded-md"
        >
          <Text className="font-[WantedM] text-[16px]">{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onClick}
          className="w-[70px] h-[50px] flex items-center justify-center bg-bibleIvory rounded-md"
        >
          <Text className="font-[WantedR] text-[16px]">{title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default ChapterItem;
