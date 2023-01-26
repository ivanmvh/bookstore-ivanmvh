import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API_BOOKS_URL from './api-books-url';

const ADD_BOOK = 'bookstore-ivanmvh/books/ADD_BOOK ';
const REMOVE_BOOK = 'bookstore-ivanmvh/books/REMOVE_BOOK';

const uniqueKey = uuidv4();

const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const addBookAsync = createAsyncThunk(ADD_BOOK, async (book) => {
  const response= await fetch(`${API_BOOKS_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
  },
  body: JSON.stringify(book)
  }).then((response) => response.text())
    .then((result) => (result === 'Created' ? book : null));
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
