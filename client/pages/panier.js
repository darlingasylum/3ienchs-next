import React from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../layouts';
import BasketPage from '../src/pages/BasketPage/index';

import './../less/style.less';

const Panier = props => (
  <Layout>
    <BasketPage products={props}></BasketPage>
  </Layout>
);

export default Panier;

// BasketPage.getInitialProps = async function() {
//   const resDogsProducts = await fetch(
//     'http://localhost:4000/api/products/getDogsProducts'
//   );
//   const resFeatproducts = await fetch(
//     'http://localhost:4000/api/products/getFeatProducts'
//   );
//   const dogsProducts = await resDogsProducts.json();
//   const featProducts = await resFeatproducts.json();
//   return {
//     dogsProducts: dogsProducts.products,
//     featProducts: featProducts.products
//   };
// };
