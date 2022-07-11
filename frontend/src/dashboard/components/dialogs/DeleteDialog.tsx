import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { GridRowId } from '@mui/x-data-grid';
import { forwardRef } from 'react';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  dialog: boolean,
  onClose: any,
  onConfirm: any,
  id: GridRowId
}

export default function DialogDelete({ dialog, onClose, onConfirm, id }: Props) {
  return (
    <div>
      <Dialog
        open={dialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete Product"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog">
            Are you sure you want to delete the product {id}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm(id)}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
