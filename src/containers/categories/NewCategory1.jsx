import React, { useEffect } from 'react';
import ProductItem from '../../components/ProductItem';
import { useFetch } from '../../hooks/useFetch';
import '../../styles/ProductsList.scss';

const API_URL = 'https://api.escuelajs.co/api/v1/categories/14/products'

const NewCategory1 = () => {
  const { data } = useFetch(API_URL);

  if (!data) return null;
  // if (error) return <Messages color={'red'}>
  //   ERROR</Messages>

  return (
    <>
      <section className='Catecory-title'>
        <h1>New Category 1</h1>
        {/* <img className='img' src='https://www.artistapirata.com/wp-content/uploads/2018/10/moda-y-diseno-artistapirata-programas-diseno-de-NewCategory1-y-moda-MEGA.jpg'/> */}
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

export default NewCategory1;  