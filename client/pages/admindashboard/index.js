import React from 'react';
import AdminDashboard from './../../src/pages/AdminDashboard/index';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Link from 'next/link';

import './../../less/style.less';

import fetch from 'isomorphic-unfetch';

const AdminDashboardPage = ({ products }) => {
  try {
    const token = Cookies.get('token');
    const isAdmin = jwt_decode(token).user_type;
    if (isAdmin) {
      return <AdminDashboard products={products}></AdminDashboard>;
    } else
      return (
        <div>
          Vous n'avez pas les autorisations nécessaires pour accéder à cette
          page. Veuillez vous connecter <Link href='/admin'> ici</Link>
        </div>
      );
  } catch (error) {
    console.log('error');
    return (
      <div>
        Vous n'avez pas les autorisations nécessaires pour accéder à cette page.
        Veuillez vous connecter <Link href='/admin'> ici</Link>
      </div>
    );
  }
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
