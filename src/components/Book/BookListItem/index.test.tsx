import { render, screen } from "@testing-library/react";
import BookListItem from ".";
import Book from "../../../models/Book";
import GetBooksResponseMock from "../../../services/mocks/GetBooksResponseMock";

test("renders BookListItem", () => {
  const book = new Book(GetBooksResponseMock.results[0]);
  render(<BookListItem book={book} />);
  const bookTitle = screen.getByText(
    /Frankenstein; Or, The Modern Prometheus/i
  );

  const cover = screen.getByAltText(
    /Couverture du livre Frankenstein; Or, The Modern Prometheus/i
  );

  const author = screen.getByText(/Shelley, Mary Wollstonecraft/i);

  const tags = screen.getAllByTestId(/book-tag-[0-9]/i);

  expect(tags).toHaveLength(4);
  expect(bookTitle).toBeInTheDocument();
  expect(cover).toBeInTheDocument();
  expect(author).toBeInTheDocument();
});
