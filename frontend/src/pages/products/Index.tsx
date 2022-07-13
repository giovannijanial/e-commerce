import { Grid, Pagination, Typography } from '@mui/material'
import { useEffect } from 'react'
import ListCategories from '../../components/homeContainer/main/ListCategories'
import { MainContainer } from '../../components/main/main.styled'
import { useCategory } from '../../hooks/useCategory'
import BoxProducts from './boxProducts'

const ProductsPage = () => {
  const { getAll, categories } = useCategory();

  useEffect(() => {
    getAll();
  }, [getAll])

  return (
    <MainContainer container spacing={{ xs: 4 }} >
      <Grid item xs={12} >
        <Typography variant="h3" component="h4">
          Products
        </Typography>
      </Grid>
      <Grid item xs={3} display={{ xs: "none", sm: "none", md: "block" }}>
        <ListCategories categories={categories} />
      </Grid>
      <Grid item xs={9}>
        <BoxProducts />
      </Grid>
      <Grid item>
        <Pagination count={10} size="large" variant='outlined' color='primary' />
      </Grid>
    </MainContainer >
  )
}

export default ProductsPage