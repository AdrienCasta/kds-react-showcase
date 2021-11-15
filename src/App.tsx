import React from "react";
import "./App.css";
import BookList from "./components/Book/BookList";
import BookListPagination from "./components/Book/BookListPagination";
import { useLazyGetBooksQuery } from "./services/book";

function App() {
  const [trigger, { data }] = useLazyGetBooksQuery();

  React.useEffect(() => {
    trigger("1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextPage = (page: number) => trigger(`${page}`);

  if (!data?.books) {
    return null;
  }

  return (
    <div className="App">
      <BookList books={data.books} />
      <div className="App__bookPagination">
        <BookListPagination
          pagination={data.pagination}
          onNextPage={handleNextPage}
        />
      </div>
    </div>
  );
}

export default App;
