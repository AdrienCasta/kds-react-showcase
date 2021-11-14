import GetBooksResponse from "../services/types/GetBooksResponse";

type ApiGetBookResponseResult = GetBooksResponse["results"][0];

export default class Book {
  key: string;
  id: ApiGetBookResponseResult["id"];
  title: ApiGetBookResponseResult["title"];
  authors: ApiGetBookResponseResult["authors"];
  languages: ApiGetBookResponseResult["languages"];

  constructor({ title, authors, languages, id }: ApiGetBookResponseResult) {
    this.id = id;
    this.key = `${title}-${id}`.toLowerCase().split(" ").join("-");
    this.title = title;
    this.authors = authors;
    this.languages = languages;
  }
}
