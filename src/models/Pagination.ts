import GetBooksResponse from "../services/types/GetBooksResponse";

const BOOKS_BY_PAGE = 32;

export default class Pagination {
  pages: number;
  nextPageUrl: GetBooksResponse["next"];
  previousPageUrl: GetBooksResponse["previous"];
  currentPage: number;

  constructor({ count, next, previous }: GetBooksResponse) {
    this.pages = Math.ceil(count / BOOKS_BY_PAGE);
    this.nextPageUrl = next;
    this.previousPageUrl = previous;
    this.currentPage = next ? +new URL(next).search.split("?page=")[1] - 1 : 1;
  }

  get isNextPageAvailable() {
    return !!this.nextPageUrl;
  }

  get isPreviousPageAvailable() {
    return !!this.previousPageUrl;
  }

  renderPageKey(page: number) {
    return `pagination-page-${page}`;
  }
}
