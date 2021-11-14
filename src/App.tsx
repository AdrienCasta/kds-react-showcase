import React from "react";
import "./App.css";
import BookList from "./components/Book/BookList";
import PaginationModel from "./models/Pagination";
import { useGetBooksQuery, useLazyGetBooksQuery } from "./services/book";

const Pagination = ({
  pagination,
  onNextPage,
}: {
  pagination: PaginationModel;
  onNextPage: (page: number) => void;
}) => {
  const handleClick =
    (page: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      onNextPage(page);
    };

  const isActive = (page: number) => pagination.currentPage === page;

  const pages = [...Array(11)];

  // const pages = [...Array(pagination.pages)].slice(0, 10);
  // const pages = [...Array(pagination.pages)].slice(...part);

  return (
    <ul>
      <li>
        <button>Previous</button>
      </li>
      {pages.map((_, i) => {
        const page = i + pagination.currentPage - 5;

        if (page <= 0) {
          return null;
        }

        if (page > pagination.pages) {
          return null;
        }

        return (
          <li key={pagination.renderPageKey(i)}>
            <button onClick={handleClick(page)}>
              {page}
              {isActive(page) && "active"}
            </button>
          </li>
        );
      })}
      <li>
        <button>Next</button>
      </li>
    </ul>
  );
};

function App() {
  const [trigger, { data }] = useLazyGetBooksQuery();

  React.useEffect(() => {
    trigger("1");
  }, []);

  const handleNextPage = (page: number) => trigger(`${page}`);

  if (!data?.books) {
    return null;
  }

  return (
    <div className="App">
      <BookList books={data.books} />
      <Pagination pagination={data.pagination} onNextPage={handleNextPage} />
    </div>
  );
}

export default App;
