/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";
import Product from "./Product";
import useAllProducts from "./useAllProducts";

const Products = () => {
  const { data, error, isLoading } = useAllProducts();

  if (error) {
    return null;
  }
  if (isLoading) {
    return null;
  }

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div css={styles.products}>
      {data.map((productItem) => (
        <article css={styles.productsItem} key={productItem.key}>
          <Product {...productItem} />
        </article>
      ))}
    </div>
  );
};

const styles = {
  products: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    justifyContent: "center",
  },
  productsItem: {
    display: "flex",
    flex: "1 1 300px",
    margin: "5px",
    gap: "1rem",
  },
};

export default Products;
