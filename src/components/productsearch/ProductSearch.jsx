import React from "react";
import "./ProductSearch.css"

const ProductSearch = () => {
  return (
    <div>
      <div className="container-product-search">
        <label htmlFor="">
          Código del producto: <input type="text" />
        </label>
        <button>ENTER - Agregar producto</button>
      </div>
    </div>
  );
};

export default ProductSearch;
