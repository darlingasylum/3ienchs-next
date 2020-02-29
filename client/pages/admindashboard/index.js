import React from 'react';
import BackOfficeLayout from './../../layouts/BackOfficeLayout/index';

import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Link from 'next/link';

import './../../less/style.less';

import fetch from 'isomorphic-unfetch';

const AdminDashboardPage = () => {
  try {
    const token = Cookies.get('token');
    const isAdmin = jwt_decode(token).user_type;
    if (isAdmin) {
      return (
        <BackOfficeLayout>
          <div className='mt-20'>Bienvenue sur le back office!</div>
          <div className='mt-2'>Que souhaitez-vous faire ? </div>
        </BackOfficeLayout>
      );
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
