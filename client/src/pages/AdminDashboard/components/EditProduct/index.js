import React from 'react';
import ProductForm from '../ProductForm/index';
import { useRouter } from 'next/router';

import { APICall } from '../../../../../utils/APICall';

const EditProduct = ({ product }) => {
  const router = useRouter();

  const handleSubmit = values => {
    const body = { ...values, id: product.product_id };
    console.log('body depuis front -->', body);
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
        alert(`Bravo, la ${body.product_name} a été correctement mise à jour !`)
      )
      .then(router.push('/admindashboard/products'))
      .catch(err => console.log(err.message));
  };

  let updatedProduct;
  if (product) {
    const booleanFeaturingValue = product.featuring === 0 ? false : true;

    updatedProduct = { ...product, featuring: booleanFeaturingValue };
  }

  const title = product
    ? `Modifier la ${updatedProduct.product_name}`
    : 'Créer une nouvelle bière';

  return (
    <div className='w-half-md m-20'>
      <h2 className='mt-10'>{`Modifier la ${updatedProduct.product_name}`}</h2>
      <ProductForm
        product={updatedProduct}
        handleSubmit={handleSubmit}
      ></ProductForm>
    </div>
  );
};

export default EditProduct;
