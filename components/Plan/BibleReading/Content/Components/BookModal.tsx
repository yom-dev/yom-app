import React, { useState } from "react";
import { View, Text, Modal, FlatList } from "react-native";
import ChapterItem from "./ChapterItem";

interface BookModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
}

interface ChapterMap {
  [key: string]: boolean;
}

const BookModal: React.FC<BookModalProps> = ({ isVisible, onClose, title }) => {
  // 초기 챕터 데이터
  const initialChapters = [
    { "1": true },
    { "2": true },
    { "3": true },
    { "4": true },
    { "5": true },
    { "6": true },
    { "7": true },
    { "8": true },
    { "9": true },
    { "10": true },
    { "11": true },
    { "12": true },
    { "13": false },
    { "14": false },
    { "15": false },
    { "16": false },
    { "17": false },
    { "18": false },
    { "19": false },
    { "20": false },
  ];

  // 로컬 상태로 챕터 데이터 관리
  const [chapters, setChapters] = useState<ChapterMap[]>(initialChapters);

  const handleChapterClick = (chapterTitle: string, inProgress: boolean) => {
    // 챕터의 inProgress 상태를 업데이트
    const updatedChapters = chapters.map((chapter) => {
      if (Object.keys(chapter)[0] === chapterTitle) {
        return { [chapterTitle]: !inProgress };
      }
      return chapter;
    });

    setChapters(updatedChapters);
  };

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
              data={chapters}
              renderItem={({ item }) => {
                const chapterTitle = Object.keys(item)[0];
                const inProgress = item[chapterTitle];
                return (
                  <View className="mb-[15px]">
                    <ChapterItem
                      title={chapterTitle}
                      inProgress={inProgress}
                      onClick={() =>
                        handleChapterClick(chapterTitle, inProgress)
                      }
                    />
                  </View>
                );
              }}
              keyExtractor={(item, index) => Object.keys(item)[0]}
              numColumns={4}
              columnWrapperStyle={{ justifyContent: "space-between" }}
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
