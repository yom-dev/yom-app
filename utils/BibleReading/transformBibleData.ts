import {
  BibleReadingContentType,
  Testament,
} from "@/shared/types/BibleReadingContentType";

type Chapter = { chapter: string; read: boolean };
type TransformedBook = { title: string; chapters: Chapter[] };

export const transformBibleData = (
  testamentData: Testament
): TransformedBook[] => {
  return Object.keys(testamentData).map((bookName) => {
    const book = testamentData[bookName];

    // chapters 배열을 원하는 형식으로 변환
    const transformedChapters = book.chapters.map((chapter) => {
      const chapterNumber = Object.keys(chapter)[0]; // 챕터 번호 추출
      return { chapter: chapterNumber, read: chapter[chapterNumber] };
    });

    return {
      title: bookName,
      chapters: transformedChapters,
    };
  });
};
