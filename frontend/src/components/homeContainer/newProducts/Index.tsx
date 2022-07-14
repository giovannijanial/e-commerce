import { CircularProgress, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { IProduct } from '../../../interfaces/Product'
import ProductItemCard from '../BoxProduct'
import { StyledNewProducts } from './index.styled'
import { useProduct } from '../../../hooks/useProduct'

const HomeNewProducts = () => {
  const { getAll, products, loading, error } = useProduct();

  useEffect(() => {
    getAll()
  }, [getAll])

  function showNewProducts() {
    return products && products.slice(7, 10).map((product: IProduct) => (
      <ProductItemCard key={product.id} product={product} />
    ))
  }

  return (
    <StyledNewProducts container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item md={12}>
        <Typography variant="h2" component="h4">
          New Products
        </Typography>
      </Grid>
      {loading && (<CircularProgress color="primary" />)}
      {error && (<p>{error[0]}</p>)}
      {showNewProducts()}
    </StyledNewProducts>
  )
}

export default HomeNewProducts