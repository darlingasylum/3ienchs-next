import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ExpansionPanel from './components/ExpansionPanel';
import { APICall } from '../../../../../utils/APICall';

export default function Template({ content }) {
  const [products, setProducts] = useState(content);

  const getProducts = () => {
    APICall(`http://localhost:4000/api/products/getAllProducts`)
      .then(response => {
        console.log('response all products -->', response);
        return response;
      })
      .then(response => setProducts(response.products))
      .catch(err => console.log(err.message));
  };

  const list = products => {
    if (products.length > 0) {
      return products.map(product => (
        <ExpansionPanel
          product={product}
          key={product.product_id}
          getProducts={getProducts}
        ></ExpansionPanel>
      ));
    }
  };

  return (
    <div>
      <Button variant='contained' color='secondary'>
        Ajouter une bière
      </Button>
      <div className='my-8'>{list(products)}</div>
    </div>
  );
}
