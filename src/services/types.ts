export interface GetProductsApiRequest {
  name: string;
  description: string;
  ean: string;
  upc: string;
  image: string;
  net_price: number;
  taxes: number;
  price: string;
  tags: string[];
  images: {
    title: string;
    description: string;
    url: string;
  }[];
}
