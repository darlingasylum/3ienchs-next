import React from 'react';
import EditForm from './EditForm/index';
import { useRouter } from 'next/router';

import { APICall } from '../../../../../utils/APICall';

const EditProduct = ({ product }) => {
  const router = useRouter();

  const handleSubmit = values => {
    const body = { ...values, id: product.product_id };

    const fetch_param = {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body)
    };

    APICall(`http://localhost:4000/api/products/update`, fetch_param)
      .then(response => {
        return response;
      })
      .then(() =>
        alert(
          `Bravo, la ${product.product_name} a été correctement mise à jour !`
        )
      )
      .then(router.push('/admindashboard/products'))
      .catch(err => console.log(err.message));
  };

  const booleanFeaturingValue = product.featuring === 0 ? false : true;

  const updatedProduct = { ...product, featuring: booleanFeaturingValue };

  return (
    <div className='w-half-md m-20'>
      <h2 className='mt-10'>Modifier la {updatedProduct.product_name} :</h2>
      <EditForm product={updatedProduct} handleSubmit={handleSubmit}></EditForm>
    </div>
  );
};

export default EditProduct;
