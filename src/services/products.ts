// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetProductsApiRequest } from "./types";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakerapi.it/api/v1",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<GetProductsApiRequest[], unknown>({
      query: () => `/products?_quantity=21`,
      transformResponse: (response: { data: GetProductsApiRequest[] }) =>
        response.data,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = productApi;
