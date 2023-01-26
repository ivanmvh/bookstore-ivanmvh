import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API_BOOKS_URL from './api-books-url';

const GET_BOOKS = 'books/GET_BOOKS';
const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

const uniqueKey = uuidv4();

const initialState = [
  { key: uniqueKey, title: 'It works', author: 'first' },
];

export const getBooksAsync = () => createAsyncThunk(GET_BOOKS, async () => {
  const booksArray = [];
  await fetch(`${API_BOOKS_URL}`, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
    },
  }).then((result) => {
    const obj = result.text();
    return obj;
  }).then((result) => {
    const obj = JSON.parse(result);
    Object.keys(obj).forEach((key) => {
      booksArray.push({ ...obj[key][0], item_id: key });
    });
  });
  return booksArray;
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const addBookAsync = createAsyncThunk(ADD_BOOK, async (book) => {
  const result = await fetch(`${API_BOOKS_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  }).then((response) => response.text())
    .then((result) => (result === 'Created' ? book : null));
  return result;
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const removeBookAsync = createAsyncThunk(REMOVE_BOOK, async (id) => {
  const result = await fetch(`${API_BOOKS_URL}${id}`, {
    method: 'DELETE',
    headers: {
      'content-Type': 'application/json',
    },
  }).then((response) => response.text())
    .then((result) => (result === 'The book was deleted successfully!' ? id : null));
  return result;
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
