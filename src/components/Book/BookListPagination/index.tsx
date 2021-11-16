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

const PAGINATION_STEPS = 4;

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

  const pages = [...Array(PAGINATION_STEPS)]
    .reduce<number[]>((acc, curr, i) => {
      if (acc.length >= PAGINATION_STEPS) {
        return acc;
      }
      return [
        ...acc,
        ...(pagination.currentPage - i > 0 ? [pagination.currentPage - i] : []),
        ...(pagination.currentPage + i < pagination.pages
          ? [pagination.currentPage + i + 1]
          : []),
      ];
    }, [])
    .sort((a, b) => a - b);

  return (
    <ul className="BookListPagination">
      <BookListPaginationItem>
        <button
          className={concat(
            "BookListPagination__item__button",
            "BookListPagination__item__button--navigation"
          )}
          disabled={pagination.isFirstPage}
          onClick={handlePreviousClick}
        >
          Previous
        </button>
      </BookListPaginationItem>
      {pages.map((page) => {
        const isButtonActive = isActive(page);

        return (
          <BookListPaginationItem key={pagination.renderPageKey(page)}>
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
          className={concat(
            "BookListPagination__item__button",
            "BookListPagination__item__button--navigation"
          )}
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
