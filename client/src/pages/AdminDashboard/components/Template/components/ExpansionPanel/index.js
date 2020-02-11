import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { APICall } from '../../../../../../../utils/APICall';

export default function DetailedExpansionPanel({ product }) {
  const handleDelete = id => {
    console.log('event', id);
    const fetch_param = {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    };

    APICall(`http://localhost:4000/api/products/delete/${id}`, fetch_param)
      .then(response => {
        console.log('response -->', response);
        return response;
      })
      .catch(err => console.log(err.message));
  };

  return (
    <div className='my-2'>
      <ExpansionPanel>
        <ExpansionPanelSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1c-content'
          id='panel1c-header'
        >
          <div>
            <Typography>{product.product_name} / </Typography>
          </div>
          <div>
            <Typography> / {product.product_type}</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <img
            className='max-height-80 mr-10'
            src={`/static/images/${product.product_img}`}
          ></img>
          <div>
            <Typography>{product.product_descr}</Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size='small'>Editer</Button>
          <Button
            size='small'
            color='primary'
            onClick={() => handleDelete(product.product_id)}
          >
            Supprimer
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}
