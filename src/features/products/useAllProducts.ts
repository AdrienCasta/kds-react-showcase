import { useGetAllProductsQuery } from "../../services/products";
import { GetProductsApiRequest } from "../../services/types";
import ProductModel from "./ProductModel";

const useAllProducts = () => {
  const queryResponse = useGetAllProductsQuery("all");

  return {
    ...queryResponse,
    data: queryResponse.data?.map(
      (d: GetProductsApiRequest) => new ProductModel(d)
    ),
  };
};

export default useAllProducts;
