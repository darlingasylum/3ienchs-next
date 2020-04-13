import React from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Orders from './../../../src/pages/AdminDashboard/pages/Orders';

import { formatOrders } from './../../../utils/formatOrders';
import BackOfficeLayout from '../../../layouts/BackOfficeLayout';
import './../../../less/style.less';

const OrdersPage = ({ orders }) => {
  const content = {
    type: 'ExpansionPanelOrders',
    APIurl: 'http://localhost:4000/api/orders/getAll',
  };

  try {
    const token = Cookies.get('token');
    const isAdmin = jwt_decode(token).user_type;
    if (isAdmin) {
      return (
        <BackOfficeLayout>
          <Orders orders={orders} content={content}></Orders>
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

OrdersPage.getInitialProps = async function () {
  const orders = await fetch('http://localhost:4000/api/orders/getAll');
  const data = await orders.json();
  return {
    orders: formatOrders(data.orders),
  };
};
