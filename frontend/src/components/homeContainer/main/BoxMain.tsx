import { CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { IHttpConfig } from '../../../interfaces/HttpConfig'
import { IProduct } from '../../../interfaces/Product'
import { StyledBoxMid } from './boxMain.styled'
import ProductBoxMain from './boxProductMain'

const BoxMain = ({ products, loading, error, locale }:
  { products: IProduct[], loading: Boolean, error: any, locale: String }) => {

  function showProductsLeft() {
    return products && products.slice(0, 2).map((product: IProduct) => (
      <ProductBoxMain key={product.id} product={product} locale={"left"} />
    ))
  }
  function showProductsRight() {
    return products && products.slice(2, 5).map((product: IProduct) => (
      <ProductBoxMain key={product.id} product={product} locale={"right"} />
    ))
  }

  return (
    <StyledBoxMid>
      {loading && (<CircularProgress color="primary" />)}
      {error && (<p>{error.message}</p>)}
      {(locale === "left") ? showProductsLeft() : showProductsRight()}
    </StyledBoxMid>
  )
}

export default BoxMain