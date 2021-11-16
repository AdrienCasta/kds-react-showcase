export default interface GetBookResponse {
  id: number;
  title: string;
  authors: {
    name: string;
    birth_year: number | null;
    death_year: number | null;
  }[];
  translators: string[] | [];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: {
    "application/epub+zip"?: string;
    "application/rdf+xml"?: string;
    "text/plain"?: string;
    "application/x-mobipocket-ebook"?: string;
    "image/jpeg"?: string;
    "text/html; charset=iso-8859-1"?: string;
    "text/plain; charset=us-ascii"?: string;
    "text/html"?: string;
  };
  download_count: number;
}
