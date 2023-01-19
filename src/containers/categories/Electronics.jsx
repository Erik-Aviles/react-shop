import React, { useEffect } from 'react';
import ProductItem from '../../components/ProductItem';
import { useFetch } from '../../hooks/useFetch';
import '../../styles/ProductsList.scss';

const API_URL = 'https://api.escuelajs.co/api/v1/categories/2/products'

const Electronics = () => {
  const { data } = useFetch(API_URL);

  if (!data) return null;
  // if (error) return <Messages color={'red'}>
  //   ERROR</Messages>

  return (
    <>
      <section className='Catecory-title'>
        <h1>Electronics</h1>
        <img className='img' src='https://i0.wp.com/www.argosus.com/wp-content/uploads/2018/09/tye.jpg?fit=1920%2C789&ssl=1'/>
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

export default Electronics;
