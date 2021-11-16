import React from "react";
import "./App.css";
import BookList from "./components/Book/BookList";
import BookListPagination from "./components/Book/BookListPagination";
import useStyles from "./hooks/useStyle";
import Pagination from "./models/Pagination";
import { useLazyGetBookQuery, useLazyGetBooksQuery } from "./services/book";

function App() {
  const [isAsideVisible, setAsideVisibility] = React.useState(false);
  const [getBooks, getBooksResponse] = useLazyGetBooksQuery();
  const [getBook, getBookResponse] = useLazyGetBookQuery();
  const { concat } = useStyles();

  const bookDetails = getBookResponse.data?.book;
  const books = getBooksResponse.data?.books;
  const pagination = getBooksResponse.data?.pagination;

  React.useEffect(() => {
    getBooks("1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setAsideVisibility(!!bookDetails);
  }, [bookDetails]);

  const handleNextPage = (page: number) => getBooks(`${page}`);
  const handleBookDetails = (page: number) => getBook(`${page}`);
  const closeBookDetails = () => {
    setAsideVisibility(false);
  };

  if (!books) {
    return null;
  }

  return (
    <div>
      <div
        onClick={closeBookDetails}
        className={concat(
          "App_bookList",
          isAsideVisible && "App_bookList--no-pointer"
        )}
      >
        <BookList books={books} onBookClick={handleBookDetails} />
        <div className="App__bookPagination">
          <BookListPagination
            pagination={pagination as Pagination}
            onNextPage={handleNextPage}
          />
        </div>
      </div>
      <aside
        className={concat(
          "App__bookDetails",
          isAsideVisible && "App__bookDetails--open"
        )}
      >
        <ul className="App__bookDetails__list">
          <li>
            <span className="App__bookDetails__title">
              {bookDetails?.title}
            </span>
          </li>
          <li>
            <img
              src={bookDetails?.cover}
              alt={bookDetails?.coverAltAttribute}
            />
          </li>
          <li>
            <span>Authors : </span>
            <span>{bookDetails?.authorsEpitaph}</span>
          </li>
          <li>
            <span>Translated in : </span>
            <span>{bookDetails?.languages.map((language) => language)}</span>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default App;
