import React from 'react';
import AdminDashboard from './../src/pages/AdminDashboard/index';
import './../less/style.less';
import fetch from 'isomorphic-unfetch';

const AdminDashboardPage = ({ products }) => {
  return <AdminDashboard products={products}></AdminDashboard>;
};

export default AdminDashboardPage;

AdminDashboardPage.getInitialProps = async function() {
  const products = await fetch(
    'http://localhost:4000/api/products/getAllProducts'
  );

  // add Agenda, artwork, et zicos
  const data = await products.json();
  return {
    products: data.products
  };
};
