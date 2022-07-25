import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { ICart } from '../../../../interfaces/Cart';
import { IUser } from '../../../../interfaces/User';
import GridCartProducts from '../../../components/gridCartProducts/Index';

interface Props {
  dialog: boolean,
  onClose: any,
  currentCart?: ICart,
}

export default function DialogDetailsOrder({ dialog, onClose, currentCart }: Props) {

  return (
    <Box>
      <Dialog open={dialog} onClose={onClose} fullWidth maxWidth="lg">
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <TextField
                name="id"
                fullWidth
                id="id"
                label="ID"
                value={currentCart?.id}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                name="userId"
                fullWidth
                id="userId"
                label="User ID"
                value={currentCart?.user?.id}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="username"
                fullWidth
                id="username"
                label="Username"
                value={currentCart?.user?.username}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="status"
                fullWidth
                id="status"
                label="Cart Status"
                value={currentCart?.cartStatus}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                name="quantityProducts"
                fullWidth
                id="quantityProducts"
                label="Quantity Products"
                value={currentCart?.quantityProducts}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                name="total"
                fullWidth
                id="total"
                label="Total Value"
                value={currentCart?.total.toFixed(2)}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="createdAt"
                fullWidth
                id="createdAt"
                label="Created At"
                InputProps={{
                  readOnly: true,
                }}
                value={currentCart?.createdAt}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="updatedAt"
                fullWidth
                id="updatedAt"
                label="Updated At"
                InputProps={{
                  readOnly: true,
                }}
                value={currentCart?.updateAt}
              />
            </Grid>
            <Grid item xs={12}>
              {currentCart?.id && (
                <GridCartProducts cartId={currentCart.id} cartProducts={currentCart.cartProducts} origin="details" />
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
