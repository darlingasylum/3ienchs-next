import React from 'react';
import fetch from 'isomorphic-unfetch';

import ClassicLayout from '../layouts/ClassicLayout';
import BasketPage from '../src/pages/BasketPage/index';

import './../less/style.less';

const Panier = props => (
  <ClassicLayout>
    <BasketPage products={props.products}></BasketPage>
  </ClassicLayout>
);

export default Panier;

Panier.getInitialProps = async function() {
  const getProducts = await fetch(
    'http://localhost:4000/api/products/getAllProducts'
  );

  const res = await getProducts.json();

  return {
    products: res.products
  };
};
