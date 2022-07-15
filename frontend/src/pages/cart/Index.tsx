import { Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { MainContainer } from '../../components/main/main.styled'
import AuthContext from '../../contexts/authProvider'
import CartContext from '../../contexts/cartProvider'
import { CartStatus } from '../../enums/CartStatus'
import { useCart } from '../../hooks/useCart'

const CartPage = () => {
  const { cart } = useContext(CartContext);

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