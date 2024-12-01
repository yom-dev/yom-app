import { View, FlatList } from "react-native";
import React from "react";
import BookList from "./Components/BookList";

const NewTestment = () => {
  const bookData = [
    {
      title: "The Gospels",
      books: ["Matt", "Mark", "Luke", "John"],
    },
    {
      title: "History",
      books: ["Acts"],
    },
    {
      title: "Paul's Epistles",
      books: [
        "Rom",
        "1Cor",
        "2Cor",
        "Gal",
        "Eph",
        "Phil",
        "Col",
        "1Thess",
        "2Thess",
        "1Tim",
        "2Tim",
        "Titus",
        "Philem",
      ],
    },
    {
      title: "General Epistles",
      books: [
        "Heb",
        "James",
        "1Pet",
        "2Pet",
        "1John",
        "2John",
        "3John",
        "Jude",
      ],
    },
    {
      title: "Prophecy",
      books: ["Rev"],
    },
  ];

  return (
    <View className="mt-[15px]">
      <FlatList
        data={bookData}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 18 }}>
            <BookList title={item.title} bookData={item.books} />
          </View>
        )}
        keyExtractor={(item) => item.title}
        ListFooterComponent={<View style={{ width: "100%", height: 180 }} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NewTestment;
