import { Typography } from '@mui/material'
import React from 'react'
import { MainContainer } from '../../components/main/main.styled'

const CartPage = () => {
  return (
    <MainContainer sx={{ flexDirection: "column", alignItems: "center" }}>
      <Typography variant='h3'>
        Cart
      </Typography>
    </MainContainer>
  )
}

export default CartPage