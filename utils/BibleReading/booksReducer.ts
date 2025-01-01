interface Chapter {
  chapterNumber: number;
  completed: boolean;
}

interface Book {
  bookName: string;
  abbreviation: string;
  inProgress: boolean;
  finished: boolean;
  chapters: Chapter[];
}

interface Section {
  title: string;
  books: Book[];
}

interface BookModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
}

interface Action {
  type: string;
  payload: {
    sectionTitle: string;
    bookName: string;
    chapterNumber: number;
  };
}
const booksReducer = (state: Section[], action: Action): Section[] => {
  switch (action.type) {
    case "TOGGLE_CHAPTER":
      return state.map((section) => {
        if (section.title === action.payload.sectionTitle) {
          return {
            ...section,
            books: section.books.map((book) => {
              if (book.bookName === action.payload.bookName) {
                const updatedChapters = book.chapters.map((chapter) =>
                  chapter.chapterNumber === action.payload.chapterNumber
                    ? { ...chapter, completed: !chapter.completed }
                    : chapter
                );

                const allCompleted = updatedChapters.every(
                  (chapter) => chapter.completed
                );
                const anyCompleted = updatedChapters.some(
                  (chapter) => chapter.completed
                );

                return {
                  ...book,
                  chapters: updatedChapters,
                  finished: allCompleted,
                  inProgress: anyCompleted && !allCompleted,
                };
              }
              return book;
            }),
          };
        }
        return section;
      });
    default:
      return state;
  }
};

export default booksReducer;
