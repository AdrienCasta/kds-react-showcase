import * as React from "react";
import Book from "../../../models/Book";
import BookListItem from "../BookListItem";
import "./style.css";

interface BookListProps {
  books: Book[];
}
const BookList = ({ books }: BookListProps) => {
  return (
    <div className="bookList">
      {books?.map((book) => (
        <div className="bookListItem" key={book.key}>
          <BookListItem book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
