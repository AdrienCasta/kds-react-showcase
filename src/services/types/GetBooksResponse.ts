export default interface GetBooksResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    title: string;
    authors: {
      name: string;
      birth_year: number;
      death_year: number;
    }[];
    translators: [];
    subjects: string[];
    bookshelves: string[];
    languages: string[];
    copyright: boolean;
    media_type: string;
    formats: {
      "application/epub+zip": string;
      "application/rdf+xml": string;
      "application/x-mobipocket-ebook": string;
      "application/zip": string;
      "text/plain; charset=utf-8": string;
      "text/html; charset=utf-8": string;
      "image/jpeg": string;
      "text/html": string;
    };
    download_count: number;
  }[];
}
