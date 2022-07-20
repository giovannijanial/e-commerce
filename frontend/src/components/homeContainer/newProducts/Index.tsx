import { CircularProgress, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { theme } from '../../../app.styled'
import { useProduct } from '../../../hooks/useProduct'
import { IProduct } from '../../../interfaces/Product'
import ProductItemCard from '../BoxProduct'
import { StyledNewProducts } from './index.styled'



const HomeNewProducts = () => {

  const { getLastChanged, products, loading, error } = useProduct();

  useEffect(() => {
    getLastChanged()
  }, [getLastChanged])

  function showNewProducts() {
    return products && products.map((product: IProduct) => (
      <ProductItemCard key={product.id} product={product} />
    ))
  }

  return (
    <StyledNewProducts container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item md={12}>
        <Typography variant="h4">
          <b>Novos Produtos</b>
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary}>
          As novidades que trazemos para você.
        </Typography>
      </Grid>
      {loading && (<CircularProgress color="primary" />)}
      {error && (<p>{error[0]}</p>)}
      {showNewProducts()}
    </StyledNewProducts>
  )
}

export default HomeNewProducts