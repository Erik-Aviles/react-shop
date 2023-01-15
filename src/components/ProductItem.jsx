import React from "react";
import '../styles/ProductItem.scss'

const ProductItem = () => {
  return (
    <div className="product-item">
      <img
        src="https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="imagen de muestra"
      />
      <div className="produc-info">
        <div>
          <p>$120</p>
          <p>motorbike</p>
        </div>
        <figure>
          <img src="./Icons/bt_add_to_cart.svg" alt="imagen de muestra" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
