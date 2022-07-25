import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { GridRowId } from '@mui/x-data-grid';
import { forwardRef } from 'react';
import { theme } from '../../app.styled';

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
  id: GridRowId,
  loading: boolean
}

export default function AproveOrderDialog({ dialog, onClose, onConfirm, id, loading }: Props) {

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
      <DialogTitle>{"Você tem certeza que deseja aprovar esse pagamento?"}</DialogTitle>
      <DialogActions sx={{ mt: 3 }}>
        <Button variant="contained" onClick={onClose}>Cancelar</Button>
        {loading ? (
          <Button disabled>Wait...</Button>
        ) : (
          <Button color="success"
            variant="contained"
            onClick={onConfirm(id)}>
            Aprovar Pagamento
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
