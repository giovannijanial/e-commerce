import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import { useContext, useEffect } from 'react'
import { theme } from '../../app.styled'
import { MainContainer } from '../../components/main/main.styled'
import CartContext from '../../contexts/cartProvider'
import { useCart } from '../../hooks/useCart'
import CartProductsGrid from './CartProductsGrid'
import CartResume from './CartResume'

const CartPage = () => {
  const { cart } = useContext(CartContext);
  const { getOne, cart: currentCart, loading, error, remove } = useCart();

  useEffect(() => {
    if (cart?.id)
      getOne(cart.id)
  }, [getOne, cart])

  return (
    <MainContainer sx={{ flexDirection: "column", alignItems: "center" }}>
      {currentCart ? (
        <Grid container spacing={4}>
          <Grid item xs={9}>
            <CartProductsGrid currentCart={currentCart} />
          </Grid>
          <Grid item xs={3}>
            <CartResume currentCart={currentCart} />
          </Grid>
        </Grid>
      ) : (
        <Typography variant='h1'>Ainda sem Produtos!</Typography>
      )}
    </MainContainer>
  )
}

export default CartPage