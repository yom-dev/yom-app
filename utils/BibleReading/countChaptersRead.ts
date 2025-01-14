import { Section } from "../../shared/types/BibleReadingContentType";

const countChaptersRead = (
  data: Section[]
): {
  completedChapters: number;
  totalChapters: number;
  completionPercentage: number;
} => {
  // 총 챕터와 완료된 챕터를 계산
  let totalChapters = 0;
  let completedChapters = 0;

  data.forEach((section) => {
    section.books.forEach((book) => {
      totalChapters += book.chapters.length; // 모든 챕터의 수
      completedChapters += book.chapters.filter(
        (chapter) => chapter.completed
      ).length; // 완료된 챕터 수
    });
  });

  // 퍼센트 계산 (소수점 0자리로 고정, 숫자로 변환)
  const completionPercentage =
    totalChapters > 0
      ? Number(((completedChapters / totalChapters) * 100).toFixed(0))
      : 0;

  return {
    completedChapters,
    totalChapters,
    completionPercentage,
  };
};

export default countChaptersRead;
