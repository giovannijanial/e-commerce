
import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { ICart } from "../../interfaces/Cart";
import CartProduct from './CartProduct';

interface Props {
  cart: ICart,
}

const CartProducts = ({ cart }: Props) => {
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [quantity, setQuantity] = useState();
  const [currentId, setCurrentId] = useState(0)

  const handleOpenDialogDelete = (id: number) => () => {
    setOpenDialogDelete(true);
    setCurrentId(id)
  };

  const handleCloseDialogDelete = () => {
    setOpenDialogDelete(false);
  };

  const showProducts = () => {

    return (
      <Grid container spacing={3}>
        <Grid item xs={1} />
        <Grid item xs={6} />
        <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>Quantidade</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>Total Parcial</Typography>
        </Grid>
        {cart.cartProducts && cart.cartProducts.map((cartProduct) => (
          <CartProduct key={cartProduct.id} cartProduct={cartProduct} />
        ))}
      </Grid>
    )
  }

  return (
    <>
      {showProducts()}
    </>
  )
}

export default CartProducts