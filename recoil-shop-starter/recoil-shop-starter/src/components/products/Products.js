import React from "react";
import { useRecoilValue } from "recoil";
import { productState } from "../../recoil/productRecoil";
import ProductItem from "./ProductItem";

const Products = () => {
  const products = useRecoilValue(productState);
  return (
    <div className="columns is-multiline">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
