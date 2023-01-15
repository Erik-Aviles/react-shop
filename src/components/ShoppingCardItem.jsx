import React from "react";
import '../styles/ShoppingCartItem.scss';

const ShoppingCardItem = () => {
  return (
    <div className="ShoppingCartItem">
      <figure>
        <img
          src="https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="imagen"
        />
      </figure>
      <p>Motorbike</p>
      <p>$800</p>
    </div>
  );
};

export default ShoppingCardItem;
