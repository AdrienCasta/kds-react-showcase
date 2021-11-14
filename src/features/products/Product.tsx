/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";
import ProductModel from "./ProductModel";

const styles = {
  container: {
    width: "100%",
  },
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column" as "column",
    padding: "1rem",
  },
};

type ProductProps = ProductModel;

const Product = (props: ProductProps) => {
  const imgEl = React.useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = React.useState(false);

  const onImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <figure css={styles.container}>
      <div css={styles.card}>
        <h1>{props.name}</h1>
        <div
          css={{
            opacity: loaded ? 0 : 1,
            backgroundColor: `grey`,
            backgroundImage: `url(${props.lazyImageSrc})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            aspectRatio: "16/9",
            width: loaded ? 0 : "100%",
            height: loaded ? 0 : "100%",
          }}
        ></div>
        <img
          ref={imgEl}
          onLoad={onImageLoaded}
          loading="lazy"
          src={props.imageSrc}
          alt={props.description}
        />
        <figcaption>
          <p>{props.description}</p>
        </figcaption>
      </div>
    </figure>
  );
};

export default Product;
