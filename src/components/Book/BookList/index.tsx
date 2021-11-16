import * as React from "react";
import Book from "../../../models/Book";
import BookListItem from "../BookListItem";
import "./style.css";

interface BookListProps {
  books: Book[];
  onBookClick: (id: number) => void;
}
const BookList = ({ books, onBookClick }: BookListProps) => {
  const handleBookListItemClick =
    (id: Book["id"]) => (event: React.MouseEvent<HTMLDivElement>) => {
      onBookClick(id);
    };

  return (
    <div className="bookList">
      {books?.map((book) => (
        <div
          className="bookListItem"
          key={book.key}
          onClick={handleBookListItemClick(book.id)}
        >
          <BookListItem book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
