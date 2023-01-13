import React from 'react';
import '../styles/Header.scss'

const Headre = () => {
  return (
    <nav className="navbar">
      <img src="./Icons/icon_menu.svg" alt="icono del menu" className="menu" />
      <div className="navbar-left">
        <figure>
          <img className="logo" src="./Logos/logo_yard_sale.svg" alt="logo de la pagina" />
        </figure>
        <ul>
          <li><a href="">All</a></li>
          <li><a href="">Close</a></li>
          <li><a href="">Electromic</a></li>
          <li><a href="">Furnite</a></li>
          <li><a href="">Toys</a></li>
          <li><a href="">Other</a></li>    
        </ul>
      </div>
      <h1 className="title">My Orders</h1>
      <div className="navbar-right">
          <ul>
              <li className="navbar-email">erik8822@hotmail.com 
                <a href="">
                  <img className="arron-down" src="./Icons/flechita.svg" alt="" />
                </a>
              </li>
              <li className="navbar-shopping-cart">
                  <img className="shopping-cart" src="./Icons/icon_shopping_cart.svg" alt="un carrito de compras" />
                  <div>8</div>
              </li>
          </ul>
      </div>
    </nav>
  )
}

export default Headre
