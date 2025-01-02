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
  setNewTestamentBooks: (data: Section[]) => void; // 메서드 타입 추가

  updateChapterStatus: (
    bookName: string,
    chapterNumber: number,
    completed: boolean
  ) => void;
};

// Zustand 스토어 생성
export const useNewTestamentStore = create<StoreState>((set) => ({
  NewTestamentBooks: [],
  setNewTestamentBooks: (data: Section[]) => set({ NewTestamentBooks: data }),
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
