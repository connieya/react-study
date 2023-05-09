import React from "react";

const ProductItem = (props) => {
  const { product } = props;
  return (
    <div className="column is-4 has-text-centered">
      <div className="box box__custom">
        <a href="#" className="button button-edit is-warning">
          edit
        </a>
        <a href="#" className="button button-delete is-danger">
          delete
        </a>
        <h1 className="title is-1">{product.picture}</h1>
        <h2 className="subtitle is-5">{product.name}</h2>
        <span className="tag">{product.price}/kg</span>
      </div>
    </div>
  );
};

export default ProductItem;
