import { create } from "zustand";
import React from "react";

// 챕터 타입 정의
type Chapter = {
  chapterNumber: number;
  completed: boolean;
};

// 책 타입 정의
type Book = {
  bookName: string;
  abbreviation: string;
  inProgress: boolean;
  finished: boolean;
  chapters: Chapter[];
};

// 섹션 타입 정의
type Section = {
  title: string;
  books: Book[];
};

// 스토어의 상태 타입 정의
type StoreState = {
  NewTestamentBooks: Section[];
  updateChapterStatus: (
    bookName: string,
    chapterNumber: number,
    completed: boolean
  ) => void;
};

// Zustand 스토어 생성
export const useBibleStore = create<StoreState>((set) => ({
  NewTestamentBooks: [
    {
      title: "The Gospels",
      books: [
        {
          bookName: "Matthew",
          abbreviation: "Matt",
          inProgress: false,
          finished: true,

          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
            { chapterNumber: 6, completed: false },
            { chapterNumber: 7, completed: false },
            { chapterNumber: 8, completed: false },
            { chapterNumber: 9, completed: false },
            { chapterNumber: 10, completed: false },
            { chapterNumber: 11, completed: false },
            { chapterNumber: 12, completed: false },
            { chapterNumber: 13, completed: false },
            { chapterNumber: 14, completed: false },
            { chapterNumber: 15, completed: false },
            { chapterNumber: 16, completed: false },
            { chapterNumber: 17, completed: false },
            { chapterNumber: 18, completed: false },
            { chapterNumber: 19, completed: false },
            { chapterNumber: 20, completed: false },
            { chapterNumber: 21, completed: false },
            { chapterNumber: 22, completed: false },
            { chapterNumber: 23, completed: false },
            { chapterNumber: 24, completed: false },
            { chapterNumber: 25, completed: false },
            { chapterNumber: 26, completed: false },
            { chapterNumber: 27, completed: false },
            { chapterNumber: 28, completed: false },
          ],
        },
        {
          bookName: "Mark",
          abbreviation: "Mark",
          inProgress: true,
          finished: false,

          chapters: [
            { chapterNumber: 1, completed: true },
            { chapterNumber: 2, completed: true },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
            { chapterNumber: 6, completed: false },
            { chapterNumber: 7, completed: false },
            { chapterNumber: 8, completed: false },
            { chapterNumber: 9, completed: false },
            { chapterNumber: 10, completed: false },
            { chapterNumber: 11, completed: false },
            { chapterNumber: 12, completed: false },
            { chapterNumber: 13, completed: false },
            { chapterNumber: 14, completed: false },
            { chapterNumber: 15, completed: false },
            { chapterNumber: 16, completed: false },
          ],
        },
        {
          bookName: "Luke",
          abbreviation: "Luke",
          inProgress: false,
          finished: false,

          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
            { chapterNumber: 6, completed: false },
            { chapterNumber: 7, completed: false },
            { chapterNumber: 8, completed: false },
            { chapterNumber: 9, completed: false },
            { chapterNumber: 10, completed: false },
            { chapterNumber: 11, completed: false },
            { chapterNumber: 12, completed: false },
            { chapterNumber: 13, completed: false },
            { chapterNumber: 14, completed: false },
            { chapterNumber: 15, completed: false },
            { chapterNumber: 16, completed: false },
            { chapterNumber: 17, completed: false },
            { chapterNumber: 18, completed: false },
            { chapterNumber: 19, completed: false },
            { chapterNumber: 20, completed: false },
            { chapterNumber: 21, completed: false },
            { chapterNumber: 22, completed: false },
            { chapterNumber: 23, completed: false },
            { chapterNumber: 24, completed: false },
          ],
        },
        {
          bookName: "John",
          abbreviation: "John",
          inProgress: false,
          finished: false,

          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
            { chapterNumber: 6, completed: false },
            { chapterNumber: 7, completed: false },
            { chapterNumber: 8, completed: false },
            { chapterNumber: 9, completed: false },
            { chapterNumber: 10, completed: false },
            { chapterNumber: 11, completed: false },
            { chapterNumber: 12, completed: false },
            { chapterNumber: 13, completed: false },
            { chapterNumber: 14, completed: false },
            { chapterNumber: 15, completed: false },
            { chapterNumber: 16, completed: false },
            { chapterNumber: 17, completed: false },
            { chapterNumber: 18, completed: false },
            { chapterNumber: 19, completed: false },
            { chapterNumber: 20, completed: false },
            { chapterNumber: 21, completed: false },
          ],
        },
      ],
    },
    {
      title: "History",
      books: [
        {
          bookName: "Acts",
          abbreviation: "Acts",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
            { chapterNumber: 6, completed: false },
            { chapterNumber: 7, completed: false },
            { chapterNumber: 8, completed: false },
            { chapterNumber: 9, completed: false },
            { chapterNumber: 10, completed: false },
            { chapterNumber: 11, completed: false },
            { chapterNumber: 12, completed: false },
            { chapterNumber: 13, completed: false },
            { chapterNumber: 14, completed: false },
            { chapterNumber: 15, completed: false },
            { chapterNumber: 16, completed: false },
            { chapterNumber: 17, completed: false },
            { chapterNumber: 18, completed: false },
            { chapterNumber: 19, completed: false },
            { chapterNumber: 20, completed: false },
            { chapterNumber: 21, completed: false },
            { chapterNumber: 22, completed: false },
            { chapterNumber: 23, completed: false },
            { chapterNumber: 24, completed: false },
            { chapterNumber: 25, completed: false },
            { chapterNumber: 26, completed: false },
            { chapterNumber: 27, completed: false },
            { chapterNumber: 28, completed: false },
          ],
        },
      ],
    },
    {
      title: "Paul's Epistles",
      books: [
        {
          bookName: "Romans",
          abbreviation: "Rom",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
            { chapterNumber: 6, completed: false },
            { chapterNumber: 7, completed: false },
            { chapterNumber: 8, completed: false },
            { chapterNumber: 9, completed: false },
            { chapterNumber: 10, completed: false },
            { chapterNumber: 11, completed: false },
            { chapterNumber: 12, completed: false },
            { chapterNumber: 13, completed: false },
            { chapterNumber: 14, completed: false },
            { chapterNumber: 15, completed: false },
            { chapterNumber: 16, completed: false },
          ],
        },
        {
          bookName: "1 Corinthians",
          abbreviation: "1 Cor",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
            { chapterNumber: 6, completed: false },
            { chapterNumber: 7, completed: false },
            { chapterNumber: 8, completed: false },
            { chapterNumber: 9, completed: false },
            { chapterNumber: 10, completed: false },
            { chapterNumber: 11, completed: false },
            { chapterNumber: 12, completed: false },
            { chapterNumber: 13, completed: false },
            { chapterNumber: 14, completed: false },
            { chapterNumber: 15, completed: false },
            { chapterNumber: 16, completed: false },
          ],
        },
        {
          bookName: "2 Corinthians",
          abbreviation: "2 Cor",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
            { chapterNumber: 6, completed: false },
            { chapterNumber: 7, completed: false },
            { chapterNumber: 8, completed: false },
            { chapterNumber: 9, completed: false },
            { chapterNumber: 10, completed: false },
            { chapterNumber: 11, completed: false },
            { chapterNumber: 12, completed: false },
            { chapterNumber: 13, completed: false },
          ],
        },
        {
          bookName: "Galatians",
          abbreviation: "Gal",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
            { chapterNumber: 6, completed: false },
          ],
        },
        {
          bookName: "Ephesians",
          abbreviation: "Eph",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
            { chapterNumber: 6, completed: false },
          ],
        },
        {
          bookName: "Philippians",
          abbreviation: "Phil",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
          ],
        },
        {
          bookName: "Colossians",
          abbreviation: "Col",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
          ],
        },
        {
          bookName: "1 Thessalonians",
          abbreviation: "1 Thess",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
          ],
        },
        {
          bookName: "2 Thessalonians",
          abbreviation: "2 Thess",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
          ],
        },
        {
          bookName: "1 Timothy",
          abbreviation: "1 Tim",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
            { chapterNumber: 6, completed: false },
          ],
        },
        {
          bookName: "2 Timothy",
          abbreviation: "2 Tim",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
          ],
        },
        {
          bookName: "Titus",
          abbreviation: "Titus",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
          ],
        },
        {
          bookName: "Philemon",
          abbreviation: "Philem",
          inProgress: false,
          finished: false,
          chapters: [{ chapterNumber: 1, completed: false }],
        },
      ],
    },
    {
      title: "General Epistles",
      books: [
        {
          bookName: "Hebrews",
          abbreviation: "Heb",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
            { chapterNumber: 6, completed: false },
            { chapterNumber: 7, completed: false },
            { chapterNumber: 8, completed: false },
            { chapterNumber: 9, completed: false },
            { chapterNumber: 10, completed: false },
            { chapterNumber: 11, completed: false },
            { chapterNumber: 12, completed: false },
            { chapterNumber: 13, completed: false },
          ],
        },
        {
          bookName: "James",
          abbreviation: "James",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
          ],
        },
        {
          bookName: "1 Peter",
          abbreviation: "1 Pet",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
          ],
        },
        {
          bookName: "2 Peter",
          abbreviation: "2 Pet",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
          ],
        },
        {
          bookName: "1 John",
          abbreviation: "1 John",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
          ],
        },
        {
          bookName: "2 John",
          abbreviation: "2 John",
          inProgress: false,
          finished: false,
          chapters: [{ chapterNumber: 1, completed: false }],
        },
        {
          bookName: "3 John",
          abbreviation: "3 John",
          inProgress: false,
          finished: false,
          chapters: [{ chapterNumber: 1, completed: false }],
        },
        {
          bookName: "Jude",
          abbreviation: "Jude",
          inProgress: false,
          finished: false,
          chapters: [{ chapterNumber: 1, completed: false }],
        },
      ],
    },
    {
      title: "Prophecy",

      books: [
        {
          bookName: "Revelation",
          abbreviation: "Rev",
          inProgress: false,
          finished: false,
          chapters: [
            { chapterNumber: 1, completed: false },
            { chapterNumber: 2, completed: false },
            { chapterNumber: 3, completed: false },
            { chapterNumber: 4, completed: false },
            { chapterNumber: 5, completed: false },
            { chapterNumber: 6, completed: false },
            { chapterNumber: 7, completed: false },
            { chapterNumber: 8, completed: false },
            { chapterNumber: 9, completed: false },
            { chapterNumber: 10, completed: false },
            { chapterNumber: 11, completed: false },
            { chapterNumber: 12, completed: false },
            { chapterNumber: 13, completed: false },
            { chapterNumber: 14, completed: false },
            { chapterNumber: 15, completed: false },
            { chapterNumber: 16, completed: false },
            { chapterNumber: 17, completed: false },
            { chapterNumber: 18, completed: false },
            { chapterNumber: 19, completed: false },
            { chapterNumber: 20, completed: false },
            { chapterNumber: 21, completed: false },
            { chapterNumber: 22, completed: false },
          ],
        },
      ],
    },
  ],
  updateChapterStatus: (
    bookName: string,
    chapterNumber: number,
    completed: boolean
  ) =>
    set((state) => {
      const newState = state.NewTestamentBooks.map((section) => ({
        ...section,
        books: section.books.map((book) => ({
          ...book,
          chapters:
            book.bookName === bookName
              ? book.chapters.map((chapter) =>
                  chapter.chapterNumber === chapterNumber
                    ? { ...chapter, completed }
                    : chapter
                )
              : book.chapters,
        })),
      }));
      //   console.log(JSON.stringify(newState, null, 2)); --> chapter가 변하는지 확인할 때 사용.
      return { NewTestamentBooks: newState };
    }),
}));
