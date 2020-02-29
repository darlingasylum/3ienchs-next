import React from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Link from 'next/link';
import AdminDashboard from './../../../src/pages/AdminDashboard/index';

import BackOfficeLayout from '../../../layouts/BackOfficeLayout';
import './../../../less/style.less';

const Products = ({ products }) => {
  const content = {
    type: 'ExpansionPanelProducts',
    addButton: 'ajouter une nouvelle bière',
    APIurl: 'http://localhost:4000/api/products/getAllProducts'
  };
  //   try {
  //     const token = Cookies.get('token');
  //     console.log('token', token);
  //     const isAdmin = jwt_decode(token).user_type;
  //     console.log('is admin ?', isAdmin);
  //     if (isAdmin) {
  return (
    <BackOfficeLayout>
      <AdminDashboard data={products} content={content}></AdminDashboard>
    </BackOfficeLayout>
  );
  //     } else
  //       return (
  //         <div>
  //           Vous n'avez pas les autorisations nécessaires pour accéder à cette
  //           page. Veuillez vous connecter <Link href='/admin'> ici</Link>
  //         </div>
  //       );
  //   } catch (error) {
  //     console.log('error', error);
  //     return (
  //       <div>
  //         Vous n'avez pas les autorisations nécessaires pour accéder à cette page.
  //         Veuillez vous connecter <Link href='/admin'> ici</Link> ERRORR
  //       </div>
  //     );
  //   }
};

export default Products;

Products.getInitialProps = async function() {
  const products = await fetch(
    'http://localhost:4000/api/products/getAllProducts'
  );

  const data = await products.json();
  return {
    products: data.products
  };
};
