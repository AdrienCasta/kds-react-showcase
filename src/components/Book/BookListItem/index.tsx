import * as React from "react";
import Book from "../../../models/Book";
import "./style.css";

const renderTag = (tag: string) => (
  <li className="BookListItem__tagListItem">{tag}</li>
);
interface BookListItemProps {
  book: Book;
}
const BookListItem = ({ book }: BookListItemProps) => {
  return (
    <article className="BookListItem">
      <div>
        <h2 className="BookListItem__title">{book.title}</h2>
        <img className="BookListItem__cover" src={book.cover} alt="" />
        <h3 className="BookListItem__author">
          {book.authors.map((a) => a.name)}
        </h3>
      </div>
      <ul className="BookListItem__tagList">{book.tags.map(renderTag)}</ul>
    </article>
  );
};

export default BookListItem;
