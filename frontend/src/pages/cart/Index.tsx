import { Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { MainContainer } from '../../components/main/main.styled'
import AuthContext from '../../contexts/authProvider'
import CartContext from '../../contexts/cartProvider'
import { CartStatus } from '../../enums/CartStatus'
import { useCart } from '../../hooks/useCart'

const CartPage = () => {
  const { auth } = useContext(AuthContext);
  const { getOne, cart } = useCart();


  useEffect(() => {
    const getCartActive = async () => {
      if (auth.user) {
        const cartIdActive = auth.user.carts?.find((cart) => cart.cartStatus === CartStatus.WAITING_PAYMENT)
        if (cartIdActive?.id)
          await getOne(cartIdActive.id)
      }
    }
    getCartActive();
  }, [])

  return (
    <MainContainer sx={{ flexDirection: "column", alignItems: "center" }}>
      <Typography variant='h3'>
        {cart && cart.cartProducts.map((cartProducts) => (
          <p>{cartProducts.product.name}</p>
        ))}
      </Typography>
    </MainContainer>
  )
}

export default CartPage