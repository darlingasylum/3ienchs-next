import React from 'react';
import EditForm from './EditForm/index';
import { APICall } from '../../../../../utils/APICall';

const EditProduct = ({ product }) => {
  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));

    // TODO;
    // const fetch_param = {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify(values)
    // };

    // APICall(`http://localhost:4000/api/products/update`, fetch_param)
    //   .then(response => {
    //     console.log('response -->', response);
    //     return response;
    //   })
    //   .catch(err => console.log(err.message));
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
