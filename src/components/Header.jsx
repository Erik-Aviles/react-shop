import React, { useEffect, useRef, useState } from "react";
import "../styles/Header.scss";
import menu  from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useFetch } from "../hooks/useFetch";
import CategorieItem from "./CategorieItem";

const API = 'https://api.escuelajs.co/api/v1/categories';

const Header = () => {
  const ref = useRef();
  const {data} = useFetch(API);

  
  useEffect(() => {
    console.log(data)
    
  })
  
  const handleToggle = () => {
    if (ref.current.style.display === 'none') {
      ref.current.style.display = 'flex'
    }else{
      ref.current.style.display = 'none'
    }
  }
  
  if (!data) return null
  
  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
        <ul>
          {data.map(categorie => (
            <CategorieItem key={categorie?.id} categorie={categorie}/>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li onClick={handleToggle} className="navbar-email">
            erik@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={shoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      <div
        className="MenuToggle"
        ref={ref}
        style={{
          display: "none",
        }}
      >
        <Menu />
      </div>
    </nav>
  );
};

export default Header;
