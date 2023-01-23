import React, { memo, useContext } from "react";
import '../styles/ProductItem.scss';
import addCart from '@icons/bt_add_to_cart.svg'
import AppContext from "../context/AppContext";

const ProductItem =  ({product}) => {

  const {AddToCart} = useContext(AppContext);

  const handleClick = item => {
    AddToCart(item)
  }

  return (
    <div className="product-item">
      <img
        src={product.images[0]}
        alt={product.title}
        title={product.title}
      />
      <div className="produc-info">
        <div>
          <p>${product.price}</p>
          <p>{product?.title}</p>
        </div>
        <figure onClick={() =>handleClick(product)}>
          <img src={addCart} alt="icono de carrito" />
        </figure>
      </div>
    </div>
  );
}
export default ProductItem;


