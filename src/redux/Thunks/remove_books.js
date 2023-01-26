import { createAsyncThunk } from '@reduxjs/toolkit';
import API_BOOKS_URL from '../books/api-books-url';
import { removeBook } from '../books/books';

const DELETE_BOOK = 'books/DELETE_BOOK';

const removeBookAsync = createAsyncThunk(DELETE_BOOK, async (id, thunkAPI) => {
  const response = await fetch(`${API_BOOKS_URL}${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJSON = await response.text();
  thunkAPI.dispatch(removeBook(id));
  return responseJSON;
});

export default removeBookAsync;
