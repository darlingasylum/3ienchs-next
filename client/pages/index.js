import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../layouts';
import Home from './../src/pages/Home/index';
import './../less/style.less';
import fetch from 'isomorphic-unfetch';

const HomePage = props => {
  return (
    <Layout>
      <Home products={props.products}></Home>
    </Layout>
  );
};

export default HomePage;

HomePage.getInitialProps = async function() {
  const res = await fetch('http://localhost:4000/api/products/getAll');
  const data = await res.json();
  return {
    products: data.products
  };
};
