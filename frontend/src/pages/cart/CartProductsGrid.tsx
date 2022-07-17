import { Grid, Typography } from '@mui/material'
import { theme } from '../../app.styled'
import CartProducts from '../../components/cartProducts/Index'
import { ICart } from '../../interfaces/Cart'

interface Props {
  currentCart: ICart
}

const CartProductsGrid = ({ currentCart }: Props) => {
  return (
    <Grid container spacing={4} bgcolor={theme.palette.background.paper}
      sx={{
        marginTop: "10px",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "center",
        maxWidth: "1360px",
        paddingLeft: 0,
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
      }}>
      <Grid item xs={12}>
        <Typography variant='h3'>Produtos</Typography>
      </Grid>
      <Grid item xs={12}>
        {currentCart && (<CartProducts cart={currentCart} />)}
      </Grid>
    </Grid>
  )
}

export default CartProductsGrid