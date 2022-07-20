
import { Grid, Typography } from '@mui/material';
import { ICart } from "../../interfaces/Cart";
import CartProduct from './CartProduct';


interface Props {
  cart: ICart,
}

const CartProducts = ({ cart }: Props) => {

  const showProducts = () => {

    return (
      <Grid container spacing={3}>
        <Grid item xs={1} />
        <Grid item xs={5} />
        <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>Quantidade</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>Total Parcial</Typography>
        </Grid>
        <Grid item xs={1} />
        {cart.cartProducts && cart.cartProducts.map((cartProduct) => (
          <CartProduct key={cartProduct.id} cartId={cart.id} cartProduct={cartProduct} />
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