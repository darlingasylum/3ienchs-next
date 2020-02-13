import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({
  open,
  handleClose,
  handleDelete,
  productName,
  productId
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {
            "Attention ! Vous êtes sur le point de supprimer l'un de vos produits de la base de données"
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Voulez-vous vraiment supprimer la {productName} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDelete(productId)} color='secondary'>
            Oui
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
            Non je veux garder cette bière
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
