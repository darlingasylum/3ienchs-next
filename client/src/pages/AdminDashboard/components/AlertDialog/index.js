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
  id,
  wording,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{wording.alert}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {wording.question}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDelete(id)} color='secondary'>
            {wording.answerYes}
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
            {wording.answerNo}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
