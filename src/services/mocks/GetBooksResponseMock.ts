const GetBooksResponseMock = {
  count: 66643,
  next: "https://gutendex.com/books/?page=2",
  previous: null,
  results: [
    {
      id: 84,
      title: "Frankenstein; Or, The Modern Prometheus",
      authors: [
        {
          name: "Shelley, Mary Wollstonecraft",
          birth_year: 1797,
          death_year: 1851,
        },
      ],
      translators: [],
      subjects: [
        "Frankenstein's monster (Fictitious character) -- Fiction",
        "Frankenstein, Victor (Fictitious character) -- Fiction",
        "Gothic fiction",
        "Horror tales",
        "Monsters -- Fiction",
        "Science fiction",
        "Scientists -- Fiction",
      ],
      bookshelves: [
        "Gothic Fiction",
        "Movie Books",
        "Precursors of Science Fiction",
        "Science Fiction by Women",
      ],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/84.epub.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/84.rdf",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/84.kindle.images",
        "application/zip": "https://www.gutenberg.org/files/84/84-h.zip",
        "text/plain; charset=utf-8":
          "https://www.gutenberg.org/files/84/84-0.zip",
        "text/html; charset=utf-8":
          "https://www.gutenberg.org/files/84/84-h/84-h.htm",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg",
        "text/html": "https://www.gutenberg.org/ebooks/84.html.images",
      },
      download_count: 75253,
    },
    {
      id: 1342,
      title: "Pride and Prejudice",
      authors: [{ name: "Austen, Jane", birth_year: 1775, death_year: 1817 }],
      translators: [],
      subjects: [
        "Courtship -- Fiction",
        "Domestic fiction",
        "England -- Fiction",
        "Love stories",
        "Sisters -- Fiction",
        "Social classes -- Fiction",
        "Young women -- Fiction",
      ],
      bookshelves: ["Best Books Ever Listings", "Harvard Classics"],
      languages: ["en"],
      copyright: false,
      media_type: "Text",
      formats: {
        "text/html; charset=utf-8":
          "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm",
        "application/x-mobipocket-ebook":
          "https://www.gutenberg.org/ebooks/1342.kindle.images",
        "application/epub+zip":
          "https://www.gutenberg.org/ebooks/1342.epub.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/1342.rdf",
        "image/jpeg":
          "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.small.jpg",
        "text/plain; charset=utf-8":
          "https://www.gutenberg.org/files/1342/1342-0.txt",
        "text/html": "https://www.gutenberg.org/ebooks/1342.html.images",
      },
      download_count: 54406,
    },
  ],
};
export default GetBooksResponseMock;
