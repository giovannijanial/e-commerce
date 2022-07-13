import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { CartStatus } from '../../../../enums/CartStatus';
import { useCart } from '../../../../hooks/useCart';
import { ICart, ICartItem } from '../../../../interfaces/Cart';
import { IUser } from '../../../../interfaces/User';
import GridCartProducts from '../../../components/gridCartProducts/Index';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
interface Props {
  dialog: boolean,
  setOpenDialogUpdate: any,
  currentCart?: ICart,
}

export default function DialogUpdateOrder({ dialog, setOpenDialogUpdate, currentCart }: Props) {
  const [id, setId] = useState<string | undefined>("");
  const [total, setTotal] = useState(0);
  const [quantityProducts, setQuantityProducts] = useState(0);
  const [cartStatus, setCartStatus] = useState<CartStatus>();
  const [user, setUser] = useState<IUser | undefined>();
  const [cartProducts, setCartProducts] = useState<ICartItem[]>([]);

  const { update, loading } = useCart();

  useEffect(() => {
    if (currentCart) {
      setId(currentCart?.id)
      setTotal(currentCart?.total)
      setQuantityProducts(currentCart?.quantityProducts)

      if (currentCart?.cartStatus === CartStatus.WAITING_PAYMENT)
        setCartStatus(CartStatus.WAITING_PAYMENT)
      if (currentCart?.cartStatus === CartStatus.PAYD)
        setCartStatus(CartStatus.PAYD)
      if (currentCart?.cartStatus === CartStatus.SHIPPED)
        setCartStatus(CartStatus.SHIPPED)
      if (currentCart?.cartStatus === CartStatus.DELIVERED)
        setCartStatus(CartStatus.DELIVERED)
      if (currentCart?.cartStatus === CartStatus.CANCELED)
        setCartStatus(CartStatus.CANCELED)

      setUser(currentCart?.user)
      setCartProducts(currentCart?.cartProducts)
    }
  }, [dialog])

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updateCart: ICart = {
      total,
      quantityProducts,
      cartStatus,
      user,
      cartProducts
    }

    if (currentCart?.id) {
      await update(currentCart?.id, updateCart);
      setOpenDialogUpdate(false)
    }

  }, [update, total, quantityProducts, cartStatus, user, cartProducts]);

  const handleCloseDialogUpdate = () => {
    setOpenDialogUpdate(false);
  };

  return (
    <Box>
      <Dialog open={dialog} onClose={setOpenDialogUpdate} fullWidth maxWidth="lg">
        <DialogTitle>Order Update</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={4}>
                <TextField
                  name="id"
                  fullWidth
                  id="id"
                  label="ID"
                  value={id}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  name="userId"
                  fullWidth
                  id="userId"
                  label="User ID"
                  value={user?.id}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="username"
                  fullWidth
                  id="username"
                  label="Username"
                  value={user?.username}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  name="quantityProducts"
                  fullWidth
                  id="quantityProducts"
                  label="Quantity Products"
                  value={quantityProducts}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  name="total"
                  fullWidth
                  id="total"
                  label="Total Value"
                  value={total.toFixed(2)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="status"
                  fullWidth
                  id="status"
                  label="Cart Status"
                  value={cartStatus}
                />
              </Grid>
              <Grid item xs={12}>
                {currentCart?.id && (
                  <GridCartProducts cartId={currentCart.id} cartProducts={currentCart.cartProducts} origin="update" />
                )}
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "space-around", width: "150px", mt: 2, alignSelf: "flex-end" }}>
              <Button onClick={handleCloseDialogUpdate}>Cancel</Button>
              {!loading ? (
                <Button type='submit'>Save</Button>
              ) : (
                <Button disabled={true}>Wait...</Button>
              )}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box >
  );
}
