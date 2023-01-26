import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookCard from './BookCard';
import AddForm from './AddForm';
import { addBook, removeBook, getBooks } from '../redux/books/books';

const BookList = () => {
  const booksArray = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const addNewBook = (book) => {
    dispatch(addBook(book));
  };

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="bookListContainer">
      <ul className="booksList">
        {booksArray.map((book) => (
          <BookCard
            removeBook={deleteBook}
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <AddForm addNewBook={addNewBook} />
    </div>
  );
};

export default BookList;
