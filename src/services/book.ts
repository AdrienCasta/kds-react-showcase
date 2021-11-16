import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Book from "../models/Book";
import Pagination from "../models/Pagination";
import GetBookResponse from "./types/GetBookResponse";
import GetBooksResponse from "./types/GetBooksResponse";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://gutendex.com/" }),
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    getBooks: builder.query<{ books: Book[]; pagination: Pagination }, string>({
      query: (page: string) => `books?page=${page}`,
      transformResponse: (response: GetBooksResponse) => {
        const books = response.results.map((book) => new Book(book));
        const pagination = new Pagination(response);
        return {
          books,
          pagination,
        };
      },
    }),
    getBook: builder.query<{ book: Book }, string>({
      query: (id: string) => `books/${id}`,
      transformResponse: (response: GetBookResponse) => {
        return { book: new Book(response) };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery, useLazyGetBooksQuery, useLazyGetBookQuery } =
  bookApi;
