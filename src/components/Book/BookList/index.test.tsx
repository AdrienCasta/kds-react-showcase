import { render, screen, fireEvent } from "@testing-library/react";
import BookList from ".";
import Book from "../../../models/Book";
import GetBooksResponseMock from "../../../services/mocks/GetBooksResponseMock";

test("renders BookList", () => {
  const books = GetBooksResponseMock.results.map((book) => new Book(book));
  const onBookClick = jest.fn();
  render(<BookList books={books} onBookClick={onBookClick} />);

  fireEvent.click(screen.getByText(/Frankenstein; Or, The Modern Prometheus/i));

  expect(onBookClick).toHaveBeenCalledWith(84);
});
