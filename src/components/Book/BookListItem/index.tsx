import * as React from "react";
import Book from "../../../models/Book";

interface BookListItemProps {
  book: Book;
}
const BookListItem = ({ book }: BookListItemProps) => {
  return (
    <article>
      <h2>{book.title}</h2>
      <h2>{book.id}</h2>
      <h3>{book.authors.map((a) => a.name)}</h3>
    </article>
  );
};

export default BookListItem;
