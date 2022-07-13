import { Box, Grid, InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { IProduct } from '../../../../interfaces/Product';

interface Props {
  dialog: boolean,
  onClose: any,
  currentProduct?: IProduct,
}

export default function DialogDetailsProduct({ dialog, onClose, currentProduct }: Props) {

  console.log(currentProduct)
  return (
    <Box>
      <Dialog open={dialog} onClose={onClose} fullWidth maxWidth="lg">
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                name="name"
                fullWidth
                id="name"
                label="Product Name"
                InputProps={{
                  readOnly: true,
                }}
                value={currentProduct?.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="categories"
                fullWidth
                id="categories"
                label="Categories"
                InputProps={{
                  readOnly: true,
                }}
                value={currentProduct?.categories.map((categorie) => categorie.name)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="price"
                fullWidth
                id="price"
                label="Price"
                InputProps={{
                  readOnly: true,
                  startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                }}
                value={`${currentProduct?.price}0`}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="quantity"
                fullWidth
                id="quantity"
                label="Quantity in Stock"
                InputProps={{
                  readOnly: true,
                }}
                value={currentProduct?.quantity}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="createdAt"
                fullWidth
                id="createdAt"
                label="Created At"
                InputProps={{
                  readOnly: true,
                }}
                value={currentProduct?.createdAt}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="updatedAt"
                fullWidth
                id="updatedAt"
                label="Updated At"
                InputProps={{
                  readOnly: true,
                }}
                value={currentProduct?.updateAt}
              />
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
