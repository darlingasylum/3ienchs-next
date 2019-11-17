import React from 'react';

import Layout from '../layouts';
import Home from './../src/pages/Home/index';
import fetch from 'isomorphic-unfetch';

import './../less/style.less';
const HomePage = props => {
  return (
    <Layout>
      <Home products={props}></Home>
    </Layout>
  );
};

export default HomePage;

HomePage.getInitialProps = async function() {
  const resDogsProducts = await fetch(
    'http://localhost:4000/api/products/getDogsProducts'
  );
  const resFeatproducts = await fetch(
    'http://localhost:4000/api/products/getFeatProducts'
  );
  const dogsProducts = await resDogsProducts.json();
  const featProducts = await resFeatproducts.json();
  return {
    dogsProducts: dogsProducts.products,
    featProducts: featProducts.products
  };
};
