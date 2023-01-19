import React, { useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import { useFetch } from '../hooks/useFetch';
import '../styles/ProductsList.scss'

const ProductsList = () => {
  const API_URL = 'http://api.escuelajs.co/api/v1/products'
  const {data, error, loading} = useFetch(API_URL);

  
  useEffect(() => {
    console.log(data)
  },[data])
  
  if (!data) return null;
  // if (error) return <Messages color={'red'}>
  //   ERROR</Messages>
  
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
