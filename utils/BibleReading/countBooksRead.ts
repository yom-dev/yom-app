import { Section } from "../../shared/types/BibleReadingContentType";

const countBooksRead = (
  data: Section[]
): {
  completedBooks: number;
  totalBooks: number;
} => {
  let totalBooks = 0;
  let completedBooks = 0;

  data.forEach((section) => {
    section.books.forEach((book) => {
      totalBooks += 1; // 총 책 개수 증가
      if (book.finished) {
        completedBooks += 1; // 완료된 책 개수 증가
      }
    });
  });

  return {
    completedBooks,
    totalBooks,
  };
};

export default countBooksRead;
