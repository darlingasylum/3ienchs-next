import React from 'react';
import AdminConnection from '../src/pages/AdminConnection/index';
import './../less/style.less';
import fetch from 'isomorphic-unfetch';

const AdminPage = props => {
  return <AdminConnection></AdminConnection>;
};

export default AdminPage;

// HomePage.getInitialProps = async function() {
//   const res = await fetch('http://localhost:4000/api/products/getAll');
//   const data = await res.json();
//   return {
//     products: data.products
//   };
// };
