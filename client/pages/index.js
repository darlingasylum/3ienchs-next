import React from 'react';

import Layout from '../layouts';
import Home from './../src/pages/Home/index';
import fetch from 'isomorphic-unfetch';

import './../less/style.less';
const HomePage = props => {
  return (
    <Layout>
      <Home products={props.products}></Home>
    </Layout>
  );
};

export default HomePage;

HomePage.getInitialProps = async function() {
  const res = await fetch('http://localhost:4000/api/products/getDogsProducts');
  const data = await res.json();
  return {
    products: data.products
  };
};
