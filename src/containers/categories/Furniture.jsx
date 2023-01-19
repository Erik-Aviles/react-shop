import React, { useEffect } from 'react';
import ProductItem from '../../components/ProductItem';
import { useFetch } from '../../hooks/useFetch';
import '../../styles/ProductsList.scss';

const API_URL = 'https://api.escuelajs.co/api/v1/categories/3/products'

const Furniture = () => {
  const { data } = useFetch(API_URL);

  if (!data) return null;
  // if (error) return <Messages color={'red'}>
  //   ERROR</Messages>

  return (
    <>
      <section className='Catecory-title'>
        <h1>Furniture</h1>
        <img className='img' src='https://www.flipa.net/wp-content/uploads/elegir-muebles-748x420.jpg'/> 
      </section>
      <section className="main-container">
        <div className="ProductList">
          {data.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Furniture;