import React, { useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import { useFetch } from '../hooks/useFetch';
import '../styles/ProductsList.scss'

const API_URL = 'http://api.escuelajs.co/api/v1/products'

const ProductsList = () => {
  const { data } = useFetch(API_URL);

  if (!data) return null;
  
  return (
    <section className="main-container">
      <div className="ProductList">   
        { data.map(product => (
          <ProductItem key={product.id} product={product} /> 
          )) }                                 
      </div>
    </section>
  )
}

export default ProductsList
