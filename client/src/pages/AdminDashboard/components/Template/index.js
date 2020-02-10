import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ExpansionPanel from './components/ExpansionPanel';

export default function Template({ content }) {
  console.log('content-->', content);

  const list = products => {
    if (products.length > 0) {
      return products.map(product => (
        <ExpansionPanel
          product={product}
          key={product.product_id}
        ></ExpansionPanel>
      ));
    }
  };

  return (
    <div>
      <Button variant='contained' color='secondary'>
        Ajouter une bière
      </Button>
      <div className='my-8'>
        {/* <ExpansionPanel product={content[0]}></ExpansionPanel>
        <ExpansionPanel></ExpansionPanel> */}
        {list(content)}
      </div>
    </div>
  );
}
