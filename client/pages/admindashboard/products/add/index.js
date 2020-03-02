import React from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Link from 'next/link';

import BackOfficeLayout from '../../../../layouts/BackOfficeLayout';
import AddProduct from '../../../../src/pages/AdminDashboard/components/AddProduct';
import './../../../../less/style.less';

const addProductPage = ({ products }) => {
  try {
    const token = Cookies.get('token');
    const isAdmin = jwt_decode(token).user_type;
    if (isAdmin) {
      return (
        <BackOfficeLayout>
          <AddProduct></AddProduct>
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

export default addProductPage;
