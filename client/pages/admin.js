import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../layouts';
import Admin from './../src/pages/Admin/index';
import './../less/style.less';
import fetch from 'isomorphic-unfetch';

const AdminPage = props => {
  return (
    <Layout>
      <Admin></Admin>
    </Layout>
  );
};

export default AdminPage;

// HomePage.getInitialProps = async function() {
//   const res = await fetch('http://localhost:4000/api/products/getAll');
//   const data = await res.json();
//   return {
//     products: data.products
//   };
// };
