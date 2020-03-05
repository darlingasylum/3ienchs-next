import React from 'react';
import ProductForm from './../ProductForm';
import { useRouter } from 'next/router';

import { APICall } from '../../../../../utils/APICall';

const createProduct = () => {
  const router = useRouter();

  const handleSubmit = values => {
    const fetch_param = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(values)
    };

    APICall(`http://localhost:4000/api/products/create`, fetch_param)
      .then(response => {
        return response;
      })
      .then(() => alert(`Bravo, vous avez bien créé la ${values.product_name}`))
      .then(router.push('/admindashboard/products'))
      .catch(err => console.log(err.message));
  };
  return (
    <div className='w-half-md m-20'>
      <h2 className='mt-10'>Créer une nouvelle bière</h2>
      <ProductForm handleSubmit={handleSubmit}></ProductForm>
    </div>
  );
};

export default createProduct;
