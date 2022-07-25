import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
  id: string,
  loading: boolean
}

export default function FinishedCartDialog({ dialog, onClose, onConfirm, id, loading }: Props) {

  return (
    <Dialog
      open={dialog}
      fullWidth={true}
      maxWidth="md"
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"O que deseja fazer?"}</DialogTitle>
      <DialogActions sx={{ mt: 3 }}>
        <Button variant="contained" onClick={onClose}>Continuar Comprando</Button>
        {loading ? (
          <Button disabled>Wait...</Button>
        ) : (
          <Button variant="contained" onClick={onConfirm(id)}>Finalizar Pedido</Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
