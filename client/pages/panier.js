import React from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../layouts/classicLayout';
import BasketPage from '../src/pages/BasketPage/index';

import './../less/style.less';

const Panier = props => (
  <Layout>
    <BasketPage products={props.products}></BasketPage>
  </Layout>
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
