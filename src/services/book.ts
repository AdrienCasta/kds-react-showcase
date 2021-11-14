import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Book from "../models/Book";
import GetBooksResponse from "./types/GetBooksResponse";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://gutendex.com/" }),
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], string>({
      query: () => `books`,
      transformResponse: (response: GetBooksResponse) => {
        return response.results.map((book) => new Book(book));
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery } = bookApi;
