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
  OldTestamentBooks: Section[];
  setOldTestamentBooks: (data: Section[]) => void; // 메서드 타입 추가

  updateChapterStatus: (
    bookName: string,
    chapterNumber: number,
    completed: boolean
  ) => void;
};

// Zustand 스토어 생성
export const useOldTestamentStore = create<StoreState>((set) => ({
  OldTestamentBooks: [],
  setOldTestamentBooks: (data: Section[]) =>
    set({
      OldTestamentBooks: data.map((section) => ({
        ...section,
        books: section.books.map((book) => {
          const hasInProgress = book.chapters.some(
            (chapter) => chapter.completed === true
          );
          const isFinished = book.chapters.every(
            (chapter) => chapter.completed === true
          );

          return {
            ...book,
            inProgress: hasInProgress,
            finished: isFinished,
          };
        }),
      })),
    }),

  updateChapterStatus: (
    bookName: string,
    chapterNumber: number,
    completed: boolean
  ) =>
    set((state) => {
      const newState = state.OldTestamentBooks.map((section) => ({
        ...section,
        books: section.books.map((book) => {
          if (book.bookName === bookName) {
            const updatedChapters = book.chapters.map((chapter) =>
              chapter.chapterNumber === chapterNumber
                ? { ...chapter, completed }
                : chapter
            );

            const hasInProgress = updatedChapters.some(
              (chapter) => chapter.completed === true
            );
            const isFinished = updatedChapters.every(
              (chapter) => chapter.completed === true
            );

            return {
              ...book,
              chapters: updatedChapters,
              inProgress: hasInProgress,
              finished: isFinished,
            };
          }
          return book;
        }),
      }));
      return { OldTestamentBooks: newState };
    }),
}));
