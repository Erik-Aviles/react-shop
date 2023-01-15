import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductsList.scss'

const ProductsList = () => {
  return (
    <section className="main-container">
      <div className="ProductList">   
        <ProductItem />                                   
      </div>
    </section>
  )
}

export default ProductsList
