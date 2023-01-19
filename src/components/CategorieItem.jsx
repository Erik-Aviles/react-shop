import React from "react";
import { Link } from "react-router-dom";

const CategorieItem = ({categorie}) => {

  const name  = categorie.name.charAt(0).toUpperCase() + categorie.name.slice(1)
/* .replace('New Category', 'Textil').replace('Samantha de la cruz', 'Ferreteria') */


  return (
    <li>
      <Link to={`/${categorie.id}-${categorie.name.toLowerCase().replaceAll(' ', '-')}`}>{name}</Link>
    </li>
  );
};

export default CategorieItem;
