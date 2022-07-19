import { Avatar, Box, CircularProgress, Grid, InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import { useProduct } from '../../../../hooks/useProduct';
import { IProduct } from '../../../../interfaces/Product';

interface Props {
  dialog: boolean,
  onClose: any,
  currentProduct?: IProduct,
}

export default function DialogDetailsProduct({ dialog, onClose, currentProduct }: Props) {

  const { loading, getImage, image } = useProduct();

  useEffect(() => {
    if (currentProduct?.image)
      getImage(currentProduct.image);
  }, [getImage, image, dialog])

  return (
    <Box>
      <Dialog open={dialog} onClose={onClose} fullWidth maxWidth="lg">
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={10}>
              <Grid container direction="column">
                <Grid item xs={10}>
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
                <Grid item xs={10} sx={{ mt: 2 }}>
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
              </Grid>
            </Grid>
            <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {loading ?
                (
                  <CircularProgress color="primary" />
                ) : (
                  <Avatar variant="square" sx={{ width: 135, height: 135 }} src={`data:image/jpeg;base64, ${image}`} />
                )}
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
