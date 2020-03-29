import React from 'react';

import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Link from 'next/link';

import BackOfficeLayout from './../../layouts/BackOfficeLayout/index';
import AdminDashboard from './../../src/pages/AdminDashboard';

import './../../less/style.less';

const AdminDashboardPage = () => {
  try {
    const token = Cookies.get('token');
    const isAdmin = jwt_decode(token).user_type;
    if (isAdmin) {
      return (
        <BackOfficeLayout>
          <AdminDashboard></AdminDashboard>
        </BackOfficeLayout>
      );
    } else
      return (
        <div>
          Vous n'avez pas les autorisations nécessaires pour accéder à cette
          page. Veuillez vous connecter {''}
          <Link href='/admin'>
            <a>ici</a>
          </Link>
        </div>
      );
  } catch (error) {
    console.log('error');
    return (
      <div>
        Vous n'avez pas les autorisations nécessaires pour accéder à cette page.
        Veuillez vous connecter {''}
        <Link href='/admin'>
          <a>ici</a>
        </Link>
      </div>
    );
  }
};

export default AdminDashboardPage;
