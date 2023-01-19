import React from "react";
import ProductInfo from "../components/ProductInfo";
import "../styles/DetailsProduct.scss";
import close from '@icons/icon_close.png'

const DetailsProduct = () => {
  return (
    <aside class="product-detaills">
      <div class="product-detaills-close">
        <img src={close} alt="imagen con una x" />
      </div>
     <ProductInfo />
    </aside>
  );
};

export default DetailsProduct;
