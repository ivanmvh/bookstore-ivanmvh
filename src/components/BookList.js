import React from 'react';
import Book from './Book';

class BookList extends React.PureComponent {
  render() {
    const bookArray = [
      { key: 1, title: 'First Book', author: 'Author 1' },
      // { key: 2, title: 'Second Book', author: 'Author 1' },
      // { key: 3, title: 'Third Book', author: 'Author 1' },
    ];
    return (
      <ul className="booksList">
        {bookArray.map((book) => <Book key={book.key} title={book.title} author={book.author} />)}
      </ul>
    );
  }
}

export default BookList;
