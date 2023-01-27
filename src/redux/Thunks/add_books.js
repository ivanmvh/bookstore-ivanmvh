import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBook } from '../books/books';
import API_BOOKS_URL from '../books/api-books-url';

const POST_BOOK = 'books/POST_BOOK';

const addBookAsync = createAsyncThunk(POST_BOOK, async (book, thunkAPI) => {
  const response = await fetch(`${API_BOOKS_URL}`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseText = await response.text();

  thunkAPI.dispatch(addBook(book));
  return responseText;
});

export default addBookAsync;
