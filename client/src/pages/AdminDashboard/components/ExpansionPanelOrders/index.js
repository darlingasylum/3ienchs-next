import React, { useState } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Moment from 'react-moment';

import Details from './components/Details';
import AlertDialog from '../AlertDialog';

import { APICall } from '../../../../../utils/APICall';

export default function ExpansionPanelOrders({ order, getItems }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openOver, setOpenOver] = useState(false);

  const { id, number, date, pickupdate, price, email } = order;

  const handleOver = (id) => {
    const fetch_param = {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
    };

    APICall(`http://localhost:4000/api/orders/updateStatus/${id}`, fetch_param)
      .then((response) => {
        setOpenOver(false);
        getItems();
        return response;
      })
      .catch((err) => console.log(err.message));
  };

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

  const handleCloseOver = () => {
    setOpenOver(false);
  };

  return (
    <div className='my-2'>
      <AlertDialog
        open={openOver}
        handleClose={handleCloseOver}
        handleDelete={handleOver}
        id={id}
        wording={{
          alert: 'Vous êtes sur le point de passer une commande en "terminée"',
          question: 'La commande bien été délivrée',
          answerYes: 'Oui',
          answerNo: 'Non',
        }}
      ></AlertDialog>
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
              Commande n° {number} , date de passage :{' '}
              <b>
                {' '}
                <Moment format='DD/MM/YYYY'>{pickupdate}</Moment>
              </b>
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className='flex flex-col p-5'>
            <Typography variant='h6'></Typography>

            <Typography>
              <strong>Date de la commande :</strong>{' '}
              <Moment format='DD/MM/YYYY'>{date}</Moment>
            </Typography>
            {email && (
              <Typography>
                {' '}
                <strong>Contact : </strong> {email}{' '}
              </Typography>
            )}

            <Typography>
              <strong>Prix total : </strong>
              {price}€
            </Typography>
            <Typography>
              <strong>Details :</strong>
            </Typography>
            <Details details={order.details}></Details>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size='small' onClick={(e) => setOpenOver(true)}>
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
