import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/Header.scss";
import menu  from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useFetch } from "../hooks/useFetch";
import AppContext from "../context/AppContext";
import CategorieItem from "./CategorieItem";
import MyOrder from "../containers/MyOrder";

const API = 'https://api.escuelajs.co/api/v1/categories?limit=5';

const Header = () => {
  const {data} = useFetch(API);
  const {state} = useContext(AppContext)
  const [isActive , setIsActive] = useState(false) 
  const refMenu = useRef();

/*   useEffect(() => {
    // Muestra todas las Categorias
    console.log(data)
    
  }) */
  
  const handleToggleMenu = () => {
    if (refMenu.current.style.display === "none") {
      refMenu.current.style.display = "flex";
      setIsActive(false)
    } else {
      refMenu.current.style.display = "none";
    }
  };

  const handleToggleOrders = () => {
      setIsActive(!isActive);
      refMenu.current.style.display = "none"
  };

 
  
  if (!data) return null
  
  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
        <ul>
          {data.map((categorie) => (
            <CategorieItem key={categorie?.id} categorie={categorie} />
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li onClick={handleToggleMenu} className="navbar-email">
            erik@example.com
          </li>
          <li onClick={handleToggleOrders} className="navbar-shopping-cart">
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      <div
        className="MenuToggle"
        ref={refMenu}
        style={{
          display: "none",
        }}
      >
        <Menu />
      </div>

      {isActive &&  <MyOrder />}


    </nav>
  );
};

export default Header;
