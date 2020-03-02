import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

import ExpansionPanel from './components/ExpansionPanelAgenda';
import ExpansionPanelProducts from './components/ExpansionPanelProducts';

import { APICall } from '../../../utils/APICall';

export default function AdminDashboard({ data, content }) {
  const [items, setItems] = useState(data);

  const getItems = () => {
    APICall(content.APIurl)
      .then(response => {
        console.log('response all products -->', response);
        return response;
      })
      .then(response => setItems(response.products))
      .catch(err => console.log(err.message));
  };

  const list = items => {
    const components = {
      ExpansionPanelProducts: ExpansionPanelProducts
    };

    const ExpansionPanel = components[content.type];
    if (items.length > 0) {
      return items.map(product => (
        <ExpansionPanel
          product={product}
          key={product.product_id}
          getItems={getItems}
          content={content}
        ></ExpansionPanel>
      ));
    }
  };

  return (
    <div className='mt-10'>
      <Link href='/admindashboard/products/add'>
        <Button variant='contained' color='secondary'>
          {content.addButton}
        </Button>
      </Link>
      <div className='my-8'>{list(items)}</div>
    </div>
  );
}
