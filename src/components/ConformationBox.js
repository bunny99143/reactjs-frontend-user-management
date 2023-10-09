import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConformationBox(props) {
  
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
        <DialogTitle id="alert-dialog-title">
          {"Are you sure want to delete user?"}
        </DialogTitle>
       
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>No</Button>
          <Button onClick={props.deleteUser} autoFocus>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}