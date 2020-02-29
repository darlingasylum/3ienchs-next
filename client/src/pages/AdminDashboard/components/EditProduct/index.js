import React from 'react';
import EditForm from './EditForm/index';

const EditProduct = ({ product }) => {
  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className='w-half-md m-20'>
      <h2 className='mt-10'>Modifier la {product.product_name} :</h2>
      <EditForm product={product} handleSubmit={handleSubmit}></EditForm>
    </div>
  );
};

export default EditProduct;
