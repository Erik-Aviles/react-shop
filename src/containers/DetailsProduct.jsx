import React from "react";
import ProductInfo from "../components/ProductInfo";
import "../styles/DetailsProduct.scss";

const DetailsProduct = () => {
  return (
    <aside class="product-detaills">
      <div class="product-detaills-close">
        <img src="./Icons/icon_close.png" alt="imagen con una x" />
      </div>
     <ProductInfo />
    </aside>
  );
};

export default DetailsProduct;
