import React from "react";
import OrderItem from "../components/OrderItem";
import "@styles/Checkout.scss";

const Checkout = () => {
  return (
    <section className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My Order</h1>
        <div className="Checkout-content">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
        </div>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </section>
  );
};

export default Checkout;
