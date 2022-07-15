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
}

export default function DialogContinueCart({ dialog, onClose }: Props) {

  const navigate = useNavigate();

  const handleOpenCart = () => {
    navigate("/cart")
  }

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
        <Button variant="contained" onClick={(e) => handleOpenCart()}>Ir Para o Carrinho</Button>
      </DialogActions>
    </Dialog>
  );
}
