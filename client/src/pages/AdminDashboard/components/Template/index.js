import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import ExpansionPanel from './components/ExpansionPanel';
import Link from 'next/link';

import { APICall } from '../../../../../utils/APICall';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return value === index && <Box p={3}>{children}</Box>;
}

export default function Template({ content }) {
  const [products, setProducts] = useState(content);
  const [value, setValue] = useState(0);
  const [beerIndex, setBeerIndex] = useState(0);

  const handleChange = async (event, newValue, beerIndex) => {
    await setBeerIndex(beerIndex);
    setValue(newValue);
  };

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
          handleEdit={handleChange}
        ></ExpansionPanel>
      ));
    }
  };

  return (
    <div>
      {/* Page d'accueil */}
      <TabPanel value={value} index={0}>
        <Button
          variant='contained'
          color='secondary'
          onClick={e => handleChange(e, 1)}
        >
          Ajouter une bière
        </Button>
        <div className='my-8'>{list(products)}</div>
      </TabPanel>

      {/* Page de création de bières */}
      <TabPanel value={value} index={1}>
        créer une bière
      </TabPanel>

      {/* Page d'édition de bière' */}
      <TabPanel value={value} index={2}>
        éditer la bière n° {beerIndex}
      </TabPanel>
    </div>
  );
}
