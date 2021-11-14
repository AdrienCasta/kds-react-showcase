import React from "react";
import "./App.css";
import BookList from "./components/Book/BookList";
import { useGetBooksQuery } from "./services/book";

function App() {
  const { data: books } = useGetBooksQuery("all");

  if (!books) {
    return null;
  }

  return (
    <div className="App">
      <BookList books={books} />
    </div>
  );
}

export default App;
