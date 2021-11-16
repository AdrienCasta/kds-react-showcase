import { render, screen, fireEvent } from "@testing-library/react";
import BookListPagination from ".";
import Pagination from "../../../models/Pagination";
import GetBooksResponseMock from "../../../services/mocks/GetBooksResponseMock";

describe("BookListPagination", () => {
  test("should render well", () => {
    const pagination = new Pagination(GetBooksResponseMock);
    const onNextPage = jest.fn();
    render(
      <BookListPagination pagination={pagination} onNextPage={onNextPage} />
    );

    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
    expect(screen.getByText(/4/i)).toBeInTheDocument();
    expect(screen.queryByText(/5/i)).not.toBeInTheDocument();
  });

  test("should prevent previous click", () => {
    const pagination = new Pagination(GetBooksResponseMock);
    const onNextPage = jest.fn();
    render(
      <BookListPagination pagination={pagination} onNextPage={onNextPage} />
    );

    expect(screen.getByText(/Previous/i)).toBeDisabled();
    fireEvent.click(screen.getByText(/Previous/i));

    expect(onNextPage).not.toHaveBeenCalledWith();
  });

  test("should handle previous click", () => {
    const pagination = new Pagination({
      ...GetBooksResponseMock,
      next: "https://gutendex.com/books/?page=5",
    });
    const onNextPage = jest.fn();
    render(
      <BookListPagination pagination={pagination} onNextPage={onNextPage} />
    );

    expect(screen.getByText(/Previous/i)).not.toBeDisabled();
    fireEvent.click(screen.getByText(/Previous/i));

    expect(onNextPage).toHaveBeenCalledWith(3);
  });

  test("should prevent next click", () => {
    const pagination = new Pagination({
      ...GetBooksResponseMock,
      next: "https://gutendex.com/books/?page=2084",
    });
    const onNextPage = jest.fn();
    render(
      <BookListPagination pagination={pagination} onNextPage={onNextPage} />
    );

    expect(screen.getByText(/Next/i)).toBeDisabled();
    fireEvent.click(screen.getByText(/Next/i));

    expect(onNextPage).not.toHaveBeenCalled();
  });

  test("should handle next click", () => {
    const pagination = new Pagination(GetBooksResponseMock);
    const onNextPage = jest.fn();
    render(
      <BookListPagination pagination={pagination} onNextPage={onNextPage} />
    );

    expect(screen.getByText(/Next/i)).not.toBeDisabled();
    fireEvent.click(screen.getByText(/Next/i));

    expect(onNextPage).toHaveBeenCalledWith(2);
  });
});
