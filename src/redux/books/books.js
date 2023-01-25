import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

const uniqueKey = uuidv4();

const initialState = [
  { key: uniqueKey + 1, title: 'It works', author: 'first' },
  { key: uniqueKey + 2, title: 'First Book', author: 'Author 1' },
  { key: uniqueKey + 3, title: 'Second Book', author: 'Author 2' },
  { key: uniqueKey + 4, title: 'Third Book', author: 'Author 3' },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.key !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
