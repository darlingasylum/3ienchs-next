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

export default function ExpansionPanelOrders({ order, getItems }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openOver, setOpenOver] = useState(false);
  const router = useRouter();

  const { id, number, date, pickupdate, price, details, email } = order;

  const handleClick = (event, id) => {
    router.push(`/admindashboard/products/edit/${id}`);
  };

  // const handleOver = (id) => {
  //   const fetch_param = {
  //     method: 'PUT',
  //     headers: { 'content-type': 'application/json' },
  //   };

  //   APICall(`http://localhost:4000/api/products/delete/${id}`, fetch_param)
  //     .then((response) => {
  //       setOpenDelete(false);
  //       getItems();
  //       return response;
  //     })
  //     .catch((err) => console.log(err.message));
  // };

  const handleDelete = (id) => {
    const fetch_param = {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    };

    APICall(`http://localhost:4000/api/orders/delete/${id}`, fetch_param)
      .then((response) => {
        setOpenDelete(false);
        getItems();
        return response;
      })
      .catch((err) => console.log(err.message));
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <div className='my-2'>
      <AlertDialog
        open={openDelete}
        handleClose={handleCloseDelete}
        handleDelete={handleDelete}
        id={id}
        wording={{
          alert:
            'Attention ! Vous êtes sur le point de supprimer une commande de la base de données',
          question: 'êtes vous certain de vouloir supprimer cette commande ?',
          answerYes: 'Oui',
          answerNo: 'Non',
        }}
      ></AlertDialog>
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls='panel1c-content'
          id='panel1c-header'
        >
          <div>
            <Typography>
              Commande n° {number} , passée le {date},
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className='flex flex-col p-5'>
            <Typography variant='h6'></Typography>

            <Typography>Date de passage : {pickupdate} </Typography>
            <Typography>Prix total : {price}€</Typography>
            <Typography>Details : </Typography>
            {email && <Typography>Contact : </Typography>}
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size='small' onClick={(e) => handleClick(e, id)}>
            Commande terminée
          </Button>

          <Button
            size='small'
            color='primary'
            onClick={() => setOpenDelete(true)}
          >
            Supprimer la commande
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}
