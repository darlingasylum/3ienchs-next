import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import ExpansionPanel from './components/ExpansionPanelAgenda';
import ExpansionPanelProducts from './components/ExpansionPanelProducts';
// import CreateProduct from './components/CreateProduct';
// import EditProduct from './components/EditProduct';
// import Link from 'next/link';

import { APICall } from '../../../utils/APICall';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return value === index && <Box p={3}>{children}</Box>;
// }

export default function AdminDashboard({ data, content }) {
  const [items, setItems] = useState(data);
  // const [value, setValue] = useState(0);
  // const [beerIndex, setBeerIndex] = useState(0);

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
    console.log('items', items);

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
      <Button
        variant='contained'
        color='secondary'
        onClick={e => handleChange(e, 1)}
      >
        {content.addButton}
      </Button>
      <div className='my-8'>{list(items)}</div>
    </div>
  );
}
