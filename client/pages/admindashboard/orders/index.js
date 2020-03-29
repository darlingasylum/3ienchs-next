import React from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Orders from './../../../src/pages/AdminDashboard/pages/Orders';

import BackOfficeLayout from '../../../layouts/BackOfficeLayout';
import './../../../less/style.less';

const OrdersPage = ({ orders }) => {
  //   const content = {
  //     type: 'ExpansionPanelProducts',
  //     addButton: 'ajouter une nouvelle bière',
  //     APIurl: 'http://localhost:4000/api/products/getAllProducts'
  //   };
  try {
    const token = Cookies.get('token');
    const isAdmin = jwt_decode(token).user_type;
    if (isAdmin) {
      return (
        <BackOfficeLayout>
          <Orders></Orders>
        </BackOfficeLayout>
      );
    } else
      return (
        <div>
          Vous n'avez pas les autorisations nécessaires pour accéder à cette
          page. Veuillez vous connecter
          <Link href='/admin'>
            <a>ici</a>
          </Link>
        </div>
      );
  } catch (error) {
    return (
      <div>
        Vous n'avez pas les autorisations nécessaires pour accéder à cette page.
        Veuillez vous connecter
        <Link href='/admin'>
          <a>ici</a>
        </Link>
      </div>
    );
  }
};

export default OrdersPage;

// OrdersPage.getInitialProps = async function() {
//   const products = await fetch(
//     'http://localhost:4000/api/products/getAllProducts'
//   );

//   const data = await products.json();
//   return {
//     products: data.products
//   };
// };
