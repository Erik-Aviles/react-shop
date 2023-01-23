import React, { useEffect } from 'react';
import ProductItem from '../../components/ProductItem';
import { useFetch } from '../../hooks/useFetch';
import '../../styles/ProductsList.scss';

const API_URL = 'https://api.escuelajs.co/api/v1/categories/4/products'

const Shoes = () => {
  const { data } = useFetch(API_URL);

  if (!data) return null;
  // if (error) return <Messages color={'red'}>
  //   ERROR</Messages>

  return (
    <>
      <section className='Catecory-title'>
        <h1>Shoes</h1>
        <img className='img' src='https://www.runners-high.nl/wp-content/uploads/vijf-kilometer.jpg'/>
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

export default Shoes;  