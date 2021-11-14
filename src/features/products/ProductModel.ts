import { GetProductsApiRequest } from "../../services/types";

const baseImageUrl = "https://picsum.photos";

export default class ProductModel {
  name: GetProductsApiRequest["name"];
  description: GetProductsApiRequest["description"];
  imageSrc = "";
  lazyImageSrc = "";
  key = "";
  imageAlt = "";

  constructor({ name, description, ean, upc }: GetProductsApiRequest) {
    const seed = Math.random();

    this.name = name;
    this.description = description;
    this.key = `${ean}-${upc}`;

    this.imageSrc = `${baseImageUrl}/seed/${seed}/853/480`;
    this.lazyImageSrc = `${baseImageUrl}/seed/${seed}/32/18?blur=1`;
  }
}
