import React, { useState } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import AlertDialog from './../AlertDialog';

import { APICall } from '../../../../../../../utils/APICall';

export default function DetailedExpansionPanel({ product, getProducts }) {
  const [open, setOpen] = useState(false);

  const handleDelete = id => {
    const fetch_param = {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    };

    APICall(`http://localhost:4000/api/products/delete/${id}`, fetch_param)
      .then(response => {
        console.log('response -->', response);
        setOpen(false);
        getProducts();
        return response;
      })
      .catch(err => console.log(err.message));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='my-2'>
      <AlertDialog
        open={open}
        handleClose={handleClose}
        productName={product.product_name}
        handleDelete={handleDelete}
        productId={product.product_id}
      ></AlertDialog>
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls='panel1c-content'
          id='panel1c-header'
        >
          <div>
            <Typography>{product.product_name} </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div
            className='w-60-percent h-full'
            style={{
              backgroundImage: `url(/static/images/${product.product_bg})`,
              backgroundSize: 'cover'
            }}
          >
            <img
              className='h-60 ml-10'
              src={`/static/images/${product.product_img}`}
            ></img>
          </div>
          <div className='flex flex-col'>
            <Typography>{product.product_type}</Typography>
            <Typography>{product.product_descr}</Typography>
            <Typography>{product.product_proof} degrés</Typography>
            <Typography>{product.product_price} €</Typography>
          </div>
          <div></div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size='small'>Editer</Button>
          <Button size='small' color='primary' onClick={() => setOpen(true)}>
            Supprimer
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}
