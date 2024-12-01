import { View, FlatList } from "react-native";
import React from "react";
import BookList from "./Components/BookList";

const OldTestment = () => {
  const bookData = [
    {
      title: "Laws of Moses",
      books: ["Gen", "Ex", "Lev", "Num", "Deut"],
    },
    {
      title: "History",
      books: [
        "Josh",
        "Judg",
        "Ruth",
        "1Sam",
        "2Sam",
        "1Kgs",
        "2Kgs",
        "1Chr",
        "2Chr",
        "Ezra",
        "Neh",
        "Esth",
      ],
    },
    {
      title: "Poetry",
      books: ["Job", "Ps", "Prov", "Eccl", "Song"],
    },
    {
      title: "Major Prophets",
      books: ["Isa", "Jer", "Lam", "Ezek", "Dan"],
    },
    {
      title: "Minor Prophets",
      books: [
        "Hos",
        "Joel",
        "Amos",
        "Obad",
        "Jonah",
        "Mic",
        "Nah",
        "Hab",
        "Zeph",
        "Hag",
        "Zech",
        "Mal",
      ],
    },
  ];

  return (
    <View className="mt-[30px]">
      <FlatList
        data={bookData}
        renderItem={({ item }) => (
          <View className="mb-[18px]">
            <BookList title={item.title} bookData={item.books} />
          </View>
        )}
        keyExtractor={(item) => item.title}
        ListFooterComponent={<View className="w-full h-[50px]" />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default OldTestment;
