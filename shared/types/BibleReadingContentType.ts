export type BookChapter = {
  [key: string]: boolean;
};

export type BibleBook = {
  bookName: string;
  chapters: BookChapter[];
};

export type Testament = {
  [key: string]: BibleBook;
};

export type BibleReadingContentType = {
  id: number;
  user_id: string;
  created_at: Date;
  oldTestament: Testament; // Changed from 'oldTestment' to 'oldTestament'
  newTestament: Testament; // Changed from 'newTestment' to 'newTestament'
  planName: string;
};
