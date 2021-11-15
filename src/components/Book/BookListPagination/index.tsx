import React from "react";
import useStyles from "../../../hooks/useStyle";
import type Pagination from "../../../models/Pagination";

import "./style.css";

interface BookListPaginationItemProps {
  children: React.ReactNode;
}

const BookListPaginationItem = ({ children }: BookListPaginationItemProps) => (
  <li className="BookListPagination__item">{children}</li>
);

const MAX_PAGINATION_STEP = 11;
const MAX_PAGINATION_STEP_BETWEEN = Math.floor(MAX_PAGINATION_STEP / 2);

const BookListPagination = ({
  pagination,
  onNextPage,
}: {
  pagination: Pagination;
  onNextPage: (page: number) => void;
}) => {
  const { concat } = useStyles();

  const handleClick =
    (page: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      onNextPage(page);
    };
  const handlePreviousClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onNextPage(pagination.currentPage - 1);
  };

  const handleNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onNextPage(pagination.currentPage + 1);
  };

  const isActive = (page: number) => pagination.currentPage === page;

  const pages = [...Array(MAX_PAGINATION_STEP)];

  return (
    <ul className="BookListPagination">
      <BookListPaginationItem>
        <button
          className="BookListPagination__item__button"
          disabled={pagination.isFirstPage}
          onClick={handlePreviousClick}
        >
          Previous
        </button>
      </BookListPaginationItem>
      {pages.map((_, i) => {
        const page = i + pagination.currentPage - MAX_PAGINATION_STEP_BETWEEN;
        const isButtonActive = isActive(page);

        if (page <= 0) {
          return null;
        }

        if (page > pagination.pages) {
          return null;
        }

        return (
          <BookListPaginationItem key={pagination.renderPageKey(i)}>
            <button
              disabled={isButtonActive}
              className={concat(
                "BookListPagination__item__button",
                isButtonActive && "BookListPagination__item__button--active"
              )}
              onClick={handleClick(page)}
            >
              {page}
            </button>
          </BookListPaginationItem>
        );
      })}
      <BookListPaginationItem>
        <button
          className="BookListPagination__item__button"
          disabled={pagination.isLastPage}
          onClick={handleNextClick}
        >
          Next
        </button>
      </BookListPaginationItem>
    </ul>
  );
};

export default BookListPagination;
