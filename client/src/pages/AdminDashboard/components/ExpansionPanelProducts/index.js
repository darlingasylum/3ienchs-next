import React, { useState } from 'react';
import { useRouter } from 'next/router';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link';

import AlertDialog from '../AlertDialog';
import SliderContent from '../../../../components/Slider/components/SliderContent';

import { APICall } from '../../../../../utils/APICall';

export default function ExpansionPanelProducts({ product, getItems }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const {
    featuring,
    product_name,
    product_id,
    product_bg,
    product_price,
    product_stock,
  } = product;
  const isFeaturing = featuring ? 'oui' : 'non';

  const handleClick = (event, id) => {
    router.push(`/admindashboard/products/edit/${id}`);
  };

  const handleDelete = (id) => {
    const fetch_param = {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    };

    APICall(`http://localhost:4000/api/products/delete/${id}`, fetch_param)
      .then((response) => {
        setOpen(false);
        getItems();
        return response;
      })
      .catch((err) => console.log(err.message));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='my-2'>
      <AlertDialog
        open={open}
        handleClose={handleClose}
        productName={product_name}
        handleDelete={() => handleDelete(product_id)}
        productId={product_id}
        wording={{
          alert:
            "Attention ! Vous êtes sur le point de supprimer l'un de vos produits de la base de données",
          question: 'êtes vous certain de vouloir supprimer cette bière ?',
          answerYes: 'Oui',
          answerNo: 'Non je veux garder cette bière',
        }}
      ></AlertDialog>
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls='panel1c-content'
          id='panel1c-header'
        >
          <div>
            <Typography>{product_name} </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div
            className='slider-width h-full'
            style={{
              backgroundImage: `url(/static/images/${product_bg})`,
              backgroundSize: 'cover',
            }}
          >
            <SliderContent product={product}></SliderContent>
          </div>
          <div className='flex flex-col p-5'>
            <Typography variant='h6'>Autres informations :</Typography>

            <Typography>Prix : {product_price} €</Typography>
            <Typography>Featuring ? {isFeaturing}</Typography>
            <Typography>Stock : {product_stock} </Typography>
          </div>
          <div></div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          {/* <Link href={`/admindashboard/products/edit/${product_id}`}> */}
          <Button size='small' onClick={(e) => handleClick(e, product_id)}>
            Editer
          </Button>
          {/* </Link> */}

          <Button size='small' color='primary' onClick={() => setOpen(true)}>
            Supprimer
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}
