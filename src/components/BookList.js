import { useSelector, useDispatch } from 'react-redux';
import BookCard from './BookCard';
import AddForm from './AddForm';
import removeBookAsync from '../redux/Thunks/remove_books';

const BookList = () => {
  const booksArray = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(removeBookAsync(id));
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
      <AddForm />
    </div>
  );
};

export default BookList;
