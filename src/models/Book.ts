import GetBookResponse from "../services/types/GetBookResponse";
import GetBooksResponse from "../services/types/GetBooksResponse";

type ApiGetBook = GetBooksResponse["results"][0] | GetBookResponse;

export default class Book {
  key: string;
  id: ApiGetBook["id"];
  title: ApiGetBook["title"];
  authors: ApiGetBook["authors"];
  languages: ApiGetBook["languages"];
  cover: ApiGetBook["formats"]["image/jpeg"];
  tags: ApiGetBook["bookshelves"];

  constructor({
    title,
    authors,
    languages,
    id,
    formats,
    bookshelves,
  }: ApiGetBook) {
    this.id = id;
    this.key = `${title}-${id}`.toLowerCase().split(" ").join("-");
    this.title = title;
    this.authors = authors;
    this.languages = languages;
    this.cover = formats["image/jpeg"];
    this.tags = bookshelves;
  }

  get authorsEpitaph() {
    return this.authors
      .map(
        ({ name, birth_year, death_year }) =>
          `${name} (${birth_year} - ${death_year})`
      )
      .join(", ");
  }

  get coverAltAttribute() {
    return `Couverture du livre ${this.title}`;
  }
}
