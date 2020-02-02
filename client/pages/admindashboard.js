import React from 'react';
import AdminDashboard from './../src/pages/AdminDashboard/index';
import './../less/style.less';
import fetch from 'isomorphic-unfetch';

const AdminDashboardPage = props => {
  return <AdminDashboard></AdminDashboard>;
};

export default AdminDashboardPage;

// HomePage.getInitialProps = async function() {
//   const res = await fetch('http://localhost:4000/api/products/getAll');
//   const data = await res.json();
//   return {
//     products: data.products
//   };
// };
