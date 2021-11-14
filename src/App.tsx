import React from "react";
import logo from "./logo.svg";
import "./style/reset.css";

import Products from "./features/products/Products";
import useAllProducts from "./features/products/useAllProducts";

const PRODUCTS_BY_PAGE = 5;

function App() {
  const { data, error, isLoading } = useAllProducts();

  if (error) {
    return null;
  }
  if (isLoading) {
    return null;
  }

  console.log(Math.ceil((data || []).length / PRODUCTS_BY_PAGE));

  return (
    <>
      <Products />
      <ul>
        {Array(Math.ceil((data || []).length / PRODUCTS_BY_PAGE))
          .fill(null)
          .map((_, i) => i)
          .map((i) => {
            return (
              <li>
                <button>{i + 1}</button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default App;
