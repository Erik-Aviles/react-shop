import React from "react";
import '../styles/ProductInfo.scss'
import addCart from '@icons/bt_add_to_cart.svg'

const ProductInfo = () => {
  return (
    <>
      <img
        className="image-backgroup"
        src="https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="una motoneta roja pequena"
      />
      <div className="product-info">
        <p>$ 135.00</p>
        <p>Motorbike</p>
        <p>
          Una motoneta, escúter, ​ pasola, moto o scooter (del inglés), es un
          tipo de vehículo motorizado de dos ruedas, con un cuadro abierto en la
          que el conductor se sienta
        </p>{" "}
        <button className="primary-button add-to-cart-button">
          <img src={addCart} alt="carrito de compras" /> Add
          to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
