import React from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Link from 'next/link';

import EditProduct from '../../../../../src/pages/AdminDashboard/components/EditProduct';
import BackOfficeLayout from './../../../../../layouts/BackOfficeLayout';

import { useRouter } from 'next/router';

import './../../../../../less/style.less';

const EditPage = ({ product }) => {
  try {
    const token = Cookies.get('token');
    const isAdmin = jwt_decode(token).user_type;
    if (isAdmin) {
      return (
        <BackOfficeLayout>
          <EditProduct product={product}></EditProduct>
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

export default EditPage;

EditPage.getInitialProps = async function({ query }) {
  const product = await fetch(
    `http://localhost:4000/api/products/getProduct/${query.id}`
  );

  const data = await product.json();
  return {
    product: data.product
  };
};
