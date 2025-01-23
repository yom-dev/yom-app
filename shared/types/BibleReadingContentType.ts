export type Chapter = {
  chapterNumber: number;
  completed: boolean;
};

// Book 타입 정의
export type Book = {
  bookName: string;
  abbreviation: string;
  inProgress: boolean;
  finished: boolean;
  chapters: Chapter[];
};

// Section 타입 정의
export type Section = {
  title: string;
  books: Book[];
};

export type BibleReadingContentType = {
  id: number;
  user_id: string;
  createdAt: Date;
  planName: string;
  oldTestament: Section[];
  newTestament: Section[];
};
